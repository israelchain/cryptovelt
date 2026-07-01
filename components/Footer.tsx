const FORUM_URL = 'https://forum.cryptovelt.cloud'
const LEARN_URL = 'https://learn.cryptovelt.cloud'

const links = [
  { label: 'פורום', href: FORUM_URL },
  { label: 'לימוד', href: LEARN_URL },
  { label: 'חדשות', href: '#', soon: true },
  { label: 'משחק', href: '#', soon: true },
  { label: 'כלים', href: '#', soon: true },
  { label: 'ארנק', href: '#', soon: true },
]

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-gray-950 text-gray-400 mt-0">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Brand + links row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-8">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <span className="text-gold-400 text-xl">₿</span>
            <span>קריפטו וועלט</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {links.map((l) => (
              l.soon ? (
                <span key={l.label} className="text-gray-600">{l.label}</span>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              )
            ))}
          </nav>

          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">וואטסאפ</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors">טלגרם</a>
            <span className="text-gray-700">|</span>
            <a href="mailto:info@cryptovelt.cloud" className="hover:text-white transition-colors">אימייל</a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© 2026 קריפטו וועלט — כל הזכויות שמורות</p>
          <p className="text-center">נבנה בהתאם להלכה ובאישור רבנים</p>
          <p className="text-center">מידע חינוכי בלבד — אינו ייעוץ פיננסי</p>
        </div>
      </div>
    </footer>
  )
}
