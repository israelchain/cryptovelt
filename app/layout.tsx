import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'קריפטוVelt — מדריך הקריפטו לקהילה החרדית',
  description: 'למד על ביטקוין, בלוקצ׳יין, ארנקים דיגיטליים והשקעות בקריפטו — בעברית, עבור הקהילה החרדית בישראל.',
  keywords: 'ביטקוין, בלוקצ׳יין, קריפטו, ארנק דיגיטלי, השקעות, חרדים, ישראל',
  openGraph: {
    title: 'קריפטוVelt — מדריך הקריפטו לקהילה החרדית',
    description: 'הבנת עולם הקריפטו בצורה נגישה ומהימנה',
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
