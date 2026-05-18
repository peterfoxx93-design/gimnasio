import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Clases from './pages/Clases'
import Membresias from './pages/Membresias'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen kr-bg text-primary">
        <main>
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
