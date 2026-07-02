'use client';

import { useState, useEffect, useCallback } from 'react';

const COINS = [
  { id: 'bitcoin',      symbol: 'BTC', hebrewName: 'ביטקוין' },
  { id: 'ethereum',     symbol: 'ETH', hebrewName: "את'ריום" },
  { id: 'solana',       symbol: 'SOL', hebrewName: 'סולנה' },
  { id: 'ripple',       symbol: 'XRP', hebrewName: 'ריפל' },
  { id: 'cardano',      symbol: 'ADA', hebrewName: 'קרדנו' },
  { id: 'binancecoin',  symbol: 'BNB', hebrewName: 'BNB' },
];

const COIN_IDS = COINS.map(c => c.id).join(',');
const COINGECKO_URL =
  `https://api.coingecko.com/api/v3/simple/price?ids=${COIN_IDS}&vs_currencies=usd,ils&include_24hr_change=true`;
const REFRESH_MS = 60_000;

type CoinData = {
  usd: number;
  ils: number;
  usd_24h_change: number;
};

type Prices = Record<string, CoinData>;

function fmtUSD(n: number) {
  return new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: n < 1 ? 4 : 2,
    maximumFractionDigits: n < 1 ? 4 : 2,
  }).format(n);
}

function fmtILS(n: number) {
  return new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
    minimumFractionDigits: n < 1 ? 4 : 2,
    maximumFractionDigits: n < 1 ? 4 : 2,
  }).format(n);
}

function fmtChange(n: number | null | undefined): string {
  if (n == null) return '—';
  return (n >= 0 ? '+' : '') + n.toFixed(2) + '%';
}

export default function CryptoPriceWidget() {
  const [prices, setPrices] = useState<Prices | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPrices = useCallback(async () => {
    setFetching(true);
    try {
      const res = await fetch(COINGECKO_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: Prices = await res.json();
      setPrices(data);
      setLastUpdated(new Date());
      setError(null);
    } catch {
      setError('לא ניתן לטעון את המחירים כרגע. נסה שוב בעוד מספר שניות.');
    } finally {
      setFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchPrices();
    const timer = setInterval(fetchPrices, REFRESH_MS);
    return () => clearInterval(timer);
  }, [fetchPrices]);

  return (
    <section
      dir="rtl"
      lang="he"
      aria-label="מחירי מטבעות קריפטו"
      className="glass-strong rounded-3xl p-6 max-w-2xl mx-auto shadow-card"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <h3 className="text-xl font-bold text-white flex-1">מחירי קריפטו בזמן אמת</h3>
        {lastUpdated && (
          <span className="text-xs text-slate-500">
            עודכן: {lastUpdated.toLocaleTimeString('he-IL')}
          </span>
        )}
        <button
          onClick={fetchPrices}
          disabled={fetching}
          title="רענן מחירים"
          aria-label="רענן מחירים"
          className="border border-white/15 rounded-lg px-3 py-1 text-base hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {fetching ? '⏳' : '🔄'}
        </button>
      </div>

      {/* Error */}
      {error && (
        <p role="alert" className="bg-red-500/10 border border-red-400/30 text-red-300 rounded-lg px-4 py-3 text-sm mb-4">
          {error}
        </p>
      )}

      {/* Initial loading */}
      {fetching && !prices && (
        <p className="text-center text-slate-500 py-8">טוען מחירים...</p>
      )}

      {/* Price table */}
      {prices && (
        <div
          role="table"
          aria-label="טבלת מחירי מטבעות"
          className="rounded-2xl overflow-hidden border border-white/10 mb-5"
        >
          <div
            role="row"
            className="grid grid-cols-[2fr_1.5fr_1.5fr_1fr] bg-white/5 px-4 py-2 text-xs font-semibold text-slate-400 border-b border-white/10 text-right"
          >
            <span role="columnheader">מטבע</span>
            <span role="columnheader">מחיר USD</span>
            <span role="columnheader">מחיר ₪</span>
            <span role="columnheader">שינוי 24ש׳</span>
          </div>

          {COINS.map(coin => {
            const d = prices[coin.id];
            if (!d) return null;
            const change = d.usd_24h_change;
            const isUp = change >= 0;
            return (
              <div
                key={coin.id}
                role="row"
                className="grid grid-cols-[2fr_1.5fr_1.5fr_1fr] px-4 py-3 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors items-center text-right"
              >
                <span role="cell" className="flex flex-col gap-0.5">
                  <strong className="text-sm text-white">{coin.hebrewName}</strong>
                  <span className="text-xs text-slate-500 font-medium">{coin.symbol}</span>
                </span>
                <span role="cell" className="text-sm font-semibold text-slate-200 tabular-nums">
                  {fmtUSD(d.usd)}
                </span>
                <span role="cell" className="text-sm font-semibold text-slate-200 tabular-nums">
                  {fmtILS(d.ils)}
                </span>
                <span
                  role="cell"
                  aria-label={`שינוי של ${fmtChange(change)} ב-24 שעות`}
                  className={`text-sm font-semibold rounded px-2 py-0.5 text-center tabular-nums ${
                    isUp ? 'text-green-300 bg-green-500/10' : 'text-red-300 bg-red-500/10'
                  }`}
                >
                  {fmtChange(change)}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Educational explainer */}
      <details className="border border-white/10 rounded-2xl mb-4 overflow-hidden">
        <summary className="px-4 py-3 text-sm font-semibold text-brand-300 cursor-pointer bg-white/5 select-none hover:bg-white/10 transition-colors">
          מה המחירים האלה אומרים? לחץ להסבר
        </summary>
        <div className="px-5 py-4 text-sm leading-relaxed text-slate-400 space-y-3">
          <p>
            <strong className="text-slate-200">מה זה מחיר קריפטו?</strong>{' '}
            מטבעות דיגיטליים כמו ביטקוין ואת׳ריום נסחרים בשווקים גלובליים פתוחים,
            בדיוק כמו מניות בבורסה. המחיר נקבע על ידי ההיצע והביקוש של מיליוני קונים
            ומוכרים ברחבי העולם.
          </p>
          <p>
            <strong className="text-slate-200">למה המחיר משתנה כל הזמן?</strong>{' '}
            שוק הקריפטו פועל 24/7 ללא הפסקה, ואין לו בנק מרכזי שמייצב את הערך.
            חדשות כלכליות, החלטות רגולטוריות, ורמת האמון הציבורית משפיעים ישירות
            על המחיר. תנודתיות זו היא מאפיין בסיסי של הטכנולוגיה, לא תקלה.
          </p>
          <p>
            <strong className="text-slate-200">ILS — שקל ישראלי:</strong>{' '}
            המחיר בשקלים מחושב לפי שער ההמרה הנוכחי של CoinGecko ומעודכן בזמן אמת.
          </p>
          <p className="bg-gold-500/10 border-s-4 border-gold-500 px-3 py-2 rounded-e text-gold-200 text-xs">
            המידע לצרכי לימוד בלבד ואינו ייעוץ השקעות. מחירי קריפטו תנודתיים מאוד ועלולים לרדת בחדות.
          </p>
        </div>
      </details>

      {/* Source attribution */}
      <p className="text-center text-xs text-slate-500">
        נתונים:{' '}
        <a
          href="https://www.coingecko.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-400 hover:underline"
        >
          CoinGecko
        </a>
        {' '}— מתעדכן כל 60 שניות
      </p>
    </section>
  );
}
