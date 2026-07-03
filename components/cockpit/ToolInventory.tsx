import { tools } from './cockpitData'

export default function ToolInventory() {
  return (
    <section className="mb-14">
      <h2 className="font-display text-2xl font-bold text-ink-900 mb-2 border-s-4 border-brand-500 ps-4">
        1. Inventaire de l’abonnement Google AI Pro
      </h2>
      <p className="text-ink-500 mb-6 ps-4">
        Un outil, un lien direct, un quota connu, un usage chez cryptovelt. Compte personnel d’Israël —
        non partageable, non branché en backend d’un service public.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <a
            key={tool.id}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover rounded-2xl p-5 block"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-ink-900">{tool.name}</h3>
              <span className="text-brand-600 text-sm shrink-0" aria-hidden>
                ↗
              </span>
            </div>
            <p className="text-sm text-ink-600 mb-2">
              <span className="font-semibold text-ink-700">Quota : </span>
              {tool.quota}
            </p>
            <p className="text-sm text-ink-600">
              <span className="font-semibold text-ink-700">Chez cryptovelt : </span>
              {tool.usage}
            </p>
            {tool.note && (
              <p className="text-xs text-btc-700 bg-btc-50 rounded-lg px-3 py-2 mt-3">{tool.note}</p>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}
