import { create } from 'zustand'

export type User = {
  name: string
  email: string
  avatar: string
}

const MOCK_USER: User = {
  name: 'Testerson',
  email: 'testerson@email.com',
  avatar: 'https://ui-avatars.com/api/?name=Testerson&background=6366F1&color=fff&bold=true',
}

type AuthState = {
  user: User | null
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: localStorage.getItem('auth') === 'true' ? MOCK_USER : null,
  isAuthenticated: localStorage.getItem('auth') === 'true',

  login: () => {
    localStorage.setItem('auth', 'true')
    set({ user: MOCK_USER, isAuthenticated: true })
  },

  logout: () => {
    localStorage.removeItem('auth')
    set({ user: null, isAuthenticated: false })
  },
}))
