import type { QuickAction } from '../../data/dashboard'

type ActionsProps = {
  actions: QuickAction[]
}

const accentMap = {
  primary: {
    wrapper: 'hover:bg-brand-primary/10',
    icon: 'bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary/20',
  },
  secondary: {
    wrapper: 'hover:bg-brand-secondary/10',
    icon: 'bg-brand-secondary/10 text-brand-secondary group-hover:bg-brand-secondary/20',
  },
  warning: {
    wrapper: 'hover:bg-amber-100 dark:hover:bg-amber-500/10',
    icon: 'bg-amber-100 text-amber-500 group-hover:bg-amber-200 dark:bg-amber-500/10 dark:text-amber-400',
  },
}

export function Actions({ actions }: ActionsProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft dark:bg-slate-900">
      <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">Ações Rápidas</h3>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((action) => {
          const accent = accentMap[action.accent]

          return (
            <button
              key={action.id}
              type="button"
              className={`group flex flex-col items-center rounded-3xl bg-slate-50 p-4 text-center transition duration-300 hover:-translate-y-1 dark:bg-slate-800 ${accent.wrapper}`}
            >
              <div
                className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full transition duration-300 ${accent.icon}`}
              >
                <i className={`${action.icon} text-xl`} />
              </div>

              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {action.label}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}