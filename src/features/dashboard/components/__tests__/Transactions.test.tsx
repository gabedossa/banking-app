import { render, screen } from '@testing-library/react'
import { Transactions } from '../Transactions'
import type { Transaction } from '@/data/dashboard'

const mockTransactions: Transaction[] = [
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
]

describe('Transactions', () => {
  it('deve renderizar o título da seção', () => {
    render(<Transactions items={mockTransactions} />)
    expect(screen.getByText('Transações Recentes')).toBeInTheDocument()
  })

  it('deve renderizar todas as transações', () => {
    render(<Transactions items={mockTransactions} />)
    expect(screen.getByText('Supermercado')).toBeInTheDocument()
    expect(screen.getByText('Salário')).toBeInTheDocument()
  })

  it('deve renderizar os valores das transações', () => {
    render(<Transactions items={mockTransactions} />)
    expect(screen.getByText('-R$ 234,50')).toBeInTheDocument()
    expect(screen.getByText('+R$ 5.000,00')).toBeInTheDocument()
  })

  it('deve aplicar cor vermelha para despesas', () => {
    render(<Transactions items={[mockTransactions[0]]} />)
    const amount = screen.getByText('-R$ 234,50')
    expect(amount).toHaveClass('text-red-500')
  })

  it('deve aplicar cor verde para receitas', () => {
    render(<Transactions items={[mockTransactions[1]]} />)
    const amount = screen.getByText('+R$ 5.000,00')
    expect(amount).toHaveClass('text-brand-secondary')
  })

  it('deve renderizar os horários das transações', () => {
    render(<Transactions items={mockTransactions} />)
    expect(screen.getByText('Hoje, 14:30')).toBeInTheDocument()
    expect(screen.getByText('Ontem, 09:00')).toBeInTheDocument()
  })

  it('deve exibir lista vazia sem erros', () => {
    render(<Transactions items={[]} />)
    expect(screen.getByText('Transações Recentes')).toBeInTheDocument()
  })

  it('deve exibir o botão "Ver Todas"', () => {
    render(<Transactions items={mockTransactions} />)
    expect(screen.getByRole('button', { name: /ver todas/i })).toBeInTheDocument()
  })
})
