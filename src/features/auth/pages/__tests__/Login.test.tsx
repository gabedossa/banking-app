import { jest } from '@jest/globals'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from '../Login'
import { authService } from '@/features/auth/services/auth-service'
import { useAuthStore } from '@/features/auth/store/auth-store'
import { ThemeProvider } from '@/context/ThemeContext'

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useNavigate: () => mockNavigate,
}))

const mockNavigate = jest.fn()

const MOCK_RESPONSE = {
  token: 'fake-token-123',
  user: { name: 'Testerson', email: 'testerson@teste.com', avatar: '' },
}

function renderLogin() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  })

  useAuthStore.setState({ isAuthenticated: false, user: null })

  return render(
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

describe('Login', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('renderização', () => {
    it('deve exibir o campo de e-mail', () => {
      renderLogin()
      expect(screen.getByPlaceholderText('seu@email.com')).toBeInTheDocument()
    })

    it('deve exibir o campo de senha', () => {
      renderLogin()
      expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument()
    })

    it('deve exibir o botão de entrar', () => {
      renderLogin()
      expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
    })

    it('deve exibir o título "Bem-vindo de volta!"', () => {
      renderLogin()
      expect(screen.getByText('Bem-vindo de volta!')).toBeInTheDocument()
    })

    it('deve exibir o link "Esqueceu a senha?"', () => {
      renderLogin()
      expect(screen.getByRole('button', { name: /esqueceu a senha/i })).toBeInTheDocument()
    })
  })

  describe('campo de senha', () => {
    it('deve ocultar a senha por padrão', () => {
      renderLogin()
      expect(screen.getByPlaceholderText('••••••••')).toHaveAttribute('type', 'password')
    })

    it('deve exibir a senha ao clicar no botão de visibilidade', async () => {
      renderLogin()
      await userEvent.click(screen.getByLabelText('Mostrar senha'))
      expect(screen.getByPlaceholderText('••••••••')).toHaveAttribute('type', 'text')
    })

    it('deve voltar a ocultar ao clicar novamente', async () => {
      renderLogin()
      await userEvent.click(screen.getByLabelText('Mostrar senha'))
      await userEvent.click(screen.getByLabelText('Ocultar senha'))
      expect(screen.getByPlaceholderText('••••••••')).toHaveAttribute('type', 'password')
    })
  })

  describe('submissão com sucesso', () => {
    it('deve chamar authService.login com as credenciais preenchidas', async () => {
      jest.spyOn(authService, 'login').mockResolvedValue(MOCK_RESPONSE)
      renderLogin()

      await userEvent.type(screen.getByPlaceholderText('seu@email.com'), 'testerson@teste.com')
      await userEvent.type(screen.getByPlaceholderText('••••••••'), 'adm123')
      fireEvent.submit(screen.getByRole('button', { name: /entrar/i }))

      await waitFor(() => {
        expect(authService.login).toHaveBeenCalledWith(
          { email: 'testerson@teste.com', password: 'adm123' },
          expect.anything(),
        )
      })
    })

    it('deve autenticar o usuário no store após login bem-sucedido', async () => {
      jest.spyOn(authService, 'login').mockResolvedValue(MOCK_RESPONSE)
      renderLogin()

      await userEvent.type(screen.getByPlaceholderText('seu@email.com'), 'testerson@teste.com')
      await userEvent.type(screen.getByPlaceholderText('••••••••'), 'adm123')
      fireEvent.submit(screen.getByRole('button', { name: /entrar/i }))

      await waitFor(() => {
        expect(useAuthStore.getState().isAuthenticated).toBe(true)
      })
    })

    it('deve salvar o token no localStorage após login', async () => {
      jest.spyOn(authService, 'login').mockResolvedValue(MOCK_RESPONSE)
      renderLogin()

      await userEvent.type(screen.getByPlaceholderText('seu@email.com'), 'testerson@teste.com')
      await userEvent.type(screen.getByPlaceholderText('••••••••'), 'adm123')
      fireEvent.submit(screen.getByRole('button', { name: /entrar/i }))

      await waitFor(() => {
        expect(localStorage.getItem('token')).toBe('fake-token-123')
      })
    })
  })

  describe('submissão com erro', () => {
    it('deve exibir mensagem de erro com credenciais inválidas', async () => {
      jest.spyOn(authService, 'login').mockRejectedValue(new Error('Credenciais inválidas'))
      renderLogin()

      await userEvent.type(screen.getByPlaceholderText('seu@email.com'), 'errado@email.com')
      await userEvent.type(screen.getByPlaceholderText('••••••••'), 'senhaerrada')
      fireEvent.submit(screen.getByRole('button', { name: /entrar/i }))

      await waitFor(() => {
        expect(screen.getByText('E-mail ou senha inválidos.')).toBeInTheDocument()
      })
    })

    it('não deve redirecionar quando o login falha', async () => {
      jest.spyOn(authService, 'login').mockRejectedValue(new Error('Erro'))
      renderLogin()

      await userEvent.type(screen.getByPlaceholderText('seu@email.com'), 'x@x.com')
      await userEvent.type(screen.getByPlaceholderText('••••••••'), '123')
      fireEvent.submit(screen.getByRole('button', { name: /entrar/i }))

      await waitFor(() => {
        expect(mockNavigate).not.toHaveBeenCalled()
      })
    })
  })
})
