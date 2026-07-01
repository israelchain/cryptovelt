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
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">{icon}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-3">{title}</h1>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>

      {/* Content */}
      <article className="prose-rtl space-y-8">
        {sections.map((section, idx) => (
          <section key={idx}>
            {section.title && (
              <h2 className="text-xl font-bold text-brand-800 mb-3 border-r-4 border-gold-500 pr-3">
                {section.title}
              </h2>
            )}

            {section.type === 'highlight' && (
              <div className="bg-brand-50 border-r-4 border-brand-500 p-4 rounded-lg">
                <p className="text-brand-900 leading-relaxed">
                  {Array.isArray(section.content) ? section.content.join(' ') : section.content}
                </p>
              </div>
            )}

            {section.type === 'warning' && (
              <div className="bg-amber-50 border-r-4 border-amber-500 p-4 rounded-lg">
                <p className="text-amber-900 leading-relaxed">
                  <strong>⚠️ שים לב: </strong>
                  {Array.isArray(section.content) ? section.content.join(' ') : section.content}
                </p>
              </div>
            )}

            {section.type === 'list' && Array.isArray(section.content) && (
              <ul className="space-y-2">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold-500 font-bold mt-0.5">•</span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {(!section.type || section.type === 'text') && (
              <p className="text-gray-700 leading-relaxed text-lg">
                {Array.isArray(section.content) ? section.content.join(' ') : section.content}
              </p>
            )}
          </section>
        ))}
      </article>

      {/* Related articles */}
      {relatedLinks && relatedLinks.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-brand-900 mb-6">מדריכים קשורים</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-brand-500 hover:shadow-md transition-all group"
              >
                <div className="font-semibold text-brand-800 group-hover:text-brand-600 mb-1">
                  {link.label}
                </div>
                <div className="text-sm text-gray-500">{link.description}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
