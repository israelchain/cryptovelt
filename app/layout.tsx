import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'קריפטו וועלט — הפלטפורמה החרדית לקריפטו',
  description: 'הפלטפורמה הדיגיטלית הראשונה בישראל ללימוד קריפטו עבור הקהילה החרדית. תוכן בעברית, קהילה פעילה, מסלולי לימוד מהבסיס ועד מתקדם.',
  keywords: 'ביטקוין, בלוקצ׳יין, קריפטו, ארנק דיגיטלי, השקעות, חרדים, ישראל, לימוד קריפטו',
  openGraph: {
    title: 'קריפטו וועלט — הפלטפורמה החרדית לקריפטו',
    description: 'תוכן, קהילה וכלים — עולם הקריפטו בעברית, פשוט, מהבסיס',
    locale: 'he_IL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
