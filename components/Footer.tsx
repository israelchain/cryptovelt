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
    <footer dir="rtl" className="relative mt-0 text-ink-500">
      {/* Gradient hairline separator */}
      <div
        className="h-px w-full bg-gradient-to-l from-transparent via-indigo-400/60 to-transparent"
        aria-hidden
      />
      <div className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Brand + links row */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-black text-xl">
                ₿
              </span>
              <span className="font-display font-black text-lg text-ink-900">קריפטו וועלט</span>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-5 text-sm">
              {links.map((l) => (
                l.soon ? (
                  <span key={l.label} className="text-ink-400 flex items-center gap-1">
                    {l.label}
                    <span className="text-[9px] border border-slate-200 rounded px-1 py-px">בקרוב</span>
                  </span>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {l.label}
                  </a>
                )
              ))}
            </nav>

            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:text-indigo-600 transition-colors">וואטסאפ</a>
              <span className="text-slate-300">|</span>
              <a href="#" className="hover:text-indigo-600 transition-colors">טלגרם</a>
              <span className="text-slate-300">|</span>
              <a href="mailto:info@cryptovelt.cloud" className="hover:text-indigo-600 transition-colors">אימייל</a>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-400">
            <p>© 2026 קריפטו וועלט — כל הזכויות שמורות</p>
            <p className="text-center">נבנה בהתאם להלכה ובאישור רבנים</p>
            <p className="text-center">מידע חינוכי בלבד — אינו ייעוץ פיננסי</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
