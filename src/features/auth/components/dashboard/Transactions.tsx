import type { Transaction } from '../../data/dashboard'

type TransactionsProps = {
  items: Transaction[]
}

const accentMap = {
  primary: 'bg-brand-primary/10 text-brand-primary',
  secondary: 'bg-brand-secondary/10 text-brand-secondary',
  danger: 'bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-400',
  warning: 'bg-amber-100 text-amber-500 dark:bg-amber-500/10 dark:text-amber-400',
}

export function Transactions({ items }: TransactionsProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft dark:bg-slate-900">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Transações Recentes
        </h3>

        <button
          type="button"
          className="text-sm font-semibold text-brand-primary transition hover:opacity-80"
        >
          Ver Todas
        </button>
      </div>

      <div className="space-y-3">
        {items.map((transaction) => (
          <button
            key={transaction.id}
            type="button"
            className="flex w-full items-center justify-between rounded-2xl p-3 text-left transition duration-300 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${accentMap[transaction.accent]}`}
              >
                <i className={transaction.icon} />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                  {transaction.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{transaction.time}</p>
              </div>
            </div>

            <span
              className={`ml-4 shrink-0 text-sm font-semibold ${
                transaction.type === 'income'
                  ? 'text-brand-secondary'
                  : 'text-red-500 dark:text-red-400'
              }`}
            >
              {transaction.amount}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}