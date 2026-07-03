import type { Metadata } from 'next'
import Link from 'next/link'
import ToolInventory from '@/components/cockpit/ToolInventory'
import WeeklyRoutine from '@/components/cockpit/WeeklyRoutine'
import UsageJournal from '@/components/cockpit/UsageJournal'

export const metadata: Metadata = {
  title: 'Cockpit AI Pro — CryptoVelt (interne)',
  description:
    "Suivi interne de l'abonnement Google AI Pro d'Israël : inventaire des outils, routine de production hebdomadaire, journal d'utilisation mensuel.",
}

export default function CockpitPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <div className="mb-4">
        <Link href="/" className="text-sm text-ink-400 hover:text-brand-600 transition-colors">
          ← Retour au site public
        </Link>
      </div>

      <div className="mb-12">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-600 bg-brand-50 rounded-full px-3 py-1 mb-4">
          Interne — non indexé
        </span>
        <h1 className="font-display text-3xl md:text-4xl font-black text-ink-900 mb-3 leading-tight">
          Cockpit AI Pro
        </h1>
        <p className="text-lg text-ink-500 max-w-2xl">
          Outil de pilotage de l’abonnement Google AI Pro d’Israël pour la production de contenu
          cryptovelt. Phase 1 du plan CRY-37.
        </p>
        <div className="mt-6 card rounded-2xl p-5 text-sm text-ink-600 space-y-2">
          <p>
            <strong className="text-ink-800">Compte personnel, non partageable.</strong> Ce cockpit
            est un outil de suivi/pilotage interne — pas un service public, pas un backend appelé par
            le site.
          </p>
          <p>
            <strong className="text-ink-800">L’API Gemini n’est pas incluse</strong> dans
            l’abonnement AI Pro : elle est facturée à part (voir « Developer Program Premium »
            ci-dessous pour les 10 $/mois de crédits Cloud qui peuvent la financer).
          </p>
          <p>
            <strong className="text-ink-800">Langue :</strong> ce cockpit est en français (usage
            interne) ; le contenu qu’il référence (articles, podcasts, vidéos) est produit et publié
            en hébreu.
          </p>
        </div>
      </div>

      <ToolInventory />
      <WeeklyRoutine />
      <UsageJournal />

      <div className="pt-8 border-t border-slate-200 text-xs text-ink-400">
        <p>
          Phase 2 (usine à contenu hebdo, shifra + eli) et Phase 3 (widget API résumé du jour) suivront
          au GO d’Israël, dans des issues enfants séparées de CRY-37.
        </p>
      </div>
    </div>
  )
}
