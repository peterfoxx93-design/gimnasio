import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { classes } from '../data/gimnasio'
import type { GymClass } from '../data/gimnasio'
import ChatBubble from '../components/ChatBubble'

const categories = ['Todas', 'Yoga', 'HIIT', 'Weights', 'Pilates', 'Boxing', 'Spinning'] as const

const intensityColors: Record<GymClass['intensity'], string> = {
  low: 'bg-green-500/20 text-green-400 border border-green-500/40',
  medium: 'bg-orange-500/20 text-orange-400 border border-orange-500/40',
  high: 'bg-red-500/20 text-red-400 border border-red-500/40',
}

const intensityLabels: Record<GymClass['intensity'], string> = {
  low: 'Baja',
  medium: 'Media',
  high: 'Alta',
}

const categoryMap: Record<string, GymClass['category']> = {
  Yoga: 'yoga',
  HIIT: 'hiit',
  Weights: 'weights',
  Pilates: 'pilates',
  Boxing: 'boxing',
  Spinning: 'spinning',
}

export default function Clases() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState<string>('Todas')

  const filteredClasses =
    activeCategory === 'Todas'
      ? classes
      : classes.filter((c) => c.category === categoryMap[activeCategory])

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[220px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight animate-fade-up">
            Nuestras Clases
          </h1>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-0 z-20 bg-[var(--bg-primary)]/85 backdrop-blur-xl border-b border-[var(--glass-border)]">
        <div className="max-w-5xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-kr-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-kr-orange text-white shadow-lg shadow-kr-orange/30'
                  : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {filteredClasses.map((cls) => (
            <article
              key={cls.id}
              className="relative group rounded-kr-xl overflow-hidden hover-lift animate-scale-in"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white mb-1">{cls.name}</h3>

                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs text-white/70 bg-white/10 px-2 py-0.5 rounded-kr-full">
                    ⏱ {cls.duration}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-kr-full font-medium ${intensityColors[cls.intensity]}`}
                  >
                    {intensityLabels[cls.intensity]}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {cls.schedule.map((s, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-white/60 bg-white/10 px-1.5 py-0.5 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/contacto')}
                  className="text-xs font-semibold uppercase tracking-wider bg-kr-orange text-white px-3 py-1.5 rounded-kr-full hover:bg-kr-orange/90 transition-colors"
                >
                  Reservar
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <p className="text-center text-[var(--text-secondary)] py-16">
            No hay clases en esta categoría.
          </p>
        )}
      </section>

      {/* Nav removed — using Header */}
      <ChatBubble />
    </div>
  )
}
