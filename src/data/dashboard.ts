export type NavigationItem = {
  id: string
  label: string
  icon: string
  active?: boolean
}

export type Stat = {
  id: string
  title: string
  value: string
  trend: string
  trendType: 'positive' | 'negative'
  icon: string
  accent: 'primary' | 'secondary' | 'danger' | 'warning'
}

export type QuickAction = {
  id: string
  label: string
  icon: string
  accent: 'primary' | 'secondary' | 'warning'
}

export type Transaction = {
  id: string
  title: string
  time: string
  amount: string
  type: 'income' | 'expense'
  icon: string
  accent: 'primary' | 'secondary' | 'danger' | 'warning'
}

export type Category = {
  id: string
  title: string
  value: string
  icon: string
  accent: 'primary' | 'secondary' | 'danger' | 'warning'
}

export const navigationItems: NavigationItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'ri-dashboard-line', active: true },
  { id: 'accounts', label: 'Contas', icon: 'ri-wallet-3-line' },
  { id: 'transfers', label: 'Transferências', icon: 'ri-exchange-line' },
  { id: 'payments', label: 'Pagamentos', icon: 'ri-bill-line' },
  { id: 'investments', label: 'Investimentos', icon: 'ri-pie-chart-line' },
  { id: 'settings', label: 'Configurações', icon: 'ri-settings-4-line' },
]

export const stats: Stat[] = [
  {
    id: 'balance',
    title: 'Saldo Total',
    value: 'R$ 45.230,00',
    trend: '+12.5%',
    trendType: 'positive',
    icon: 'ri-wallet-3-fill',
    accent: 'primary',
  },
  {
    id: 'income',
    title: 'Entradas',
    value: 'R$ 12.450,00',
    trend: '+8.2%',
    trendType: 'positive',
    icon: 'ri-arrow-down-circle-fill',
    accent: 'secondary',
  },
  {
    id: 'outcome',
    title: 'Saídas',
    value: 'R$ 8.320,00',
    trend: '-3.1%',
    trendType: 'negative',
    icon: 'ri-arrow-up-circle-fill',
    accent: 'danger',
  },
  {
    id: 'investments',
    title: 'Investimentos',
    value: 'R$ 28.900,00',
    trend: '+15.3%',
    trendType: 'positive',
    icon: 'ri-pie-chart-2-fill',
    accent: 'warning',
  },
]

export const quickActions: QuickAction[] = [
  { id: 'transfer', label: 'Transferir', icon: 'ri-exchange-dollar-line', accent: 'primary' },
  { id: 'qr', label: 'Pagar QR', icon: 'ri-qr-code-line', accent: 'secondary' },
  { id: 'barcode', label: 'Pagar Boleto', icon: 'ri-barcode-box-line', accent: 'primary' },
  { id: 'reload', label: 'Recarregar', icon: 'ri-add-circle-line', accent: 'warning' },
]

export const transactions: Transaction[] = [
  {
    id: '1',
    title: 'Supermercado',
    time: 'Hoje, 14:30',
    amount: '-R$ 234,50',
    type: 'expense',
    icon: 'ri-shopping-bag-3-line',
    accent: 'danger',
  },
  {
    id: '2',
    title: 'Salário',
    time: 'Ontem, 09:00',
    amount: '+R$ 5.000,00',
    type: 'income',
    icon: 'ri-arrow-down-line',
    accent: 'secondary',
  },
  {
    id: '3',
    title: 'Internet',
    time: '22 Jan, 10:15',
    amount: '-R$ 99,90',
    type: 'expense',
    icon: 'ri-wifi-line',
    accent: 'primary',
  },
  {
    id: '4',
    title: 'Streaming',
    time: '20 Jan, 18:45',
    amount: '-R$ 29,90',
    type: 'expense',
    icon: 'ri-movie-line',
    accent: 'primary',
  },
  {
    id: '5',
    title: 'Restaurante',
    time: '18 Jan, 20:00',
    amount: '-R$ 156,00',
    type: 'expense',
    icon: 'ri-restaurant-line',
    accent: 'warning',
  },
]

export const categories: Category[] = [
  {
    id: 'shopping',
    title: 'Compras',
    value: 'R$ 1.234',
    icon: 'ri-shopping-bag-3-line',
    accent: 'danger',
  },
  {
    id: 'food',
    title: 'Alimentação',
    value: 'R$ 890',
    icon: 'ri-restaurant-line',
    accent: 'secondary',
  },
  {
    id: 'transport',
    title: 'Transporte',
    value: 'R$ 456',
    icon: 'ri-car-line',
    accent: 'primary',
  },
  {
    id: 'housing',
    title: 'Moradia',
    value: 'R$ 2.100',
    icon: 'ri-home-4-line',
    accent: 'primary',
  },
  {
    id: 'leisure',
    title: 'Lazer',
    value: 'R$ 567',
    icon: 'ri-movie-line',
    accent: 'warning',
  },
]