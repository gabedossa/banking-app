import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/store/auth-store'
import { Sidebar } from '@/shared/components/layout/Sidebar'
import { Header } from '@/shared/components/layout/Header'
import { StatsCard } from '../components/StatsCard'
import { CreditCard } from '../components/CreditCard'
import { Actions } from '../components/Actions'
import { Transactions } from '../components/Transactions'
import { SpendingCategories } from '../components/SpendingCategories'
import { stats, quickActions, transactions, categories } from '@/data/dashboard'

export default function Dashboard() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Sidebar
        name={user?.name ?? ''}
        email={user?.email ?? ''}
        avatar={user?.avatar ?? ''}
      />

      <div className="md:pl-72">
        <main className="p-6 md:p-8 space-y-8">
          <Header name={user?.name ?? ''} onLogout={handleLogout} />

          {/* Cards de estatísticas */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatsCard key={stat.id} stat={stat} />
            ))}
          </div>

          {/* Cartão + Ações | Transações */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <CreditCard />
              <Actions actions={quickActions} />
            </div>
            <Transactions items={transactions} />
          </div>

          {/* Gastos por categoria */}
          <SpendingCategories categories={categories} />
        </main>
      </div>
    </div>
  )
}
