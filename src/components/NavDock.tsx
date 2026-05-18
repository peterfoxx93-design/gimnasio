import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M6.34 17.66l-1.41 1.41" />
      <path d="M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  )
}

function DumbbellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 6.5 17.5 17.5" />
      <path d="m3.5 9 3-3" />
      <path d="m18 3.5 3 3" />
      <path d="M9 20.5 6 17.5" />
      <path d="M21 15l-3 3" />
      <path d="M15 21l-3-3" />
      <rect x="5" y="5" width="14" height="14" rx="2" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

const navItems = [
  { to: '/', label: 'Inicio', icon: GridIcon },
  { to: '/clases', label: 'Clases', icon: DumbbellIcon },
  { to: '/membresias', label: 'Membresías', icon: TagIcon },
  { to: '/contacto', label: 'Contacto', icon: ChatIcon },
]

export default function NavDock() {
  const location = useLocation()
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('kr-theme') === 'dark'
  })

  useEffect(() => {
    const theme = dark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('kr-theme', theme)
  }, [dark])

  const toggleTheme = () => setDark(prev => !prev)

  return (
    <nav className="nav-dock">
      {navItems.map(({ to, label, icon: Icon }) => {
        const isActive = location.pathname === to
        return (
          <Link
            key={to}
            to={to}
            className="relative flex flex-col items-center gap-1 py-1 px-3 rounded-2xl transition-colors duration-200"
          >
            {isActive && (
              <span className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-kr-lime" />
            )}
            <div className={`clay-icon rounded-xl p-2 transition-all duration-200 ${isActive ? 'text-kr-orange' : 'text-kr-on-surface-variant'}`}>
              <Icon />
            </div>
            <span className={`text-[10px] font-medium leading-none ${isActive ? 'text-kr-orange' : 'text-kr-on-surface-variant'}`}>
              {label}
            </span>
          </Link>
        )
      })}
      <button
        onClick={toggleTheme}
        className="relative flex flex-col items-center gap-1 py-1 px-3 rounded-2xl transition-colors duration-200"
        aria-label="Toggle theme"
      >
        <div className="clay-icon rounded-xl p-2 transition-all duration-200 text-kr-on-surface-variant">
          {dark ? <SunIcon /> : <MoonIcon />}
        </div>
        <span className="text-[10px] font-medium leading-none text-kr-on-surface-variant">
          Tema
        </span>
      </button>
    </nav>
  )
}
