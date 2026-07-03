import Link from 'next/link'

const FORUM_URL = 'https://forum.cryptovelt.cloud'
const LEARN_URL = 'https://learn.cryptovelt.cloud'

const navItems = [
  { label: 'בית', href: '/' },
  { label: 'למידה', href: LEARN_URL, external: true },
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
          <span className="w-8 h-8 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-black text-lg shadow-glow-indigo group-hover:scale-110 transition-transform">
            ₿
          </span>
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
