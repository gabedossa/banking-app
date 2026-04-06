import { ThemeToggle } from '../ui/ThemeToggle'

export function Header({ userData }: { userData: { name: string; email: string; saldo_value: number; gastosMensais: number; limiteCartao: number } }) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="pl-14 md:pl-0">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
          Ola, {userData.name} 👋
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 md:text-base">
          Aqui está o resumo da sua conta
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-600 shadow-soft transition hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          aria-label="Notificações"
        >
          <i className="ri-notification-3-line text-lg" />
        </button>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-600 shadow-soft transition hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          aria-label="Mensagens"
        >
          <i className="ri-message-3-line text-lg" />
        </button>

        <ThemeToggle />

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
        >
          <i className="ri-add-line mr-2 text-base" />
          Nova Transação
        </button>
      </div>
    </header>
  )
}