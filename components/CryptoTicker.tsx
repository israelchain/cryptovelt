'use client';

import { useState, useEffect, useCallback } from 'react';

const COINS = [
  { id: 'bitcoin', symbol: '₿', hebrewName: 'ביטקוין', variant: 'orange' as const },
  { id: 'ethereum', symbol: 'Ξ', hebrewName: "את'ריום", variant: 'indigo' as const },
  { id: 'solana', symbol: '◎', hebrewName: 'סולנה', variant: 'indigo' as const },
];

const COIN_IDS = COINS.map((c) => c.id).join(',');
const COINGECKO_URL = `https://api.coingecko.com/api/v3/simple/price?ids=${COIN_IDS}&vs_currencies=usd&include_24hr_change=true`;
const REFRESH_MS = 60_000;

type Changes = Record<string, number | undefined>;

export default function CryptoTicker() {
  const [changes, setChanges] = useState<Changes>({});

  const fetchChanges = useCallback(async () => {
    try {
      const res = await fetch(COINGECKO_URL);
      if (!res.ok) return;
      const data = await res.json();
      const next: Changes = {};
      for (const c of COINS) next[c.id] = data[c.id]?.usd_24h_change;
      setChanges(next);
    } catch {
      /* silent — decorative ticker, not critical UI */
    }
  }, []);

  useEffect(() => {
    fetchChanges();
    const timer = setInterval(fetchChanges, REFRESH_MS);
    return () => clearInterval(timer);
  }, [fetchChanges]);

  return (
    <div
      dir="rtl"
      lang="he"
      aria-label="מטבעות מובילים"
      className="card rounded-2xl p-3 flex flex-col gap-2.5 w-full sm:w-44"
    >
      <span className="text-[11px] font-bold text-ink-400 px-1">מטבעות מובילים</span>
      {COINS.map((c) => {
        const change = changes[c.id];
        const isUp = (change ?? 0) >= 0;
        return (
          <div key={c.id} className="flex items-center gap-2.5 px-1">
            <div className="coin-stage w-7 h-7 shrink-0">
              <div className={`coin-3d ${c.variant === 'indigo' ? 'coin-3d--indigo' : ''} text-xs`}>
                <div className={`coin-face ${c.variant === 'indigo' ? 'coin-face--indigo' : ''}`}>{c.symbol}</div>
                <div className={`coin-face coin-face--back ${c.variant === 'indigo' ? 'coin-face--indigo' : ''}`}>
                  {c.symbol}
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-ink-800 flex-1">{c.hebrewName}</span>
            {change != null && (
              <span
                className={`text-[10px] font-bold rounded-full px-1.5 py-0.5 ${
                  isUp ? 'text-mint-600 bg-mint-50' : 'text-red-600 bg-red-50'
                }`}
                dir="ltr"
                aria-label={`מגמת 24 שעות: ${isUp ? 'עלייה' : 'ירידה'}`}
              >
                {isUp ? '▲' : '▼'} {Math.abs(change).toFixed(1)}%
              </span>
            )}
          </div>
        );
      })}
      <span className="text-[10px] text-ink-400 text-center pt-1 border-t border-slate-100">
        מגמת 24 שעות · CoinGecko
      </span>
    </div>
  );
}
