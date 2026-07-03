import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cockpit AI Pro — CryptoVelt (interne)',
  robots: { index: false, follow: false },
}

export default function CockpitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="fr" dir="ltr" className="text-left">
      {children}
    </div>
  )
}
