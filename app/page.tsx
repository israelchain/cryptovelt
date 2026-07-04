import CryptoTicker from '@/components/CryptoTicker'
import Reveal from '@/components/Reveal'

const FORUM_URL = 'https://forum.cryptovelt.cloud'
const LEARN_URL = 'https://learn.cryptovelt.cloud'

const services = [
  {
    icon: '🎓',
    label: 'למידה והכשרה',
    desc: 'קורסים, מדריכי לימוד ולקסיקון מהצעד הראשון ועד לנושאים מתקדמים — בעברית, מהבסיס.',
    href: LEARN_URL,
    external: true,
    featured: true,
    active: true,
    cta: 'התחל ללמוד בחינם',
  },
  {
    icon: '💬',
    label: 'פורום',
    desc: 'המקום לשאול, לדבר ולהתייעץ עם הקהילה — כל שאלה מקבלת מענה.',
    href: FORUM_URL,
    external: true,
    active: true,
    cta: 'כנסו לפורום',
  },
  {
    icon: '📈',
    label: 'מסחר',
    desc: 'למד איך לקרוא גרפים ומגמות ולהבין את עולם המסחר בצורה ברורה ופשוטה.',
    href: '#',
    active: false,
  },
  {
    icon: '📰',
    label: 'חדשות',
    desc: 'כל העדכונים, האירועים וההתפתחויות החשובות בעולם הקריפטו במקום אחד.',
    href: '#',
    active: false,
  },
  {
    icon: '🛠️',
    label: 'כלים',
    desc: 'מחשבונים, הצהרות מס והמרות שיעזרו לך להבין את עולם הקריפטו בצורה ברורה ופשוטה.',
    href: '#',
    active: false,
  },
  {
    icon: '🔐',
    label: 'ארנק',
    desc: 'ניהול נכסים דיגיטליים בצורה בטוחה — מדריכים לפני שמתחילים.',
    href: '#',
    active: false,
  },
  {
    icon: '🎮',
    label: 'משחק',
    desc: 'סימולטור מסחר וירטואלי — לומדים בלי סיכון וללא כסף אמיתי.',
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
      <section className="relative pt-16 pb-24 px-4 overflow-hidden hero-gradient">
        {/* Faint grid + drifting auras */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-0 w-[28rem] h-[28rem] rounded-full bg-indigo-300/20 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-amber-200/30 blur-3xl animate-float-slow [animation-delay:-6s]" />
        </div>

        <div className="max-w-6xl mx-auto relative grid md:grid-cols-2 gap-14 items-center">
          {/* Copy + CTAs (renders on the right in RTL) */}
          <div className="text-center md:text-right relative z-10">
            <h1 className="animate-fade-up font-display text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.2] text-ink-900">
              כל מה שצריך לדעת על קריפטו,
              <br />
              במקום אחד<span className="text-indigo-600">.</span>
            </h1>

            <p className="animate-fade-up [animation-delay:160ms] text-ink-500 mb-10 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed">
              כאן תמצא מדריכים מקיפים, חדשות ועדכונים, כלים שימושיים ותוכן מקצועי, בשפה פשוטה
              וברורה, כדי לעזור לך להבין את עולם הקריפטו, ללמוד בקצב שלך ולהתקדם בביטחון.
            </p>

            <div className="animate-fade-up [animation-delay:280ms] flex flex-col sm:flex-row items-center md:items-stretch justify-center md:justify-start gap-4">
              <a
                href="#platform"
                className="inline-flex items-center gap-2 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-ink-900 font-bold py-3.5 px-7 rounded-xl transition-all"
              >
                <span aria-hidden>↖</span>
                <span>גלה את הפלטפורמה</span>
              </a>
              <a
                href={LEARN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-l from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-3.5 px-7 rounded-xl transition-all shadow-glow-indigo hover:shadow-glow-indigo-lg hover:-translate-y-0.5"
              >
                <span aria-hidden>↖</span>
                <span>התחל ללמוד בחינם</span>
              </a>
            </div>

            {/* Mobile ticker (the side banner sits absolutely on desktop instead) */}
            <div className="animate-fade-up [animation-delay:400ms] mt-8 flex justify-center md:hidden">
              <CryptoTicker />
            </div>
          </div>

          {/* Learning preview card + floating coins (renders on the left in RTL) */}
          <div className="relative h-[22rem] sm:h-[26rem] hidden sm:block">
            <div className="dash-mock-glow" aria-hidden />

            {/* Glossary/lesson preview card — real educational content, not a fake dashboard */}
            <div className="card tilt-3d rounded-3xl p-6 w-64 sm:w-72 mx-auto mt-10 relative z-10 animate-fade-up [animation-delay:200ms]">
              <span className="inline-block text-[11px] font-bold text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 mb-4">
                מונח השבוע
              </span>
              <h3 className="font-display text-xl font-black text-ink-900 mb-2">מהו בלוקצ&apos;יין?</h3>
              <p className="text-ink-500 text-sm leading-relaxed mb-5">
                מאגר מידע מבוזר ושקוף, שמאפשר לרשום עסקאות בביטחון וללא צורך בגורם מתווך מרכזי.
              </p>
              <a
                href={LEARN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700"
              >
                <span>קרא את ההסבר המלא</span>
                <span aria-hidden>←</span>
              </a>
            </div>

            {/* Floating 3D coins */}
            <div className="coin-stage absolute -top-2 right-[8%] w-16 h-16 animate-float" aria-hidden>
              <div className="coin-3d coin-3d--indigo text-2xl">
                <div className="coin-face coin-face--indigo">₿</div>
                <div className="coin-face coin-face--indigo coin-face--back">₿</div>
              </div>
            </div>
            <div className="coin-stage absolute top-[38%] right-0 w-10 h-10 animate-float [animation-delay:-2.5s]" aria-hidden>
              <div className="coin-3d coin-3d--indigo text-base">
                <div className="coin-face coin-face--indigo">Ξ</div>
                <div className="coin-face coin-face--indigo coin-face--back">Ξ</div>
              </div>
            </div>
            <div className="coin-stage absolute bottom-4 right-[18%] w-20 h-20 animate-float [animation-delay:-4.5s]" aria-hidden>
              <div className="coin-3d coin-3d--indigo text-3xl">
                <div className="coin-face coin-face--indigo">◎</div>
                <div className="coin-face coin-face--indigo coin-face--back">◎</div>
              </div>
            </div>

            {/* Small ticker banner, floating on the side of the hero */}
            <div className="absolute -bottom-8 -start-8 z-20 hidden lg:block animate-fade-up [animation-delay:520ms]">
              <CryptoTicker />
            </div>
          </div>
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

      {/* ── SERVICES GRID (bento) ── */}
      <section id="platform" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-black text-ink-900 mb-3">
              כל מה שמחכה לך <span className="text-indigo-600">בפלטפורמה</span>
            </h2>
            <p className="text-ink-500 text-lg max-w-2xl mx-auto">
              למד, התעדכן וחקור והשתמש בכלים שיעזרו לך להבין את עולם הקריפטו — הכל מחולק
              לנושאים ברורים, כדי שתוכל למצוא בקלות את מה שמעניין אותך.
            </p>
          </Reveal>

          {/* Learn — the flagship feature, full-width banner above the rest */}
          {services.filter(s => s.featured).map((s) => (
            <Reveal key={s.label} className="mb-4">
              <a
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                className="group relative flex flex-col md:flex-row items-center text-center md:text-right gap-6 rounded-3xl p-8 md:p-10 tilt-3d border-gradient-light bg-gradient-to-l from-indigo-50 via-white to-amber-50 overflow-hidden"
              >
                <span className="absolute top-5 start-5 text-[11px] font-bold bg-indigo-600 text-white px-3 py-1 rounded-full shadow-glow-indigo">
                  ⭐ הכי פופולרי
                </span>
                <span className="text-6xl w-24 h-24 shrink-0 grid place-items-center rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 border border-indigo-200">
                  {s.icon}
                </span>
                <div className="flex-1">
                  <div className="font-display font-black text-3xl text-ink-900 mb-2">{s.label}</div>
                  <p className="text-ink-600 leading-relaxed mb-4 max-w-xl">{s.desc}</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <div className="text-indigo-600 text-base font-bold flex items-center gap-1.5 transition-all group-hover:gap-3">
                      <span>{s.cta}</span>
                      <span aria-hidden>←</span>
                    </div>
                    <span className="text-xs text-ink-400">+500 מאמרים · 4 מסלולי לימוד</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Other active services — colored card */}
            {services.filter(s => !s.featured && s.active).map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="col-span-2 md:col-span-2">
                <a
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col h-full card rounded-3xl p-5 tilt-3d bg-gradient-to-br from-indigo-50 to-violet-100 border-indigo-200"
                >
                  <span className="text-3xl mb-3">{s.icon}</span>
                  <div className="font-bold text-ink-900 mb-1">{s.label}</div>
                  <p className="text-ink-500 text-xs leading-relaxed flex-1 mb-3">{s.desc}</p>
                  <div className="text-indigo-600 text-xs font-bold flex items-center gap-1 transition-all group-hover:gap-2.5">
                    <span>{s.cta}</span>
                    <span aria-hidden>←</span>
                  </div>
                </a>
              </Reveal>
            ))}

            {/* Coming soon services — dotted placeholder */}
            {services.filter(s => !s.active).map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="relative flex flex-col h-full rounded-3xl p-5 border border-slate-200 placeholder-dots overflow-hidden">
                  <span className="absolute top-4 left-4 text-[10px] bg-white border border-slate-200 text-ink-400 px-2.5 py-1 rounded-full font-bold">בקרוב</span>
                  <div className="mt-auto text-center">
                    <span className="text-3xl grayscale opacity-60 block mb-2">{s.icon}</span>
                    <div className="font-bold text-ink-600">{s.label}</div>
                  </div>
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

      {/* ── COMMUNITY ── */}
      {/* WhatsApp/Telegram invite links aren't available yet — routes to the live forum instead of a dead "#" link. */}
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
              href={FORUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-l from-mint-600 to-mint-500 hover:from-mint-500 hover:to-mint-400 text-white font-bold py-4 px-9 rounded-2xl text-lg transition-all shadow-glow-green hover:-translate-y-0.5"
            >
              <span>💬</span>
              <span>הצטרפו לפורום</span>
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
