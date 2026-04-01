import { Actions } from '../components/dashboard/Actions'
import { CreditCard } from '../components/dashboard/CreditCard'
import { SpendingCategories } from '../components/dashboard/SpendingCategories'
import { StatsCard } from '../components/dashboard/StatsCard'
import { Transactions } from '../components/dashboard/Transactions'
import { Header } from '../components/layout/Header'
import { Sidebar } from '../components/layout/Sidebar'
import { categories, quickActions, stats, transactions } from '../data/dashboard'

export default function Dashboard() {
  const userData = {
    name: "Gabriel Dossa",
    email: "gabriel.dossa@example.com",
    saldo_value: 12500.75,
    saldo_total: 15000.00,
    entradas: 8000.00,
    saídas: 2500.00,
    investimentos: 3200.50,
    gastosMensais: 3200.50,
    limiteCartao: 5000.00,
  }
  
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Sidebar fatura={0} {...userData} />
      <main className="min-h-screen px-4 pb-8 pt-24 md:ml-72 md:px-8 md:pt-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <Header userData={userData} />

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatsCard key={stat.id} stat={stat} />
            ))}
          </section>

          <section className="grid grid-cols-1 gap-8 xl:grid-cols-3">
            <div className="space-y-8 xl:col-span-2">
              <CreditCard />
              <Actions actions={quickActions} />
            </div>

            <div className="xl:col-span-1">
              <Transactions items={transactions} />
            </div>
          </section>

          <SpendingCategories categories={categories} />
        </div>
      </main>
    </div>
  )
}