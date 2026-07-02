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
      <section className="relative text-white pt-24 pb-20 px-4 overflow-hidden">
        {/* Drifting glow orbs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-12 right-[12%] w-72 h-72 rounded-full bg-violet-500/20 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 left-[8%] w-64 h-64 rounded-full bg-brand-500/20 blur-3xl animate-float-slow [animation-delay:-6s]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full bg-gold-500/[0.07] blur-3xl" />
          {/* Floating coin glyphs */}
          <span className="absolute top-24 right-[22%] text-gold-400/25 text-5xl animate-float select-none">₿</span>
          <span className="absolute top-48 left-[18%] text-brand-300/20 text-4xl animate-float [animation-delay:-2.5s] select-none">Ξ</span>
          <span className="absolute bottom-24 right-[15%] text-violet-300/20 text-3xl animate-float [animation-delay:-4.5s] select-none">◎</span>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Logo badge */}
          <div className="animate-fade-up inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full glass-strong animate-pulse-glow">
            <span className="text-gold-400 text-2xl font-bold">₿</span>
            <span className="text-white font-bold text-lg tracking-wide">קריפטו וועלט</span>
          </div>

          <h1 className="animate-fade-up [animation-delay:120ms] font-display text-5xl md:text-7xl font-black mb-6 leading-[1.15] text-white">
            מתחילים להבין את
            <br />
            <span className="text-gradient-gold animate-shimmer">עולם הקריפטו</span>
          </h1>

          <p className="animate-fade-up [animation-delay:240ms] text-2xl md:text-3xl text-slate-200 mb-4 font-light">
            בעברית, פשוט, מהבסיס
          </p>
          <p className="animate-fade-up [animation-delay:320ms] text-slate-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            הפלטפורמה החרדית הראשונה ללימוד קריפטו
            <br />
            <span className="text-slate-500 text-base">— תוכן, קהילה וכלים במקום אחד —</span>
          </p>

          <div className="animate-fade-up [animation-delay:420ms] flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LEARN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-l from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-ink-900 font-bold py-4 px-9 rounded-2xl text-lg transition-all shadow-glow-gold hover:shadow-glow-gold-lg hover:-translate-y-0.5"
            >
              <span>📚</span>
              <span>להתחיל ללמוד</span>
            </a>
            <a
              href={FORUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white font-semibold py-4 px-9 rounded-2xl text-lg transition-all hover:-translate-y-0.5"
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
          <div className="glass rounded-3xl px-6 py-10 grid grid-cols-3 divide-x divide-x-reverse divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="font-display text-4xl md:text-5xl font-black text-gradient-gold mb-2 tabular-nums" dir="ltr">
                  {s.value}
                </div>
                <div className="text-slate-400 text-sm">{s.label}</div>
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
            <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-3">
              כל העולם שלנו במקום אחד
            </h2>
            <p className="text-slate-400 text-lg">בחרו את המקום הנכון עבורכם</p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Learn — featured, spans 2 cols */}
            {services.filter(s => s.featured).map((s) => (
              <Reveal key={s.label} className="col-span-2">
                <a
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col h-full border-gradient rounded-3xl p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow-gold"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl w-16 h-16 grid place-items-center rounded-2xl bg-gradient-to-br from-gold-500/20 to-violet-500/20 border border-gold-400/30">
                      {s.icon}
                    </span>
                    <div>
                      <div className="font-display font-black text-2xl text-white">{s.label}</div>
                      <div className="text-xs text-gold-400 font-bold mt-0.5">עדיפות ראשונה ✨</div>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-5 text-gold-400 text-sm font-bold flex items-center gap-1.5 transition-all group-hover:gap-3">
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
                  <div className="flex flex-col h-full glass rounded-3xl p-5 ring-1 ring-gold-400/50">
                    <span className="text-3xl mb-3">{s.icon}</span>
                    <div className="font-bold text-white mb-1">{s.label}</div>
                    <p className="text-slate-400 text-xs leading-relaxed flex-1">{s.desc}</p>
                    <div className="mt-3 text-xs text-gold-400 font-bold">אתם כאן ✓</div>
                  </div>
                ) : (
                  <a
                    href={s.href}
                    target={s.external ? '_blank' : undefined}
                    rel={s.external ? 'noopener noreferrer' : undefined}
                    className="group flex flex-col h-full glass rounded-3xl p-5 transition-all hover:-translate-y-1 hover:shadow-glow-cyan hover:border-brand-400/40"
                  >
                    <span className="text-3xl mb-3">{s.icon}</span>
                    <div className="font-bold text-white mb-1 group-hover:text-brand-300 transition-colors">{s.label}</div>
                    <p className="text-slate-400 text-xs leading-relaxed flex-1">{s.desc}</p>
                    <div className="mt-3 text-brand-400 text-xs font-bold flex items-center gap-1 transition-all group-hover:gap-2.5">
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
                <div className="flex flex-col h-full rounded-3xl p-5 border border-dashed border-white/10 bg-white/[0.02]">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl grayscale opacity-60">{s.icon}</span>
                    <span className="text-[10px] glass text-slate-400 px-2.5 py-1 rounded-full font-bold">בקרוב</span>
                  </div>
                  <div className="font-bold text-slate-400 mb-1">{s.label}</div>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / MISSION ── */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl" />
        </div>
        <Reveal className="max-w-3xl mx-auto text-center relative">
          <span className="kicker justify-center mb-4">מי אנחנו</span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-8">
            על קריפטו וועלט
          </h2>
          <p className="text-slate-300 text-xl leading-relaxed mb-6">
            קריפטו וועלט היא הפלטפורמה הדיגיטלית הראשונה בישראל שמרכזת את עולם הקריפטו עבור הציבור החרדי
            <br />
            <span className="text-gradient-sky font-bold">— בשפה שלך, בערכים שלך, בדרך שלך.</span>
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            הקמנו קהילה של +1,500 חברים, פורום פעיל, ומסלולי לימוד שמתחילים מהבסיס ועד מתקדם.
            <br />
            הכל בליווי הלכתי, בלי סיכון מיותר, ובלי ג׳רגון מסובך.
          </p>
        </Reveal>
      </section>

      {/* ── WHATSAPP COMMUNITY ── */}
      <section className="py-20 px-4">
        <Reveal className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl px-8 py-14 text-center relative overflow-hidden">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-green-500/15 blur-3xl pointer-events-none" aria-hidden />
            <div className="text-6xl mb-6 animate-float inline-block">📱</div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
              רוצים להצטרף לקהילה?
            </h2>
            <p className="text-slate-300 mb-2 text-xl">+1,500 חברים כבר כאן.</p>
            <p className="text-slate-400 mb-10">שואלים, לומדים, משקיעים — ביחד.</p>
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-3 bg-gradient-to-l from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 px-9 rounded-2xl text-lg transition-all shadow-glow-green hover:-translate-y-0.5"
            >
              <span>📱</span>
              <span>הצטרפו לוואטסאפ</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── LEGAL DISCLAIMER ── */}
      <section className="py-10 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-500 text-sm leading-relaxed">
            <strong className="text-gold-500/80">הצהרה:</strong> האתר מספק מידע חינוכי בלבד ואינו מהווה ייעוץ פיננסי,
            המלצה להשקעה או הצעה לרכישת נכסים פיננסיים. השקעה בקריפטו כרוכה בסיכונים גבוהים.
            תמיד התייעץ עם מומחה מוסמך לפני קבלת החלטות פיננסיות.
          </p>
        </div>
      </section>
    </div>
  )
}
