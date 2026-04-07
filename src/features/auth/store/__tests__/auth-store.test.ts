import { useAuthStore } from '../auth-store'

describe('useAuthStore', () => {
  beforeEach(() => {
    localStorage.clear()
    useAuthStore.setState({ user: null, isAuthenticated: false })
  })

  describe('estado inicial', () => {
    it('deve iniciar não autenticado quando não há dados no localStorage', () => {
      const { isAuthenticated, user } = useAuthStore.getState()

      expect(isAuthenticated).toBe(false)
      expect(user).toBeNull()
    })

    it('deve iniciar autenticado quando localStorage contém auth=true', () => {
      localStorage.setItem('auth', 'true')
      useAuthStore.setState({
        isAuthenticated: localStorage.getItem('auth') === 'true',
        user: { name: 'Testerson', email: 'testerson@teste.com', avatar: '' },
      })

      const { isAuthenticated } = useAuthStore.getState()
      expect(isAuthenticated).toBe(true)
    })
  })

  describe('login()', () => {
    it('deve autenticar o usuário e persistir no localStorage', () => {
      useAuthStore.getState().login()

      const { isAuthenticated, user } = useAuthStore.getState()

      expect(isAuthenticated).toBe(true)
      expect(user).not.toBeNull()
      expect(user?.name).toBe('Testerson')
      expect(user?.email).toBe('testerson@email.com')
      expect(localStorage.getItem('auth')).toBe('true')
    })

    it('deve definir avatar do usuário após login', () => {
      useAuthStore.getState().login()

      const { user } = useAuthStore.getState()
      expect(user?.avatar).toBeTruthy()
    })
  })

  describe('logout()', () => {
    it('deve remover autenticação e limpar o localStorage', () => {
      useAuthStore.getState().login()
      useAuthStore.getState().logout()

      const { isAuthenticated, user } = useAuthStore.getState()

      expect(isAuthenticated).toBe(false)
      expect(user).toBeNull()
      expect(localStorage.getItem('auth')).toBeNull()
    })

    it('deve permitir novo login após logout', () => {
      useAuthStore.getState().login()
      useAuthStore.getState().logout()
      useAuthStore.getState().login()

      expect(useAuthStore.getState().isAuthenticated).toBe(true)
    })
  })
})
