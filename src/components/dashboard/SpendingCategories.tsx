import type { Category } from '../../data/dashboard'

type SpendingCategoriesProps = {
  categories: Category[]
}

const accentMap = {
  primary: 'bg-brand-primary/10 text-brand-primary',
  secondary: 'bg-brand-secondary/10 text-brand-secondary',
  danger: 'bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-400',
  warning: 'bg-amber-100 text-amber-500 dark:bg-amber-500/10 dark:text-amber-400',
}

export function SpendingCategories({ categories }: SpendingCategoriesProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft dark:bg-slate-900">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Gastos por Categoria
        </h3>

        <select className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
          <option>Este Mês</option>
          <option>Mês Passado</option>
          <option>Últimos 3 Meses</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {categories.map((category) => (
          <article
            key={category.id}
            className="rounded-3xl bg-slate-50 p-4 text-center dark:bg-slate-800"
          >
            <div
              className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full ${accentMap[category.accent]}`}
            >
              <i className={`${category.icon} text-xl`} />
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">{category.title}</p>
            <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              {category.value}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}