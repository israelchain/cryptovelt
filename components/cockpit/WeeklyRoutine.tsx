import { weeklyRoutine } from './cockpitData'

export default function WeeklyRoutine() {
  return (
    <section className="mb-14">
      <h2 className="font-display text-2xl font-bold text-ink-900 mb-2 border-s-4 border-mint-500 ps-4">
        2. Routine de production hebdomadaire
      </h2>
      <p className="text-ink-500 mb-6 ps-4">
        Checklist Phase 1 — sortie finale en hébreu (Phase 2, avec shifra + eli, industrialisera ce
        pipeline). En attendant, cette routine sert de fil conducteur pour produire un premier cycle
        complet.
      </p>

      <ol className="space-y-3">
        {weeklyRoutine.map((step, idx) => (
          <li key={step.day} className="card rounded-2xl p-5 flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-mint-50 text-mint-600 font-bold grid place-items-center">
              {idx + 1}
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-bold text-ink-900">{step.day}</span>
                <span className="text-ink-400">—</span>
                <span className="font-semibold text-ink-700">{step.title}</span>
              </div>
              <p className="text-sm text-ink-600">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
