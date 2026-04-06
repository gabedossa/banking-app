import type { Stat } from '../../data/dashboard'

type StatsCardProps = {
  stat: Stat
}

const accentMap = {
  primary: {
    container: 'bg-brand-primary/10 text-brand-primary',
  },
  secondary: {
    container: 'bg-brand-secondary/10 text-brand-secondary',
  },
  danger: {
    container: 'bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-400',
  },
  warning: {
    container: 'bg-amber-100 text-amber-500 dark:bg-amber-500/10 dark:text-amber-400',
  },
}

export function StatsCard({ stat }: StatsCardProps) {
  const accent = accentMap[stat.accent]

  return (
    <article className="rounded-3xl bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.container}`}
        >
          <i className={`${stat.icon} text-xl`} />
        </div>

        <span
          className={`text-sm font-semibold ${
            stat.trendType === 'positive'
              ? 'text-brand-secondary'
              : 'text-red-500 dark:text-red-400'
          }`}
        >
          {stat.trend}
        </span>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">{stat.title}</p>
      <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
    </article>
  )
}