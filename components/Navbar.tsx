import Link from 'next/link'
import { Briefcase, Puzzle, Wrench, Globe, LineChart, MessageCircle, BookOpen, Home } from 'lucide-react'
import { FORUM_URL, LEARN_URL } from '@/lib/site-config'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Order matches the Figma nav pill, left→right visually (i.e. first item
// closest to the CTA pill): ארנק, משחק, כלים, חדשות, מסחר, פורום, לימוד, בית.
// Routes that don't have a live destination yet keep `soon`.
// Icons are lucide components (not emoji): emoji glyphs render differently per
// OS/browser font (Segoe Fluent vs Apple vs Noto Color Emoji), so the pastel
// indigo look from the Figma export only ever showed up on the export machine.
const navItems = [
  { label: 'ארנק', icon: Briefcase, href: '/wallet' },
  { label: 'משחק', icon: Puzzle, href: '#', soon: true },
  { label: 'כלים', icon: Wrench, href: '#', soon: true },
  { label: 'חדשות', icon: Globe, href: '#', soon: true },
  { label: 'מסחר', icon: LineChart, href: '#', soon: true },
  { label: 'פורום', icon: MessageCircle, href: FORUM_URL, external: true },
  { label: 'לימוד', icon: BookOpen, href: LEARN_URL, external: true },
  { label: 'בית', icon: Home, href: '/' },
]

export default function Navbar() {
  return (
    <header dir="rtl" className="glass-light text-sm py-3 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Logo first in DOM so it lands on the visual right in the RTL row
            (Figma: logo far right, CTA pill far left, left→right) */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img
            src={`${BASE_PATH}/brand/logo-icon.webp`}
            alt="קריפטו וועלט"
            className="w-9 h-9 group-hover:scale-110 transition-transform"
          />
        </Link>

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
                <item.icon aria-hidden className="w-4 h-4 text-deep-500" strokeWidth={2.25} />
              </span>
            ) : (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                <span>{item.label}</span>
                <item.icon aria-hidden className="w-4 h-4 text-deep-500" strokeWidth={2.25} />
              </a>
            )
          )}
        </nav>

        {/* Violet CTA pill last in DOM so it lands on the visual left */}
        <a
          href={LEARN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn pill-btn--violet py-2.5 px-5 text-sm shrink-0"
        >
          <span aria-hidden>↖</span>
          <span className="hidden sm:inline">התחל ללמוד בחינם</span>
        </a>
      </div>
    </header>
  )
}
