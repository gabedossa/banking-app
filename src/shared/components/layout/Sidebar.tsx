import { useState } from 'react'
import { navigationItems } from '@/data/dashboard'

type SidebarProps = {
  name: string
  email: string
  avatar: string
}

export function Sidebar({ name, email, avatar }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('dashboard')

  function handleSelect(itemId: string) {
    setActiveItem(itemId)
    setIsOpen(false)
  }

  return (
    <>
      {/* Botão hamburguer — mobile */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menu"
        className="fixed left-4 top-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-soft md:hidden"
      >
        <i className="ri-menu-line text-xl" />
      </button>

      {/* Overlay — mobile */}
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-950/50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Fechar menu"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex w-72 flex-col
          border-r border-slate-200/70 bg-white/95 px-5 py-6
          shadow-soft backdrop-blur
          dark:border-slate-800 dark:bg-slate-900/95
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-soft">
              <i className="ri-bank-line text-xl" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white">BancoDigital</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Painel financeiro</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
          >
            <i className="ri-close-line text-xl" />
          </button>
        </div>

        {/* Navegação */}
        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = item.id === activeItem

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`
                  flex w-full items-center gap-3 rounded-2xl border-l-4 px-4 py-3 text-left
                  transition duration-200
                  ${isActive
                    ? 'border-brand-primary bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/15'
                    : 'border-transparent text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }
                `}
              >
                <i className={`${item.icon} text-lg`} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Perfil do usuário */}
        <div className="mt-auto rounded-3xl border border-brand-primary/15 bg-brand-primary/5 p-4 dark:border-brand-primary/20 dark:bg-brand-primary/10">
          <div className="flex items-center gap-3">
            <img src={avatar} alt={name} className="h-11 w-11 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{name}</p>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">{email}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
