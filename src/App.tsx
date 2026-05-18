import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Clases from './pages/Clases'
import Membresias from './pages/Membresias'
import Contacto from './pages/Contacto'
import Header from './components/Header'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen kr-bg text-primary">
        <ScrollToTop />
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clases" element={<Clases />} />
            <Route path="/membresias" element={<Membresias />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
