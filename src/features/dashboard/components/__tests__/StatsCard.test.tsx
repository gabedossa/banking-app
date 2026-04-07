import { render, screen } from '@testing-library/react'
import { StatsCard } from '../StatsCard'
import type { Stat } from '@/data/dashboard'

const statPositive: Stat = {
  id: 'balance',
  title: 'Saldo Total',
  value: 'R$ 45.230,00',
  trend: '+12.5%',
  trendType: 'positive',
  icon: 'ri-wallet-3-fill',
  accent: 'primary',
}

const statNegative: Stat = {
  id: 'outcome',
  title: 'Saídas',
  value: 'R$ 8.320,00',
  trend: '-3.1%',
  trendType: 'negative',
  icon: 'ri-arrow-up-circle-fill',
  accent: 'danger',
}

describe('StatsCard', () => {
  it('deve renderizar o título do card', () => {
    render(<StatsCard stat={statPositive} />)
    expect(screen.getByText('Saldo Total')).toBeInTheDocument()
  })

  it('deve renderizar o valor do card', () => {
    render(<StatsCard stat={statPositive} />)
    expect(screen.getByText('R$ 45.230,00')).toBeInTheDocument()
  })

  it('deve renderizar a tendência positiva', () => {
    render(<StatsCard stat={statPositive} />)
    expect(screen.getByText('+12.5%')).toBeInTheDocument()
  })

  it('deve renderizar a tendência negativa', () => {
    render(<StatsCard stat={statNegative} />)
    expect(screen.getByText('-3.1%')).toBeInTheDocument()
  })

  it('deve aplicar classe de cor verde para tendência positiva', () => {
    render(<StatsCard stat={statPositive} />)
    const trend = screen.getByText('+12.5%')
    expect(trend).toHaveClass('text-brand-secondary')
  })

  it('deve aplicar classe de cor vermelha para tendência negativa', () => {
    render(<StatsCard stat={statNegative} />)
    const trend = screen.getByText('-3.1%')
    expect(trend).toHaveClass('text-red-500')
  })

  it('deve renderizar o ícone corretamente', () => {
    render(<StatsCard stat={statPositive} />)
    const icon = document.querySelector('.ri-wallet-3-fill')
    expect(icon).toBeInTheDocument()
  })

  it('deve renderizar como elemento article', () => {
    render(<StatsCard stat={statPositive} />)
    expect(screen.getByRole('article')).toBeInTheDocument()
  })
})
