import CryptoTicker from '@/components/CryptoTicker'
import Reveal from '@/components/Reveal'
import { FORUM_URL, LEARN_URL, CONTACT_EMAIL } from '@/lib/site-config'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

const stats = [
  { value: '4', label: 'מסלולי לימוד' },
  { value: '+500', label: 'מאמרים ומדריכים' },
  { value: '+1,500', label: 'חברים בקהילה' },
]

// Bento grid — sizes/colors/copy match the Figma feature-grid screenshots
// (shots 2-3). `span` controls the grid footprint on md+ screens.
const bentoCards = [
  {
    key: 'mishar',
    label: 'מסחר',
    desc: 'סביבת מסחר וירטואלית שמאפשרת לתרגל אסטרטגיות, להכיר את השוק ולצבור ניסיון מעשי בלי לסכן כסף אמיתי.',
    cta: 'התחל ללמוד בחינם',
    href: LEARN_URL,
    external: true,
    span: 'md:col-span-2 md:row-span-1',
    className: 'bg-deep-gradient text-white',
    icon: 'icon-mishar.webp',
  },
  {
    key: 'limud',
    label: 'למידה והכשרה',
    desc: 'קורסים, מדריכים ומסלולי לימוד מסודרים מהצעד הראשון ועד לנושאים מתקדמים.',
    cta: 'התחל ללמוד בחינם',
    href: LEARN_URL,
    external: true,
    span: 'md:col-span-2 md:row-span-2',
    className: 'bg-cream-violet-gradient text-ink-900',
    icon: 'icon-limud.webp',
    alignEnd: true,
  },
  {
    key: 'forum',
    label: 'פורום',
    desc: 'המקום לשאול, לדבר ולהתייעץ עם הקהילה.',
    cta: 'לעמוד הפורום',
    href: FORUM_URL,
    external: true,
    span: 'md:col-span-1',
    className: 'bg-gold-400 text-ink-900',
    icon: 'icon-forum.webp',
  },
  {
    key: 'arnak',
    label: 'ארנק',
    desc: 'ניהול נכסים דיגיטליים בצורה בטוחה.',
    cta: 'לארנק',
    href: '/wallet',
    span: 'md:col-span-1',
    className: 'bg-white text-ink-900 border border-slate-200',
    icon: 'icon-arnak.webp',
  },
  {
    key: 'hadashot',
    label: 'חדשות',
    desc: 'חדשות, עדכונים וניתוחים מעולם הקריפטו המתעדכנים באופן שוטף, עם תקצירים קצרים לצד תוכן מעמיק למי שרוצה להעמיק.',
    cta: 'לעמוד החדשות',
    href: '#news',
    span: 'md:col-span-2',
    className: 'bg-deep-gradient text-white',
    icon: 'icon-news.webp',
  },
  {
    key: 'klim',
    label: 'כלים',
    desc: 'מחשבונים והמרות שיעזרו לך.',
    cta: 'לעמוד הכלים',
    href: '#',
    soon: true,
    span: 'md:col-span-1',
    className: 'bg-cream-50 text-ink-900 border border-slate-200',
    icon: 'icon-klim.webp',
  },
  {
    key: 'game',
    label: 'משחק',
    desc: 'סימולטור מסחר וירטואלי — לומדים בלי סיכון.',
    cta: 'למשחק',
    href: '#',
    soon: true,
    span: 'md:col-span-1',
    className: 'bg-indigo-50 text-ink-900',
    icon: 'icon-game.webp',
  },
]

const tags = [
  { label: 'תוכן איכותי' },
  { label: 'קהילה פעילה' },
  { label: 'לציבור החרדי' },
  { label: 'ידע מקצועי', featured: true },
  { label: 'ליווי הלכתי' },
  { label: 'כלים פרקטיים' },
  { label: 'פורום מקצועי', featured: true },
  { label: 'חדשות הקריפטו' },
  { label: 'הכל במקום אחד' },
  { label: 'למתחילים ולמתקדמים' },
]

/**
 * Placeholder guide/news card content.
 *
 * The Figma screenshots repeat identical placeholder copy across every card —
 * that's Figma lorem-ipsum, not real editorial content. Real copy is pending
 * from the Hebrew content editor (Shifra); do not invent article bodies here.
 * This mirrors the "coming soon" pattern already used elsewhere on the site.
 */
const PLACEHOLDER_CARD = {
  title: 'מה זה בלוקצ׳יין?',
  desc: 'הסבר פשוט וברור על הטכנולוגיה שמאחורי עולם הקריפטו, בלי מושגים מסובכים ועם דוגמאות מהחיים.',
  timestamp: 'לפני 4 ימים',
}

const PLACEHOLDER_NEWS_CARD = {
  title: 'השבוע בקריפטו: ביטקוין מזנק, את׳ריום מתחזק והשוק מתעורר',
  desc: 'לאחר שבועות של יציבות יחסית, שוק הקריפטו מציג עליות חדות. ריכזנו את ההתפתחויות המרכזיות, הנתונים החשובים והאירועים שכדאי להכיר.',
  timestamp: 'לפני 2 שעות',
}

function GuideCard({ index }: { index: number }) {
  return (
    <Reveal delay={index * 90} className="group flex flex-col h-full">
      <div className="rounded-3xl overflow-hidden aspect-[16/10] mb-5">
        {/* Figma placeholder photo — repeated identically across every card there too */}
        <img
          src={`${BASE_PATH}/illustrations/card-guide.webp`}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-display font-black text-lg text-ink-900 mb-2">{PLACEHOLDER_CARD.title}</h3>
      <p className="text-ink-500 text-sm leading-relaxed mb-4 flex-1">{PLACEHOLDER_CARD.desc}</p>
      <div className="flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700">
          <span aria-hidden>↖</span>
          <span>קרא עוד</span>
        </a>
        <span className="text-xs text-ink-400">{PLACEHOLDER_CARD.timestamp}</span>
      </div>
    </Reveal>
  )
}

function NewsCard({ index }: { index: number }) {
  return (
    <Reveal delay={(index % 3) * 90} className="group flex flex-col h-full">
      <div className="rounded-3xl overflow-hidden aspect-[16/10] mb-5">
        {/* Figma placeholder illustration — repeated identically across every card there too */}
        <img
          src={`${BASE_PATH}/illustrations/card-news.webp`}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-display font-black text-base text-ink-900 mb-2 leading-snug">{PLACEHOLDER_NEWS_CARD.title}</h3>
      <p className="text-ink-500 text-sm leading-relaxed mb-4 flex-1">{PLACEHOLDER_NEWS_CARD.desc}</p>
      <div className="flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700">
          <span aria-hidden>↖</span>
          <span>קרא עוד</span>
        </a>
        <span className="text-xs text-ink-400">{PLACEHOLDER_NEWS_CARD.timestamp}</span>
      </div>
    </Reveal>
  )
}

export default function HomePage() {
  return (
    <div dir="rtl">
      {/* ── HERO ── */}
      <section className="relative pt-16 pb-24 px-4 overflow-hidden hero-gradient">
        <div className="absolute inset-0 dot-grid-dark opacity-60 pointer-events-none" aria-hidden />
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-0 w-[28rem] h-[28rem] rounded-full bg-indigo-300/20 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-amber-200/30 blur-3xl animate-float-slow [animation-delay:-6s]" />
        </div>

        <div className="max-w-6xl mx-auto relative grid md:grid-cols-2 gap-14 items-center">
          {/* Copy + CTAs (renders on the right in RTL) */}
          <div className="text-center md:text-right relative z-10 md:order-2">
            <h1 className="animate-fade-up font-display text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.2] text-ink-900">
              כל מה שצריך לדעת על קריפטו,
              <br />
              <span className="text-indigo-600">במקום אחד.</span>
            </h1>

            <p className="animate-fade-up [animation-delay:160ms] text-ink-500 mb-10 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed">
              כאן תמצא מדריכים מקיפים, חדשות ועדכונים, כלים שימושיים ותוכן מקצועי, כל מה
              שתצטרך לדעת על קריפטו!
            </p>

            <div className="animate-fade-up [animation-delay:280ms] flex flex-col sm:flex-row items-center md:items-stretch justify-center md:justify-start gap-4 mb-10">
              <a href="#platform" className="pill-btn pill-btn--gold py-3.5 px-7">
                <span aria-hidden>↖</span>
                <span>גלה את הפלטפורמה</span>
              </a>
              <a
                href={LEARN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn--violet py-3.5 px-7"
              >
                <span aria-hidden>↖</span>
                <span>התחל ללמוד בחינם</span>
              </a>
            </div>

            {/* Inline stats with thin vertical dividers */}
            <div className="animate-fade-up [animation-delay:360ms] flex items-center justify-center md:justify-start divide-x divide-x-reverse divide-slate-300/70">
              {stats.map((s) => (
                <div key={s.label} className="px-5 first:pr-0 last:pl-0 text-center md:text-right">
                  <div className="font-display text-2xl md:text-3xl font-black text-ink-900 tabular-nums" dir="ltr">
                    {s.value}
                  </div>
                  <div className="text-ink-500 text-xs">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Mobile ticker (the side banner sits absolutely on desktop instead) */}
            <div className="animate-fade-up [animation-delay:440ms] mt-8 flex justify-center md:hidden">
              <CryptoTicker />
            </div>
          </div>

          {/* Dashboard mockup + floating 3D coins (renders on the left in RTL) — real crop from the Figma export */}
          <div className="relative h-[22rem] sm:h-[26rem] hidden sm:block md:order-1">
            <div className="dash-mock-glow" aria-hidden />
            <img
              src={`${BASE_PATH}/illustrations/hero-dashboard.webp`}
              alt=""
              aria-hidden
              className="relative z-10 w-full h-full object-contain animate-fade-up [animation-delay:200ms]"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURE BENTO GRID ── */}
      <section id="platform" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-black text-ink-900 mb-3">
              כל מה <span className="text-indigo-600">שמחכה לך</span> בפלטפורמה
            </h2>
            <p className="text-ink-500 text-lg max-w-2xl mx-auto">
              למד, התעדכן, חקור והשתמש בכלים שיעזרו לך להבין את עולם הקריפטו — הכל מחולק
              לנושאים ברורים, כדי שתוכל למצוא בקלות את מה שמעניין אותך.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(0,auto)] gap-5">
            {bentoCards.map((c, i) => (
              <Reveal
                key={c.key}
                delay={i * 70}
                className={`col-span-2 ${c.span}`}
              >
                <a
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  aria-disabled={c.soon}
                  className={`relative flex flex-col h-full min-h-[220px] rounded-3xl p-8 tilt-3d overflow-hidden group ${c.className}`}
                >
                  {c.soon && (
                    <span className="absolute top-4 left-4 text-[10px] bg-white/70 text-ink-500 px-2.5 py-1 rounded-full font-bold">
                      בקרוב
                    </span>
                  )}
                  <div className={`flex items-start gap-6 h-full ${c.alignEnd ? 'flex-row-reverse text-right' : ''}`}>
                    <img
                      src={`${BASE_PATH}/illustrations/${c.icon}`}
                      alt=""
                      aria-hidden
                      className="w-16 h-16 object-contain shrink-0"
                    />
                    <div className="flex-1 flex flex-col h-full">
                      <div className="font-display font-black text-2xl mb-2">{c.label}</div>
                      <p className="opacity-85 leading-relaxed mb-6 max-w-md">{c.desc}</p>
                      <div className="mt-auto inline-flex items-center gap-1.5 font-bold text-sm underline underline-offset-4 transition-all group-hover:gap-2.5 w-fit">
                        <span aria-hidden>↖</span>
                        <span>{c.cta}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / MISSION ── */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute bottom-10 left-[6%] w-20 h-20 rounded-full bg-gradient-to-br from-violet-300/60 to-indigo-500/40 blur-[2px] hidden md:block" aria-hidden />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative">
          <Reveal className="text-ink-700 text-lg leading-relaxed space-y-6 order-2 md:order-1">
            <p>
              קריפטו וועלט היא{' '}
              <span className="underline underline-offset-4 decoration-indigo-300 font-bold">
                הפלטפורמה הדיגיטלית הראשונה בישראל
              </span>{' '}
              שמרכזת את עולם הקריפטו עבור{' '}
              <span className="underline underline-offset-4 decoration-indigo-300 font-bold">הציבור החרדי</span>{' '}
              בשפה פשוטה, בערכים שמתאימים לאורח החיים החרדי ובגישה שמאפשרת לכל אחד ללמוד ולהתקדם בביטחון.
            </p>
            <p>
              מעבר{' '}
              <span className="underline underline-offset-4 decoration-indigo-300 font-bold">
                לקהילה פעילה של למעלה מ-1,500 חברים
              </span>
              , תמצאו אצלנו פורום מקצועי, מסלולי לימוד, קורסים, מאמרים, פודקאסטים, כלים ועדכונים שוטפים שהעולם. כל התוכן נבנה כדי להפוך תחום שנראה מורכב לנגיש, ברור ומעשי.
            </p>
            <p>
              אנחנו מאמינים שידע הוא הבסיס לקבלת החלטות נכונות. לכן כל התכנים מוגשים בצורה פשוטה ומסודרת, עם ליווי הלכתי, דגש על התנהלות אחראית והימנעות מסיכונים מיותרים, כך שכל אחד יכול ללמוד, להבין ולהתקדם בקצב שלו.
            </p>
          </Reveal>

          <Reveal delay={120} className="text-center md:text-right order-1 md:order-2">
            <h2 className="font-display text-5xl md:text-6xl font-black text-ink-900 leading-[1.15] mb-8">
              עולם הקריפטו
              <br />
              <span className="text-indigo-600">לחרדים</span>
            </h2>
            <a
              href={LEARN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn--violet py-3.5 px-7"
            >
              <span aria-hidden>↖</span>
              <span>התחל ללמוד בחינם</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── TAG CLOUD ── */}
      <section className="py-10 px-4">
        <Reveal className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
          {tags.map((t) => (
            <span key={t.label} className={`tag-chip ${t.featured ? 'tag-chip--solid' : ''}`}>
              {t.label}
            </span>
          ))}
        </Reveal>
      </section>

      {/* ── COMMUNITY BANNER ── */}
      {/* Telegram invite link isn't available yet; WhatsApp group CTA links to the
          public forum until Israel confirms the WhatsApp invite link. */}
      <section className="py-10 px-4">
        <Reveal className="max-w-6xl mx-auto">
          <div className="bg-deep-gradient rounded-3xl px-8 py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" aria-hidden />
            {/* Glass "chain block" illustration, real crop from the Figma export, on both edges */}
            <img
              src={`${BASE_PATH}/illustrations/community-left.webp`}
              alt=""
              aria-hidden
              className="absolute inset-y-0 -left-8 h-full w-auto max-w-none opacity-70 pointer-events-none hidden md:block"
            />
            <img
              src={`${BASE_PATH}/illustrations/community-right.webp`}
              alt=""
              aria-hidden
              className="absolute inset-y-0 -right-8 h-full w-auto max-w-none opacity-70 pointer-events-none hidden md:block"
            />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-4">
                הצטרפו לקהילה!
              </h2>
              <p className="text-white/80 mb-10 text-lg">
                1,500+ חברים כבר כאן. שואלים, לומדים, משקיעים ביחד.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={FORUM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn pill-btn--white py-3.5 px-7"
                >
                  <span aria-hidden>↖</span>
                  <span>הצטרפות לפורום</span>
                </a>
                <a
                  href={FORUM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn pill-btn--gold py-3.5 px-7"
                >
                  <span aria-hidden>↖</span>
                  <span>הצטרפות לקבוצת הוואטסאפ של הקהילה</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── GUIDES (מדריכות אחרונות) ── */}
      {/*
        Figma shows 3 identical placeholder cards — that's Figma lorem-ipsum,
        not real content. Real guide titles/descriptions are pending from the
        Hebrew content editor (Shifra); this renders clearly-generic placeholder
        copy until that content lands, same pattern as the "coming soon" tiles.
      */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-display text-3xl md:text-4xl font-black text-ink-900">הדרכות אחרונות</h2>
            <a href="#" className="pill-btn pill-btn--violet py-2.5 px-5 text-sm">
              <span aria-hidden>↖</span>
              <span>לכל ההדרכות</span>
            </a>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <GuideCard key={i} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS (חדשות אחרונות, 3x2) ── */}
      {/* Same placeholder caveat as the guides section above — pending Shifra. */}
      <section id="news" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Reveal className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-display text-3xl md:text-4xl font-black text-ink-900">חדשות אחרונות</h2>
            <a href="#" className="pill-btn pill-btn--violet py-2.5 px-5 text-sm">
              <span aria-hidden>↖</span>
              <span>לכל החדשות</span>
            </a>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <NewsCard key={i} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      {/*
        TODO(product question, unresolved on this ticket / CRY-218): the site is
        100% static (no backend). Whether the contact form should submit via
        Formspree/Resend/a custom API, or something else, was asked to
        yankale/Israel and has not been answered yet. Until that's decided this
        form does NOT wire a submission handler — it falls back to a `mailto:`
        link so the UI is fully built and visually correct, without silently
        faking a working submission.
      */}
      <section className="relative overflow-hidden px-4 pt-20 pb-24">
        {/* Bottom half — purple gradient backdrop the white card overlaps onto, per spec */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-deep-gradient" aria-hidden>
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" aria-hidden />
        </div>

        <div className="max-w-4xl mx-auto relative card rounded-3xl shadow-xl p-8 md:p-12">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-black text-ink-900 mb-3">
              יש לכם שאלה? <span className="text-indigo-600">אנחנו כאן בשבילכם.</span>
            </h2>
            <p className="text-ink-500 text-lg">
              השאירו פרטים ונחזור אליכם עם כל המידע שתצטרכו כדי להתחיל בצורה בטוחה, ברורה ונכונה.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form
              action={`mailto:${CONTACT_EMAIL}`}
              method="get"
              encType="text/plain"
              className="flex flex-col md:flex-row-reverse items-stretch gap-3"
            >
              <label className="sr-only" htmlFor="contact-name">שם</label>
              <input
                id="contact-name"
                name="שם"
                type="text"
                placeholder="שם"
                className="flex-1 min-w-0 rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <label className="sr-only" htmlFor="contact-phone">טלפון</label>
              <input
                id="contact-phone"
                name="טלפון"
                type="tel"
                placeholder="טלפון"
                className="flex-1 min-w-0 rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <label className="sr-only" htmlFor="contact-email">מייל</label>
              <input
                id="contact-email"
                name="מייל"
                type="email"
                placeholder="מייל"
                className="flex-1 min-w-0 rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <label className="sr-only" htmlFor="contact-message">הודעה</label>
              <input
                id="contact-message"
                name="הודעה"
                type="text"
                placeholder="הודעה"
                className="flex-[2] min-w-0 rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <button type="submit" className="pill-btn pill-btn--violet py-3 px-6 justify-center shrink-0">
                <span aria-hidden>↖</span>
                <span>שליחה</span>
              </button>
            </form>
            <p className="text-ink-400 text-xs text-center mt-4">
              השליחה תפתח את תוכנת המייל שלך אל {CONTACT_EMAIL} — טופס עם שליחה ישירה מהאתר ממתין להחלטת מוצר (ראו הערת TODO בקוד).
            </p>
          </Reveal>
        </div>
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
