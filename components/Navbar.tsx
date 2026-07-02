import Link from 'next/link'

const FORUM_URL = 'https://forum.cryptovelt.cloud'
const LEARN_URL = 'https://learn.cryptovelt.cloud'

const activeLinks = [
  { href: FORUM_URL, label: 'פורום', external: true },
  { href: LEARN_URL, label: 'לימוד', external: true },
]

const comingSoon = ['חדשות', 'משחק', 'כלים', 'ארנק']

export default function Navbar() {
  return (
    <header dir="rtl" className="glass-light text-sm py-3 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 grid place-items-center rounded-xl bg-gradient-to-br from-btc-400 to-btc-600 text-white font-black text-lg shadow-glow-orange group-hover:scale-110 transition-transform">
              ₿
            </span>
            <span className="font-display font-black text-base text-ink-900 tracking-wide">
              קריפטו וועלט
            </span>
          </Link>

          <nav className="flex items-center gap-5">
            {activeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-600 hover:text-btc-600 font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-ink-400 text-xs">
          {comingSoon.map((label) => (
            <span key={label} className="flex items-center gap-1.5">
              <span>{label}</span>
              <span className="bg-slate-100 border border-slate-200 text-ink-500 px-1.5 py-0.5 rounded-md text-[10px]">בקרוב</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
