import { FORUM_URL, LEARN_URL, CONTACT_EMAIL } from '@/lib/site-config'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

const legalLinks = [
  { label: 'תקנון אתר', href: '#', soon: true },
  { label: 'מדיניות פרטיות', href: '#', soon: true },
  { label: 'הצהרת נגישות', href: '#', soon: true },
]

const platformLinks = [
  { label: 'משחק', href: '#', soon: true },
  { label: 'ארנק', href: '/wallet' },
  { label: 'כלים', href: '#', soon: true },
  { label: 'מסחר', href: '#', soon: true },
]

const contentLinks = [
  { label: 'פורום', href: FORUM_URL, external: true },
  { label: 'לימוד', href: LEARN_URL, external: true },
  { label: 'חדשות', href: '#', soon: true },
]

function FooterColumn({ links }: { links: { label: string; href: string; external?: boolean; soon?: boolean }[] }) {
  return (
    <ul className="space-y-3">
      {links.map((l) => (
        <li key={l.label}>
          {l.soon ? (
            <span className="flex items-center gap-1.5 text-white/40 text-sm">
              <span aria-hidden>↖</span>
              <span>{l.label}</span>
              <span className="text-[9px] border border-white/20 rounded px-1 py-px">בקרוב</span>
            </span>
          ) : (
            <a
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-1.5 text-sm text-white/85 hover:text-white underline underline-offset-4 decoration-white/30 transition-colors"
            >
              <span aria-hidden>↖</span>
              <span>{l.label}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer dir="rtl" className="relative mt-0 bg-deep-gradient text-white overflow-hidden">
      {/* Glass-block watermark illustration, decorative only */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[36rem] h-[20rem] opacity-20 pointer-events-none -translate-x-1/4" aria-hidden>
        <div className="w-full h-full bg-gradient-to-tr from-white/20 to-transparent rounded-[3rem] rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 order-last md:order-first">
            <img
              src={`${BASE_PATH}/brand/logo-lockup.webp`}
              alt="קריפטו וועלט — עולם הקריפטו לחרדים"
              className="h-12 w-auto mb-3"
            />
          </div>

          <FooterColumn links={legalLinks} />
          <FooterColumn links={platformLinks} />
          <FooterColumn links={contentLinks} />
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            פיתוח: <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white underline underline-offset-4">{CONTACT_EMAIL}</a>
          </p>
          <p className="text-center">מיתוג, אפיון ועיצוב: tsivia</p>
          <p>© Crypto Velt 2026</p>
        </div>
      </div>
    </footer>
  )
}
