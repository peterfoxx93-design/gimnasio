import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/clases', label: 'Clases' },
  { to: '/membresias', label: 'Membresías' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const location = useLocation()
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('kr-theme') !== 'light'
  })
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const theme = dark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('kr-theme', theme)
  }, [dark])

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const toggleTheme = () => setDark(prev => !prev)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav className="glass rounded-kr-xl px-4 md:px-6 py-2 flex items-center justify-between backdrop-blur-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="text-white bg-kr-orange rounded-kr px-2 py-0.5 text-sm">KR</span>
            <span className="hidden sm:inline text-[var(--text-primary)]">
              Kinetic<span className="text-kr-orange"> Rest</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label }) => {
              const isActive = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-1.5 rounded-kr-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-kr-orange text-white shadow-lg shadow-kr-orange/25'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* Right — Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="clay-icon rounded-xl p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Cambiar tema"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden clay-icon rounded-xl p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Abrir menú"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 glass rounded-kr-xl overflow-hidden backdrop-blur-xl animate-fade-in">
            {navItems.map(({ to, label }) => {
              const isActive = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`block px-6 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-kr-orange bg-kr-orange/10'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}
