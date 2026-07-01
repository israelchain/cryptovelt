import Link from 'next/link'
import CryptoPriceWidget from '@/components/CryptoPriceWidget'

const FORUM_URL = 'https://forum.cryptovelt.cloud'
const LEARN_URL = 'https://learn.cryptovelt.cloud'
const WHATSAPP_URL = '#'

const services = [
  {
    icon: '📚',
    label: 'לימוד',
    desc: 'קורסים, מאמרים, פודקאסטים ולקסיקון — בעברית מהבסיס ועד מתקדם',
    href: LEARN_URL,
    external: true,
    featured: true,
    active: true,
  },
  {
    icon: '💬',
    label: 'פורום',
    desc: 'המקום לשאול, לדבר ולהתייעץ עם הקהילה',
    href: FORUM_URL,
    external: true,
    active: true,
  },
  {
    icon: '🏠',
    label: 'עמוד הבית',
    desc: 'השער המרכזי לכל עולם הקריפטו שלנו',
    href: '/',
    active: true,
  },
  {
    icon: '📰',
    label: 'חדשות',
    desc: 'עדכונים שוטפים מהעולם — קצר וארוך',
    href: '#',
    active: false,
  },
  {
    icon: '🎮',
    label: 'משחק השקעות',
    desc: 'סימולטור מסחר וירטואלי — לומדים בלי סיכון',
    href: '#',
    active: false,
  },
  {
    icon: '🛠️',
    label: 'כלים',
    desc: 'מחשבונים, הצהרות מס, המרות',
    href: '#',
    active: false,
  },
  {
    icon: '🔐',
    label: 'ארנק ומסחר',
    desc: 'ניהול נכסים דיגיטליים בצורה בטוחה',
    href: '#',
    active: false,
  },
]

const stats = [
  { value: '1,500+', label: 'חברים בקהילה' },
  { value: '500+', label: 'מאמרים ומדריכים' },
  { value: '4', label: 'מסלולי לימוד' },
]

export default function HomePage() {
  return (
    <div dir="rtl">
      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-blue-950 via-purple-900 to-indigo-900 text-white py-24 px-4 overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-purple-400 blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-400 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Logo mark */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-gold-400 text-2xl font-bold">₿</span>
            <span className="text-white font-bold text-lg tracking-wide">קריפטו וועלט</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            מתחילים להבין את עולם הקריפטו
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-3 font-light">
            בעברית, פשוט, מהבסיס
          </p>
          <p className="text-blue-200 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            הפלטפורמה החרדית הראשונה ללימוד קריפטו
            <br />
            <span className="text-blue-300 text-base">— תוכן, קהילה וכלים במקום אחד —</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LEARN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-gold-500/30 hover:shadow-xl"
            >
              <span>📚</span>
              <span>להתחיל ללמוד</span>
            </a>
            <a
              href={FORUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold py-4 px-8 rounded-xl text-lg transition-all backdrop-blur-sm"
            >
              <span>💬</span>
              <span>הצטרפו לפורום</span>
            </a>
          </div>
        </div>

        {/* Live prices ticker */}
        <div className="mt-16 max-w-3xl mx-auto relative">
          <CryptoPriceWidget />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 divide-x divide-x-reverse divide-gray-200">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-bold text-brand-800 mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            כל העולם שלנו במקום אחד
          </h2>
          <p className="text-gray-500 text-center mb-10">
            בחרו את המקום הנכון עבורכם
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Learn — featured, spans 2 cols */}
            {services.filter(s => s.featured).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                className="col-span-2 group flex flex-col bg-gradient-to-br from-brand-800 to-purple-800 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <div className="font-bold text-xl">{s.label}</div>
                    <div className="text-xs text-blue-200 font-medium">עדיפות ראשונה ✨</div>
                  </div>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-4 text-gold-400 text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  <span>כנסו ללימוד</span>
                  <span>←</span>
                </div>
              </a>
            ))}

            {/* Other active services */}
            {services.filter(s => !s.featured && s.active).map((s) => (
              s.href === '/' ? (
                <div
                  key={s.label}
                  className="flex flex-col bg-white rounded-2xl p-5 shadow-sm border-2 border-gold-400"
                >
                  <span className="text-2xl mb-2">{s.icon}</span>
                  <div className="font-bold text-gray-900 mb-1">{s.label}</div>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-3 text-xs text-gold-600 font-semibold">אתם כאן ✓</div>
                </div>
              ) : (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-brand-200 transition-all hover:-translate-y-0.5"
                >
                  <span className="text-2xl mb-2">{s.icon}</span>
                  <div className="font-bold text-gray-900 mb-1 group-hover:text-brand-700 transition-colors">{s.label}</div>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-3 text-brand-500 text-xs font-semibold group-hover:text-brand-700 flex items-center gap-1">
                    <span>כנסו</span>
                    <span>←</span>
                  </div>
                </a>
              )
            ))}

            {/* Coming soon services */}
            {services.filter(s => !s.active).map((s) => (
              <div
                key={s.label}
                className="flex flex-col bg-gray-100 rounded-2xl p-5 border border-gray-200 opacity-70"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl grayscale">{s.icon}</span>
                  <span className="text-[10px] bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full font-medium">בקרוב</span>
                </div>
                <div className="font-bold text-gray-500 mb-1">{s.label}</div>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / MISSION ── */}
      <section className="py-16 px-4 bg-blue-50 border-t border-blue-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-6">
            על קריפטו וועלט
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            קריפטו וועלט היא הפלטפורמה הדיגיטלית הראשונה בישראל שמרכזת את עולם הקריפטו עבור הציבור החרדי
            <br />
            <span className="text-brand-700 font-semibold">— בשפה שלך, בערכים שלך, בדרך שלך.</span>
          </p>
          <p className="text-gray-600 leading-relaxed">
            הקמנו קהילה של 1,500+ חברים, פורום פעיל, ומסלולי לימוד שמתחילים מהבסיס ועד מתקדם.
            <br />
            הכל בליווי הלכתי, בלי סיכון מיותר, ובלי ג׳רגון מסובך.
          </p>
        </div>
      </section>

      {/* ── WHATSAPP COMMUNITY ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-6">📱</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            רוצים להצטרף לקהילה?
          </h2>
          <p className="text-gray-600 mb-2 text-lg">
            1,500+ חברים כבר כאן.
          </p>
          <p className="text-gray-500 mb-8">
            שואלים, לומדים, משקיעים — ביחד.
          </p>
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <span>📱</span>
            <span>הצטרפו לוואטסאפ</span>
          </a>
        </div>
      </section>

      {/* ── LEGAL DISCLAIMER ── */}
      <section className="bg-amber-50 border-t border-amber-200 py-6 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-800 text-sm">
            <strong>הצהרה:</strong> האתר מספק מידע חינוכי בלבד ואינו מהווה ייעוץ פיננסי,
            המלצה להשקעה או הצעה לרכישת נכסים פיננסיים. השקעה בקריפטו כרוכה בסיכונים גבוהים.
            תמיד התייעץ עם מומחה מוסמך לפני קבלת החלטות פיננסיות.
          </p>
        </div>
      </section>
    </div>
  )
}
