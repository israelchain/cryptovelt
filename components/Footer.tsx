import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <span className="text-gold-400 text-2xl">₿</span>
              <span>קריפטוVelt</span>
            </div>
            <p className="text-sm leading-relaxed">
              הפלטפורמה החינוכית המובילה להבנת עולם הקריפטו,
              עבור הקהילה החרדית בישראל.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">מדריכים</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bitcoin" className="hover:text-gold-400 transition-colors">מה זה ביטקוין?</Link></li>
              <li><Link href="/blockchain" className="hover:text-gold-400 transition-colors">מה זה בלוקצ׳יין?</Link></li>
              <li><Link href="/wallet" className="hover:text-gold-400 transition-colors">איך עובד ארנק דיגיטלי?</Link></li>
              <li><Link href="/investment" className="hover:text-gold-400 transition-colors">מה זה השקעה בקריפטו?</Link></li>
              <li><Link href="/buy-crypto" className="hover:text-gold-400 transition-colors">איך קונים קריפטו בבטחה?</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">קהילה</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://forum.cryptovelt.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  💬 פורום קהילה
                </a>
              </li>
              <li>
                <a
                  href="https://forum.cryptovelt.cloud/category/42/%D7%A9%D7%90%D7%9C%D7%95%D7%AA-%D7%9C%D7%9E%D7%AA%D7%97%D7%99%D7%9C%D7%99%D7%9D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  שאלות למתחילים
                </a>
              </li>
              <li>
                <a
                  href="https://forum.cryptovelt.cloud/category/7/%D7%91%D7%99%D7%98%D7%A7%D7%95%D7%99%D7%9F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  ביטקוין
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-white font-semibold mb-4">הצהרה</h3>
            <p className="text-sm leading-relaxed">
              המידע באתר זה הוא למטרות חינוכיות בלבד.
              אין באמור ייעוץ פיננסי או המלצה להשקעה.
              תמיד התייעץ עם מומחה מוסמך לפני קבלת החלטות פיננסיות.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-700 mt-8 pt-8 text-center text-sm">
          <p>© 2026 קריפטוVelt — כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  )
}
