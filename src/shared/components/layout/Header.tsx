import { ThemeToggle } from '@/shared/components/ui/ThemeToggle'

type HeaderProps = {
  name: string
  onLogout: () => void
}

export function Header({ name, onLogout }: HeaderProps) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="pl-14 md:pl-0">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
          Bom dia, {name}! 👋
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Aqui está o resumo da sua conta
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          aria-label="Notificações"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-600 shadow-soft transition hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          <i className="ri-notification-3-line text-lg" />
        </button>

        <button
          type="button"
          aria-label="Mensagens"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-600 shadow-soft transition hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
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

        <button
          type="button"
          onClick={onLogout}
          aria-label="Sair da conta"
          className="inline-flex items-center justify-center rounded-2xl bg-red-50 px-5 py-3 text-sm font-semibold text-red-500 transition duration-300 hover:bg-red-100 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20"
        >
          <i className="ri-logout-box-r-line mr-2 text-base" />
          Sair
        </button>
      </div>
    </header>
  )
}
