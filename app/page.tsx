import Link from 'next/link'
import CryptoPriceWidget from '@/components/CryptoPriceWidget'

const articles = [
  {
    href: '/bitcoin',
    icon: '₿',
    title: 'מה זה ביטקוין?',
    description: 'הכירו את המטבע הדיגיטלי הראשון בעולם — כיצד הוא עובד, מאיפה הוא הגיע ולמה הוא שונה מכסף רגיל.',
    color: 'from-orange-400 to-yellow-500',
  },
  {
    href: '/blockchain',
    icon: '🔗',
    title: 'מה זה בלוקצ׳יין?',
    description: 'הטכנולוגיה שמאחורי הביטקוין — מחברת בלוקים של מידע בצורה מאובטחת שאי אפשר לזייף.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    href: '/wallet',
    icon: '👝',
    title: 'איך עובד ארנק דיגיטלי?',
    description: 'ארנק הקריפטו שלכם — מה זה בדיוק, סוגי הארנקים השונים ואיך שומרים עליו בבטחה.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    href: '/investment',
    icon: '📈',
    title: 'מה זה השקעה בקריפטו?',
    description: 'הבנת הסיכונים, הסיכויים וכיצד לגשת להשקעה בעולם הקריפטו בצורה מושכלת.',
    color: 'from-green-500 to-emerald-400',
  },
  {
    href: '/buy-crypto',
    icon: '🛡️',
    title: 'איך קונים קריפטו בבטחה?',
    description: 'מדריך מעשי לרכישת קריפטו ראשונה — בורסות, אמצעי תשלום וכיצד להימנע מהונאות.',
    color: 'from-red-500 to-rose-400',
  },
]

const features = [
  { icon: '📚', title: 'מדריכים בעברית', desc: 'תוכן חינוכי מקיף ומובן, כתוב עברית תקנית' },
  { icon: '🕍', title: 'מותאם לקהילה', desc: 'מידע רלוונטי עבור הקהילה החרדית בישראל' },
  { icon: '🔒', title: 'בטוח ואמין', desc: 'ללא ייעוץ פיננסי — מידע חינוכי בלבד' },
]

export default function HomePage() {
  return (
    <div dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">₿</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            הבינו את עולם הקריפטו
          </h1>
          <p className="text-xl md:text-2xl text-brand-100 mb-4 leading-relaxed">
            מדריכים חינוכיים בעברית עבור הקהילה החרדית בישראל
          </p>
          <p className="text-brand-200 mb-10 max-w-2xl mx-auto">
            ביטקוין, בלוקצ׳יין, ארנקים דיגיטליים — מסבירים הכל בשפה פשוטה ונגישה,
            בלי ז׳רגון מסובך.
          </p>
          <Link
            href="/bitcoin"
            className="inline-block bg-gold-500 hover:bg-gold-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg"
          >
            התחל ללמוד ←
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="text-center p-6">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-brand-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Crypto Prices */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 text-center mb-8">
            מחירי קריפטו עכשיו
          </h2>
          <CryptoPriceWidget />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 text-center mb-12">
            מדריכים חינוכיים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-200"
              >
                <div className={`bg-gradient-to-r ${article.color} p-6 text-center`}>
                  <span className="text-5xl">{article.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {article.description}
                  </p>
                  <div className="mt-4 text-brand-500 text-sm font-semibold group-hover:text-brand-700">
                    קרא עוד ←
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Forum CTA */}
      <section className="py-16 px-4 bg-brand-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6">💬</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            הצטרפו לפורום הקהילה שלנו
          </h2>
          <p className="text-brand-100 mb-8 text-lg leading-relaxed">
            שאלות? רוצים להתחבר עם אחרים מהקהילה? הפורום שלנו בעברית פתוח לכולם —
            מתחילים ומנוסים כאחד.
          </p>
          <a
            href="https://forum.cryptovelt.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-500 hover:bg-gold-400 text-brand-900 font-bold py-4 px-10 rounded-xl text-lg transition-colors shadow-lg"
          >
            כנסו לפורום ←
          </a>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-amber-50 border-t border-amber-200 py-8 px-4">
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
