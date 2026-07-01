'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'בית' },
  { href: '/bitcoin', label: 'ביטקוין' },
  { href: '/blockchain', label: 'בלוקצ׳יין' },
  { href: '/wallet', label: 'ארנק דיגיטלי' },
  { href: '/investment', label: 'השקעות' },
  { href: '/buy-crypto', label: 'קנייה בטוחה' },
]

const FORUM_URL = 'https://forum.cryptovelt.cloud'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-brand-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold hover:text-gold-400 transition-colors">
            <span className="text-gold-400 text-2xl">₿</span>
            <span>קריפטוVelt</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-700 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={FORUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-bold bg-gold-500 hover:bg-gold-400 text-brand-900 transition-colors mr-2"
            >
              💬 פורום קהילה
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-brand-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="תפריט"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-brand-700 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-700 hover:text-gold-400 transition-colors mb-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={FORUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-sm font-bold text-gold-400 hover:bg-brand-700 transition-colors mb-1"
              onClick={() => setMenuOpen(false)}
            >
              💬 פורום קהילה
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
