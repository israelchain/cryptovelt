'use client'

import { useEffect, useMemo, useState } from 'react'
import { tools } from './cockpitData'

type Status = 'exploite' | 'partiel' | 'gaspille'

interface ToolEntry {
  status: Status
  note: string
}

type MonthEntries = Record<string, ToolEntry>

const STORAGE_KEY = 'cryptovelt_cockpit_journal_v1'

const STATUS_LABEL: Record<Status, string> = {
  exploite: 'Exploité',
  partiel: 'Partiellement',
  gaspille: 'Gaspillé',
}

const STATUS_STYLE: Record<Status, string> = {
  exploite: 'bg-mint-50 text-mint-600 border-mint-500',
  partiel: 'bg-btc-50 text-btc-700 border-btc-500',
  gaspille: 'bg-slate-100 text-ink-500 border-slate-300',
}

function currentMonthKey(): string {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
}

function monthLabel(key: string): string {
  const [year, month] = key.split('-').map(Number)
  const date = new Date(year, month - 1, 1)
  return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
}

function shiftMonth(key: string, delta: number): string {
  const [year, month] = key.split('-').map(Number)
  const date = new Date(year, month - 1 + delta, 1)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

function emptyMonth(): MonthEntries {
  const entries: MonthEntries = {}
  for (const tool of tools) {
    entries[tool.id] = { status: 'gaspille', note: '' }
  }
  return entries
}

export default function UsageJournal() {
  const [month, setMonth] = useState<string>('')
  const [journal, setJournal] = useState<Record<string, MonthEntries>>({})
  const [loaded, setLoaded] = useState(false)
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle')

  useEffect(() => {
    setMonth(currentMonthKey())
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setJournal(JSON.parse(raw))
    } catch {
      // localStorage indisponible (mode privé, quota) — le journal reste vide pour cette session.
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(journal))
    } catch {
      // stockage indisponible — pas de blocage, juste pas de persistance.
    }
  }, [journal, loaded])

  const entries = useMemo(() => journal[month] ?? emptyMonth(), [journal, month])

  function updateEntry(toolId: string, patch: Partial<ToolEntry>) {
    setJournal((prev) => ({
      ...prev,
      [month]: {
        ...emptyMonth(),
        ...prev[month],
        [toolId]: { ...emptyMonth()[toolId], ...prev[month]?.[toolId], ...patch },
      },
    }))
  }

  async function copyMarkdown() {
    const lines = [`## Journal d'utilisation — ${monthLabel(month)}`, '']
    for (const tool of tools) {
      const entry = entries[tool.id]
      lines.push(`- **${tool.name}** — ${STATUS_LABEL[entry.status]}${entry.note ? ` : ${entry.note}` : ''}`)
    }
    const markdown = lines.join('\n')
    try {
      await navigator.clipboard.writeText(markdown)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }
    setTimeout(() => setCopyState('idle'), 2500)
  }

  if (!month) return null

  return (
    <section className="mb-14">
      <h2 className="font-display text-2xl font-bold text-ink-900 mb-2 border-s-4 border-btc-500 ps-4">
        3. Journal d’utilisation mensuel
      </h2>
      <p className="text-ink-500 mb-2 ps-4">
        Un point par mois : qu’est-ce qui a vraiment été exploité, qu’est-ce qui a été gaspillé.
      </p>
      <p className="text-xs text-ink-400 mb-6 ps-4">
        Ce site est exporté statiquement (pas de backend) : ce journal est enregistré uniquement dans
        ce navigateur (localStorage). Utilisez « Copier en Markdown » pour sauvegarder une copie
        ailleurs (note, doc CRY-41) si besoin.
      </p>

      <div className="card rounded-2xl p-5">
        <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMonth((m) => shiftMonth(m, -1))}
              className="w-8 h-8 rounded-lg border border-slate-200 text-ink-500 hover:border-brand-400 hover:text-brand-600 transition-colors"
              aria-label="Mois précédent"
            >
              ‹
            </button>
            <span className="font-semibold text-ink-900 capitalize min-w-[10rem] text-center">
              {monthLabel(month)}
            </span>
            <button
              type="button"
              onClick={() => setMonth((m) => shiftMonth(m, 1))}
              className="w-8 h-8 rounded-lg border border-slate-200 text-ink-500 hover:border-brand-400 hover:text-brand-600 transition-colors"
              aria-label="Mois suivant"
            >
              ›
            </button>
          </div>

          <button
            type="button"
            onClick={copyMarkdown}
            className="text-sm font-semibold text-brand-600 hover:text-brand-700 border border-brand-200 hover:border-brand-400 rounded-lg px-3 py-1.5 transition-colors"
          >
            {copyState === 'copied' ? 'Copié ✓' : copyState === 'error' ? 'Échec de la copie' : 'Copier en Markdown'}
          </button>
        </div>

        <div className="space-y-3">
          {tools.map((tool) => {
            const entry = entries[tool.id]
            return (
              <div
                key={tool.id}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 md:items-center border-t border-slate-100 pt-3 first:border-t-0 first:pt-0"
              >
                <div>
                  <div className="font-semibold text-ink-900 text-sm mb-1.5">{tool.name}</div>
                  <input
                    type="text"
                    placeholder="Note rapide (optionnel)…"
                    value={entry.note}
                    onChange={(e) => updateEntry(tool.id, { note: e.target.value })}
                    className="w-full text-sm rounded-lg border border-slate-200 px-3 py-1.5 focus:outline-none focus:border-brand-400"
                  />
                </div>
                <div className="flex gap-1.5">
                  {(Object.keys(STATUS_LABEL) as Status[]).map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => updateEntry(tool.id, { status })}
                      className={`text-xs font-semibold rounded-lg border px-2.5 py-1.5 transition-colors ${
                        entry.status === status ? STATUS_STYLE[status] : 'border-slate-200 text-ink-400 hover:border-slate-300'
                      }`}
                    >
                      {STATUS_LABEL[status]}
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
