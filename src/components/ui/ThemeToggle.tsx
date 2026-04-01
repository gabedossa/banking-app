import { useTheme } from '../../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
    >
      <i className={`${theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'} text-lg`} />
    </button>
  )
}