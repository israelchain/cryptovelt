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
    <footer dir="rtl" className="relative mt-0 text-slate-400">
      {/* Gradient hairline separator */}
      <div
        className="h-px w-full bg-gradient-to-l from-transparent via-gold-500/40 to-transparent"
        aria-hidden
      />
      <div className="bg-ink-950/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Brand + links row */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 grid place-items-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-ink-900 font-black text-xl">
                ₿
              </span>
              <span className="font-display font-black text-lg text-white">קריפטו וועלט</span>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-5 text-sm">
              {links.map((l) => (
                l.soon ? (
                  <span key={l.label} className="text-slate-600 flex items-center gap-1">
                    {l.label}
                    <span className="text-[9px] border border-white/10 rounded px-1 py-px">בקרוב</span>
                  </span>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-300 transition-colors"
                  >
                    {l.label}
                  </a>
                )
              ))}
            </nav>

            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:text-gold-300 transition-colors">וואטסאפ</a>
              <span className="text-slate-700">|</span>
              <a href="#" className="hover:text-gold-300 transition-colors">טלגרם</a>
              <span className="text-slate-700">|</span>
              <a href="mailto:info@cryptovelt.cloud" className="hover:text-gold-300 transition-colors">אימייל</a>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <p>© 2026 קריפטו וועלט — כל הזכויות שמורות</p>
            <p className="text-center">נבנה בהתאם להלכה ובאישור רבנים</p>
            <p className="text-center">מידע חינוכי בלבד — אינו ייעוץ פיננסי</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
