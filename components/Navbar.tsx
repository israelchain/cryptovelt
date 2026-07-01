import Link from 'next/link'

const FORUM_URL = 'https://forum.cryptovelt.cloud'
const LEARN_URL = 'https://learn.cryptovelt.cloud'

const activeLinks = [
  { href: '/', label: 'קריפטו וועלט', isHome: true },
  { href: FORUM_URL, label: 'פורום', external: true },
  { href: LEARN_URL, label: 'לימוד', external: true },
]

const comingSoon = ['חדשות', 'משחק', 'כלים', 'ארנק']

export default function Navbar() {
  return (
    <header dir="rtl" className="bg-gray-950 text-sm py-2 px-4 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          {activeLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white font-medium transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`font-bold transition-colors ${link.isHome ? 'text-gold-400' : 'text-gray-300 hover:text-white'}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
        <div className="hidden sm:flex items-center gap-4 text-gray-600 text-xs">
          {comingSoon.map((label) => (
            <span key={label} className="flex items-center gap-1">
              <span>{label}</span>
              <span className="bg-gray-800 text-gray-500 px-1 py-0.5 rounded text-[10px]">בקרוב</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
