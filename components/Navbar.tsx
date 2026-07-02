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
    <header dir="rtl" className="glass-strong text-sm py-3 px-4 sticky top-0 z-50 border-x-0 border-t-0">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 grid place-items-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-ink-900 font-black text-lg shadow-glow-gold group-hover:scale-110 transition-transform">
              ₿
            </span>
            <span className="font-display font-black text-base text-white tracking-wide">
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
                className="text-slate-300 hover:text-gold-300 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-slate-500 text-xs">
          {comingSoon.map((label) => (
            <span key={label} className="flex items-center gap-1.5">
              <span>{label}</span>
              <span className="bg-white/5 border border-white/10 text-slate-500 px-1.5 py-0.5 rounded-md text-[10px]">בקרוב</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
