export function CreditCard() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft dark:bg-slate-900">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Meus Cartões</h3>
        <button
          type="button"
          className="text-sm font-semibold text-brand-primary transition hover:opacity-80"
        >
          Ver Todos
        </button>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-6 text-white shadow-card transition duration-300 hover:-translate-y-1">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10" />
        <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10" />

        <div className="relative z-10">
          <div className="mb-10 flex items-center justify-between">
            <span className="text-sm font-medium text-white/80">BancoDigital Black</span>
            <i className="ri-visa-line text-3xl" />
          </div>

          <p className="mb-6 text-xl tracking-[0.35em] sm:text-2xl">**** **** **** 4589</p>

          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase text-white/70">Titular</p>
              <p className="text-sm font-semibold">João Silva</p>
            </div>

            <div>
              <p className="text-xs uppercase text-white/70">Validade</p>
              <p className="text-sm font-semibold">12/29</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Limite Disponível</p>
          <p className="text-xl font-bold text-slate-900 dark:text-white">R$ 15.000,00</p>
        </div>

        <div className="sm:text-right">
          <p className="text-sm text-slate-500 dark:text-slate-400">Fatura Atual</p>
          <p className="text-xl font-bold text-red-500 dark:text-red-400">R$ 2.340,00</p>
        </div>
      </div>
    </section>
  )
}