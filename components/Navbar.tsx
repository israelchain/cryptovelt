import Link from 'next/link'
import { FORUM_URL, LEARN_URL } from '@/lib/site-config'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Order matches the Figma nav pill, left→right visually (i.e. first item
// closest to the CTA pill): ארנק, משחק, כלים, חדשות, מסחר, פורום, לימוד, בית.
// Routes that don't have a live destination yet keep `soon`.
const navItems = [
  { label: 'ארנק', icon: '💼', href: '/wallet' },
  { label: 'משחק', icon: '🕹️', href: '#', soon: true },
  { label: 'כלים', icon: '🔧', href: '#', soon: true },
  { label: 'חדשות', icon: '🌐', href: '#', soon: true },
  { label: 'מסחר', icon: '📈', href: '#', soon: true },
  { label: 'פורום', icon: '💬', href: FORUM_URL, external: true },
  { label: 'לימוד', icon: '📖', href: LEARN_URL, external: true },
  { label: 'בית', icon: '🏠', href: '/' },
]

export default function Navbar() {
  return (
    <header dir="rtl" className="glass-light text-sm py-3 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Violet CTA pill — far right visually in RTL row order, first in DOM */}
        <a
          href={LEARN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn pill-btn--violet py-2.5 px-5 text-sm shrink-0"
        >
          <span aria-hidden>↖</span>
          <span className="hidden sm:inline">התחל ללמוד בחינם</span>
        </a>

        {/* Horizontal nav pill with icons */}
        <nav className="nav-pill hidden md:flex flex-1 justify-center max-w-2xl mx-auto">
          {navItems.map((item) =>
            item.soon ? (
              <span
                key={item.label}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold text-ink-400"
                title="בקרוב"
              >
                <span>{item.label}</span>
                <span aria-hidden>{item.icon}</span>
              </span>
            ) : (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                <span>{item.label}</span>
                <span aria-hidden>{item.icon}</span>
              </a>
            )
          )}
        </nav>

        {/* Stylized "e"-spiral logo, far left visually */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img
            src={`${BASE_PATH}/brand/logo-symbol.svg`}
            alt="קריפטו וועלט"
            className="w-9 h-9 group-hover:scale-110 transition-transform"
          />
        </Link>
      </div>
    </header>
  )
}
