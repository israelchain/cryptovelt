import Link from 'next/link'

interface Section {
  title: string
  content: string | string[]
  type?: 'text' | 'list' | 'highlight' | 'warning'
}

interface RelatedLink {
  href: string
  label: string
  description: string
}

interface ArticlePageProps {
  icon: string
  title: string
  subtitle: string
  sections: Section[]
  relatedLinks?: RelatedLink[]
}

export default function ArticlePage({ icon, title, subtitle, sections, relatedLinks }: ArticlePageProps) {
  return (
    <div className="relative">
      {/* Ambient aura behind the header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-64 rounded-full bg-btc-200/30 blur-3xl pointer-events-none" aria-hidden />

      <div className="max-w-3xl mx-auto px-4 py-14 relative">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-up">
          <div className="inline-grid place-items-center w-24 h-24 mb-6 rounded-3xl border-gradient-light text-5xl animate-float">
            {icon}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black text-ink-900 mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-ink-500">{subtitle}</p>
          <div className="mt-8 h-px w-40 mx-auto bg-gradient-to-l from-transparent via-btc-400/70 to-transparent" aria-hidden />
        </div>

        {/* Content */}
        <article className="prose-rtl space-y-10 animate-fade-up [animation-delay:150ms]">
          {sections.map((section, idx) => (
            <section key={idx}>
              {section.title && (
                <h2 className="font-display text-2xl font-bold text-ink-900 mb-4 border-s-4 border-btc-500 ps-4">
                  {section.title}
                </h2>
              )}

              {section.type === 'highlight' && (
                <div className="card border-s-4 !border-s-brand-400 p-5 rounded-2xl bg-brand-50">
                  <p className="text-brand-900 leading-relaxed text-lg">
                    {Array.isArray(section.content) ? section.content.join(' ') : section.content}
                  </p>
                </div>
              )}

              {section.type === 'warning' && (
                <div className="border-s-4 border-btc-500 p-5 rounded-2xl bg-btc-50">
                  <p className="text-btc-800 leading-relaxed">
                    <strong>⚠️ שים לב: </strong>
                    {Array.isArray(section.content) ? section.content.join(' ') : section.content}
                  </p>
                </div>
              )}

              {section.type === 'list' && Array.isArray(section.content) && (
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-btc-500 font-bold mt-1 text-sm" aria-hidden>◆</span>
                      <span className="text-ink-600 leading-relaxed text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {(!section.type || section.type === 'text') && (
                <p className="text-ink-600 leading-relaxed text-lg">
                  {Array.isArray(section.content) ? section.content.join(' ') : section.content}
                </p>
              )}
            </section>
          ))}
        </article>

        {/* Related articles */}
        {relatedLinks && relatedLinks.length > 0 && (
          <div className="mt-16 pt-10 border-t border-slate-200">
            <h3 className="font-display text-2xl font-bold text-ink-900 mb-6">מדריכים קשורים</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block p-5 card card-hover rounded-2xl group"
                >
                  <div className="font-bold text-ink-900 group-hover:text-btc-600 mb-1.5 transition-colors">
                    {link.label}
                  </div>
                  <div className="text-sm text-ink-500">{link.description}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
