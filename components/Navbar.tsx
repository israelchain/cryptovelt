import Link from 'next/link'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''
const FORUM_URL = 'https://forum.cryptovelt.cloud'
const LEARN_URL = 'https://learn.cryptovelt.cloud'

const navItems = [
  { label: 'בית', href: '/' },
  { label: 'למידה', href: LEARN_URL, external: true, emphasize: true },
  { label: 'פורום', href: FORUM_URL, external: true },
  { label: 'מסחר', href: '#', soon: true },
  { label: 'חדשות', href: '#', soon: true },
  { label: 'כלים', href: '#', soon: true },
  { label: 'ארנק', href: '#', soon: true },
  { label: 'משחק', href: '#', soon: true },
]

export default function Navbar() {
  return (
    <header dir="rtl" className="glass-light text-sm py-3 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img
            src={`${BASE_PATH}/brand/logo-symbol.svg`}
            alt="קריפטו וועלט"
            className="w-9 h-9 group-hover:scale-110 transition-transform"
          />
          <span className="font-display font-black text-base text-ink-900 tracking-wide hidden sm:inline">
            קריפטו וועלט
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) =>
            item.soon ? (
              <span key={item.label} className="flex items-center gap-1.5 text-ink-400 text-xs">
                <span>{item.label}</span>
                <span className="bg-slate-100 border border-slate-200 text-ink-500 px-1.5 py-0.5 rounded-md text-[10px]">בקרוב</span>
              </span>
            ) : item.emphasize ? (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-3 py-1.5 rounded-lg font-bold transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="text-ink-600 hover:text-indigo-600 font-semibold transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <a
          href={LEARN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-gradient-to-l from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-2 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-glow-indigo shrink-0"
        >
          <span aria-hidden>↖</span>
          <span>התחל ללמוד בחינם</span>
        </a>
      </div>
    </header>
  )
}
