import { api } from '@/lib/api'

export type LoginPayload = {
  email: string
  password: string
}

export type LoginResponse = {
  token: string
  user: {
    name: string
    email: string
    avatar: string
  }
}

const MOCK_CREDENTIALS = {
  email: 'testerson@teste.com',
  password: 'adm123',
}

const MOCK_RESPONSE: LoginResponse = {
  token: 'mock-token-testerson',
  user: {
    name: 'Testerson',
    email: 'testerson@teste.com',
    avatar: 'https://ui-avatars.com/api/?name=Testerson&background=6366F1&color=fff&bold=true',
  },
}

export const authService = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    // Quando houver backend real, remova este bloco e descomente a linha do api.post
    if (payload.email === MOCK_CREDENTIALS.email && payload.password === MOCK_CREDENTIALS.password) {
      return new Promise((resolve) => setTimeout(() => resolve(MOCK_RESPONSE), 800))
    }
    throw new Error('Credenciais inválidas')

    // return api.post<LoginResponse>('/auth/login', payload).then((res) => res.data)
  },
}

export { api }
