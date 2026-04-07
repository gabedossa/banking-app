import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PrivateRoute from '../private-route'
import { useAuthStore } from '@/features/auth/store/auth-store'

const MOCK_USER = {
  name: 'Testerson',
  email: 'testerson@teste.com',
  avatar: '',
}

describe('PrivateRoute', () => {
  beforeEach(() => {
    localStorage.clear()
    useAuthStore.setState({ user: null, isAuthenticated: false })
  })

  it('deve renderizar o conteúdo quando o usuário está autenticado', () => {
    useAuthStore.setState({ isAuthenticated: true, user: MOCK_USER })

    render(
      <MemoryRouter>
        <PrivateRoute>
          <p>Conteúdo protegido</p>
        </PrivateRoute>
      </MemoryRouter>
    )

    expect(screen.getByText('Conteúdo protegido')).toBeInTheDocument()
  })

  it('deve redirecionar para "/" quando o usuário não está autenticado', () => {
    useAuthStore.setState({ isAuthenticated: false, user: null })

    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <PrivateRoute>
          <p>Conteúdo protegido</p>
        </PrivateRoute>
      </MemoryRouter>
    )

    expect(screen.queryByText('Conteúdo protegido')).not.toBeInTheDocument()
  })
})
