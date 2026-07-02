import CryptoPriceWidget from '@/components/CryptoPriceWidget'
import Reveal from '@/components/Reveal'

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
  { value: '+1,500', label: 'חברים בקהילה' },
  { value: '+500', label: 'מאמרים ומדריכים' },
  { value: '4', label: 'מסלולי לימוד' },
]

export default function HomePage() {
  return (
    <div dir="rtl">
      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        {/* Drifting pastel auras */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-12 right-[12%] w-72 h-72 rounded-full bg-btc-300/25 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 left-[8%] w-64 h-64 rounded-full bg-brand-300/25 blur-3xl animate-float-slow [animation-delay:-6s]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full bg-violet-300/15 blur-3xl" />
          {/* Floating coin glyphs */}
          <span className="absolute top-24 right-[22%] text-btc-400/40 text-5xl animate-float select-none">₿</span>
          <span className="absolute top-48 left-[18%] text-brand-400/35 text-4xl animate-float [animation-delay:-2.5s] select-none">Ξ</span>
          <span className="absolute bottom-24 right-[15%] text-violet-400/35 text-3xl animate-float [animation-delay:-4.5s] select-none">◎</span>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* 3D spinning coin */}
          <div className="animate-fade-up coin-stage relative inline-block w-28 h-28 mb-8">
            <div className="coin-3d text-5xl">
              <div className="coin-face">₿</div>
              <div className="coin-face coin-face--back">₿</div>
            </div>
            <div className="coin-shadow" aria-hidden />
          </div>

          <h1 className="animate-fade-up [animation-delay:120ms] font-display text-5xl md:text-7xl font-black mb-6 leading-[1.15] text-ink-900">
            מתחילים להבין את
            <br />
            <span className="text-gradient-orange animate-shimmer">עולם הקריפטו</span>
          </h1>

          <p className="animate-fade-up [animation-delay:240ms] text-2xl md:text-3xl text-ink-700 mb-4 font-light">
            בעברית, פשוט, מהבסיס
          </p>
          <p className="animate-fade-up [animation-delay:320ms] text-ink-500 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            הפלטפורמה החרדית הראשונה ללימוד קריפטו
            <br />
            <span className="text-ink-400 text-base">— תוכן, קהילה וכלים במקום אחד —</span>
          </p>

          <div className="animate-fade-up [animation-delay:420ms] flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LEARN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-l from-btc-600 to-btc-500 hover:from-btc-500 hover:to-btc-400 text-white font-bold py-4 px-9 rounded-2xl text-lg transition-all shadow-glow-orange hover:shadow-glow-orange-lg hover:-translate-y-0.5"
            >
              <span>📚</span>
              <span>להתחיל ללמוד</span>
            </a>
            <a
              href={FORUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 card card-hover text-ink-800 font-semibold py-4 px-9 rounded-2xl text-lg"
            >
              <span>💬</span>
              <span>הצטרפו לפורום</span>
            </a>
          </div>
        </div>

        {/* Live prices */}
        <div className="mt-20 max-w-3xl mx-auto relative animate-fade-up [animation-delay:540ms]">
          <CryptoPriceWidget />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 px-4">
        <Reveal className="max-w-4xl mx-auto">
          <div className="card rounded-3xl px-6 py-10 grid grid-cols-3 divide-x divide-x-reverse divide-slate-200">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="font-display text-4xl md:text-5xl font-black text-gradient-orange mb-2 tabular-nums" dir="ltr">
                  {s.value}
                </div>
                <div className="text-ink-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="kicker justify-center mb-4">הפלטפורמה</span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-ink-900 mb-3">
              כל העולם שלנו במקום אחד
            </h2>
            <p className="text-ink-500 text-lg">בחרו את המקום הנכון עבורכם</p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Learn — featured, spans 2 cols */}
            {services.filter(s => s.featured).map((s) => (
              <Reveal key={s.label} className="col-span-2">
                <a
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col h-full border-gradient-light rounded-3xl p-7 tilt-3d"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl w-16 h-16 grid place-items-center rounded-2xl bg-gradient-to-br from-btc-100 to-violet-100 border border-btc-200">
                      {s.icon}
                    </span>
                    <div>
                      <div className="font-display font-black text-2xl text-ink-900">{s.label}</div>
                      <div className="text-xs text-btc-600 font-bold mt-0.5">עדיפות ראשונה ✨</div>
                    </div>
                  </div>
                  <p className="text-ink-600 leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-5 text-btc-600 text-sm font-bold flex items-center gap-1.5 transition-all group-hover:gap-3">
                    <span>כנסו ללימוד</span>
                    <span aria-hidden>←</span>
                  </div>
                </a>
              </Reveal>
            ))}

            {/* Other active services */}
            {services.filter(s => !s.featured && s.active).map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                {s.href === '/' ? (
                  <div className="flex flex-col h-full card rounded-3xl p-5 ring-1 ring-btc-400/60">
                    <span className="text-3xl mb-3">{s.icon}</span>
                    <div className="font-bold text-ink-900 mb-1">{s.label}</div>
                    <p className="text-ink-500 text-xs leading-relaxed flex-1">{s.desc}</p>
                    <div className="mt-3 text-xs text-btc-600 font-bold">אתם כאן ✓</div>
                  </div>
                ) : (
                  <a
                    href={s.href}
                    target={s.external ? '_blank' : undefined}
                    rel={s.external ? 'noopener noreferrer' : undefined}
                    className="group flex flex-col h-full card rounded-3xl p-5 tilt-3d"
                  >
                    <span className="text-3xl mb-3">{s.icon}</span>
                    <div className="font-bold text-ink-900 mb-1 group-hover:text-brand-600 transition-colors">{s.label}</div>
                    <p className="text-ink-500 text-xs leading-relaxed flex-1">{s.desc}</p>
                    <div className="mt-3 text-brand-600 text-xs font-bold flex items-center gap-1 transition-all group-hover:gap-2.5">
                      <span>כנסו</span>
                      <span aria-hidden>←</span>
                    </div>
                  </a>
                )}
              </Reveal>
            ))}

            {/* Coming soon services */}
            {services.filter(s => !s.active).map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="flex flex-col h-full rounded-3xl p-5 border border-dashed border-slate-300 bg-slate-50/60">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl grayscale opacity-60">{s.icon}</span>
                    <span className="text-[10px] bg-white border border-slate-200 text-ink-400 px-2.5 py-1 rounded-full font-bold">בקרוב</span>
                  </div>
                  <div className="font-bold text-ink-500 mb-1">{s.label}</div>
                  <p className="text-ink-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / MISSION ── */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-80 h-80 rounded-full bg-brand-200/30 blur-3xl" />
        </div>
        <Reveal className="max-w-3xl mx-auto text-center relative">
          <span className="kicker justify-center mb-4">מי אנחנו</span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-ink-900 mb-8">
            על קריפטו וועלט
          </h2>
          <p className="text-ink-700 text-xl leading-relaxed mb-6">
            קריפטו וועלט היא הפלטפורמה הדיגיטלית הראשונה בישראל שמרכזת את עולם הקריפטו עבור הציבור החרדי
            <br />
            <span className="text-gradient-sky font-bold">— בשפה שלך, בערכים שלך, בדרך שלך.</span>
          </p>
          <p className="text-ink-500 text-lg leading-relaxed">
            הקמנו קהילה של +1,500 חברים, פורום פעיל, ומסלולי לימוד שמתחילים מהבסיס ועד מתקדם.
            <br />
            הכל בליווי הלכתי, בלי סיכון מיותר, ובלי ג׳רגון מסובך.
          </p>
        </Reveal>
      </section>

      {/* ── WHATSAPP COMMUNITY ── */}
      <section className="py-20 px-4">
        <Reveal className="max-w-2xl mx-auto">
          <div className="card rounded-3xl px-8 py-14 text-center relative overflow-hidden">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-mint-400/20 blur-3xl pointer-events-none" aria-hidden />
            <div className="text-6xl mb-6 animate-float inline-block">📱</div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-ink-900 mb-4">
              רוצים להצטרף לקהילה?
            </h2>
            <p className="text-ink-700 mb-2 text-xl">+1,500 חברים כבר כאן.</p>
            <p className="text-ink-500 mb-10">שואלים, לומדים, משקיעים — ביחד.</p>
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-3 bg-gradient-to-l from-mint-600 to-mint-500 hover:from-mint-500 hover:to-mint-400 text-white font-bold py-4 px-9 rounded-2xl text-lg transition-all shadow-glow-green hover:-translate-y-0.5"
            >
              <span>📱</span>
              <span>הצטרפו לוואטסאפ</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── LEGAL DISCLAIMER ── */}
      <section className="py-10 px-4 border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-ink-400 text-sm leading-relaxed">
            <strong className="text-btc-600/90">הצהרה:</strong> האתר מספק מידע חינוכי בלבד ואינו מהווה ייעוץ פיננסי,
            המלצה להשקעה או הצעה לרכישת נכסים פיננסיים. השקעה בקריפטו כרוכה בסיכונים גבוהים.
            תמיד התייעץ עם מומחה מוסמך לפני קבלת החלטות פיננסיות.
          </p>
        </div>
      </section>
    </div>
  )
}
