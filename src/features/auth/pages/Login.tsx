import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/store/auth-store'
import { useTheme } from '@/context/ThemeContext'

const CREDENTIALS = {
  email: 'testerson@teste.com',
  password: 'adm123',
}

export default function Login() {
  const { theme, toggleTheme } = useTheme()
  const { login } = useAuthStore()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      if (email === CREDENTIALS.email && password === CREDENTIALS.password) {
        login()
        navigate('/dashboard')
      } else {
        setError('E-mail ou senha inválidos.')
        setLoading(false)
      }
    }, 800)
  }

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Alternar tema"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-white shadow-soft transition duration-300 hover:-translate-y-0.5"
      >
        <i className={`${theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'} text-lg`} />
      </button>

      {/* Painel esquerdo — visível apenas em telas grandes */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-primary text-white px-8">
        <div className="text-center max-w-md">
          <i className="ri-bank-line text-6xl mb-6 opacity-90" />
          <h1 className="text-4xl xl:text-5xl font-bold mb-4">BancoDigital</h1>
          <p className="text-lg xl:text-xl opacity-75">Sua jornada financeira começa aqui</p>
        </div>
      </div>

      {/* Painel direito — formulário */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 py-8">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-card p-8 sm:p-10">

          <div className="lg:hidden text-center mb-8">
            <i className="ri-bank-line text-4xl text-brand-primary" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">BancoDigital</h1>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Bem-vindo de volta!</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Entre com suas credenciais</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  <i className={showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400 cursor-pointer">
                <input type="checkbox" className="rounded" />
                Lembrar de mim
              </label>
              <button type="button" className="text-brand-primary hover:underline font-medium">
                Esqueceu a senha?
              </button>
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white rounded-2xl py-3 font-semibold text-sm shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-indigo-500"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
