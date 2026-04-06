import { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';

type LoginPageProps = {
  onLoginSuccess?: () => void;
};

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      if (email === 'testerson' && password === 'adm123') {
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        setError('Login ou senha inválidos!');
      }
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-950 transition-colors duration-300 items-center justify-center">
      {/* Botão Tema */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 w-12 h-12 gradient-card rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all z-50"
        aria-label="Alternar tema"
      >
        <i className={`ri-${theme === 'dark' ? 'sun' : 'moon'}-line text-white text-xl`} />
      </button>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">BancoDigital</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-4">Acesse sua conta</p>
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Usuário</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Digite seu usuário"
            autoFocus
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </div>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="btn-primary text-white px-6 py-2 rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}
