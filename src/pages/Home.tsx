import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { classes, trainers, stats } from '../data/gimnasio'
import ClayButton from '../components/ClayButton'
import GlassCard from '../components/GlassCard'

/* ═══════════════════════════════════════
   SVG ICONS — Claymorphic class icons
   ═══════════════════════════════════════ */

function YogaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="10" r="5" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 24c0-3 2-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M15 42l4-10 5-3 5 3 4 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 17v8l-4 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function HIITIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M8 36l12-20 6 8 8-14 6 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="36" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M14 40l2-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function WeightsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="6" y="18" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="34" y="18" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="16" y="20" width="16" height="8" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M20 16v-4m8 4v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function PilatesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="12" y="6" width="24" height="10" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <rect x="6" y="28" width="36" height="14" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 16v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 35h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function BoxingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M34 24a10 10 0 01-20 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 16l6 4m30-4l-6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function SpinningIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 3" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <path d="M38 12l-8 8m-12 12l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const classIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  yoga: YogaIcon,
  hiit: HIITIcon,
  weights: WeightsIcon,
  pilates: PilatesIcon,
  boxing: BoxingIcon,
  spinning: SpinningIcon,
}

/* ═══════════════════════════════════════
   STAGGER ON SCROLL — Intersection Observer
   ═══════════════════════════════════════ */

function useStagger(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const children = el.children
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).style.animationPlayState = 'running'
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    Array.from(children).forEach((child) => {
      ;(child as HTMLElement).style.animationPlayState = 'paused'
      obs.observe(child)
    })
    return () => obs.disconnect()
  }, [ref])
}

/* ═══════════════════════════════════════
   HERO GLOW TRACKING
   ═══════════════════════════════════════ */

function useMouseGlow(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--mouse-x', `${x}%`)
      el.style.setProperty('--mouse-y', `${y}%`)
    }
    el.addEventListener('mousemove', handler)
    return () => el.removeEventListener('mousemove', handler)
  }, [ref])
}

/* ═══════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════ */

export default function Home() {
  const navigate = useNavigate()
  const heroRef = useRef<HTMLDivElement>(null)
  const bentoStaggerRef = useRef<HTMLDivElement>(null)
  const [heroLoaded, setHeroLoaded] = useState(false)

  useStagger(bentoStaggerRef)
  useMouseGlow(heroRef)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="overflow-x-hidden">
      {/* ═══════════════════════════════════════
          SECTION 1 — HERO FULLSCREEN
          ═══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden glow-on-hover"
        style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
            alt=""
            className={`w-full h-full object-cover transition-opacity duration-1000 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setHeroLoaded(true)}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          {/* Subtle radial gradient for glow */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 95, 31, 0.12), transparent 50%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1
            className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-4 animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            KINETIC
            <br className="md:hidden" />
            <span className="text-kr-orange"> REST</span>
          </h1>
          <p
            className="text-lg md:text-xl text-white/70 font-light tracking-wide mb-10 animate-fade-up"
            style={{ animationDelay: '500ms' }}
          >
            Donde el movimiento encuentra su equilibrio.
          </p>
          <ClayButton
            size="lg"
            glowOnHover
            onClick={() => scrollTo('clases')}
            className="animate-fade-up"
            style={{ animationDelay: '800ms' } as React.CSSProperties}
          >
            COMENZAR MI VIAJE
          </ClayButton>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg width="24" height="36" viewBox="0 0 24 36" fill="none" className="text-white/40">
            <rect x="1" y="1" width="22" height="34" rx="11" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="3" fill="currentColor" className="animate-pulse" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — BENTO GRID
          ═══════════════════════════════════════ */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Explora{' '}
            <span className="text-kr-orange">nuestro</span> estudio
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Seis disciplinas, un solo propósito: transformar tu cuerpo y mente.
          </p>
        </div>

        <div
          ref={bentoStaggerRef}
          className="stagger bento-grid"
        >
          {/* HIIT — 2×2 dominant (8 cols × 2 rows) */}
          <BentoCell
            className="col-span-12 md:col-span-8 row-span-2 h-64 md:h-full min-h-[280px]"
            image="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80"
            name="HIIT Inferno"
            category="Alta Intensidad"
          />

          {/* YOGA — 1×1 (4 cols top-right) */}
          <BentoCell
            className="col-span-6 md:col-span-4 min-h-[240px]"
            image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
            name="Power Yoga"
            category="Flexibilidad"
          />

          {/* WEIGHTS — 1×1 (2 cols) */}
          <BentoCell
            className="col-span-6 md:col-span-2 min-h-[240px]"
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
            name="Strength Lab"
            category="Fuerza"
          />

          {/* PILATES — 1×2 vertical (2 cols × 2 rows) */}
          <BentoCell
            className="col-span-6 md:col-span-2 row-span-2 min-h-[240px]"
            image="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
            name="Reformer Pilates"
            category="Control"
          />

          {/* BOXING — 1×1 */}
          <BentoCell
            className="col-span-6 md:col-span-2 min-h-[240px]"
            image="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80"
            name="Box & Burn"
            category="Potencia"
          />

          {/* SPINNING — 1×1 (6 cols) */}
          <BentoCell
            className="col-span-12 md:col-span-6 min-h-[240px]"
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
            name="Spin Journey"
            category="Resistencia"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — ESTADÍSTICAS
          ═══════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-8 bg-kr-surface-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center stagger" ref={bentoStaggerRef}>
                <div className="animate-fade-up" style={{ animationDelay: `${i * 120}ms`, animationPlayState: 'paused' }}>
                  <p className="text-5xl md:text-6xl font-extrabold text-kr-orange tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-secondary text-sm md:text-base mt-2 font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4 — CLASES DESTACADAS (id="clases")
          ═══════════════════════════════════════ */}
      <section id="clases" className="py-24 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-48">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Clases{' '}
            <span className="text-kr-orange">destacadas</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Encuentra la disciplina que resuena contigo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, i) => {
            const Icon = classIcons[cls.category]
            return (
              <GlassCard
                key={cls.id}
                className="flex flex-col stagger"
                style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}
              >
                {/* Claymorphic Icon */}
                <div className="w-16 h-16 clay clay-icon rounded-2xl flex items-center justify-center mb-5 text-kr-orange">
                  {Icon && <Icon className="w-8 h-8" />}
                </div>

                <h3 className="text-xl font-bold mb-1">{cls.name}</h3>
                <p className="text-sm text-kr-orange font-semibold uppercase tracking-wide mb-3">
                  {cls.duration} · {cls.intensity === 'high' ? '🔥 Alta' : cls.intensity === 'medium' ? '⚡ Media' : '🧘 Baja'} intensidad
                </p>
                <p className="text-secondary text-sm leading-relaxed flex-1 mb-4">
                  {cls.description}
                </p>

                {/* Schedule chips */}
                <div className="flex flex-wrap gap-2">
                  {cls.schedule.slice(0, 3).map((s, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded-full bg-kr-surface-container text-kr-on-surface-variant font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            )
          })}
        </div>

        {/* View Full Schedule Button */}
        <div className="text-center mt-12">
          <ClayButton variant="secondary" size="lg" onClick={() => scrollTo('trainers')}>
            VER HORARIO COMPLETO
          </ClayButton>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5 — TRAINERS
          ═══════════════════════════════════════ */}
      <section id="trainers" className="py-24 px-4 md:px-8 bg-kr-surface-container scroll-mt-48">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Conoce a{' '}
              <span className="text-kr-orange">nuestro equipo</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Profesionales apasionados por guiarte en cada paso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, i) => (
              <div
                key={trainer.id}
                className="text-center animate-fade-up stagger"
                style={{ animationDelay: `${i * 120}ms` } as React.CSSProperties}
              >
                <div className="relative mx-auto mb-5 w-28 h-28 md:w-32 md:h-32 group">
                  <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-kr-orange/20 ring-offset-2 ring-offset-kr-surface-container transition-all duration-500 group-hover:ring-kr-orange group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-kr-orange/30">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Decorative clay circle */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 clay clay-icon rounded-full flex items-center justify-center">
                    <span className="text-kr-orange text-xs">★</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold">{trainer.name}</h3>
                <p className="text-sm text-kr-orange font-semibold mb-3">{trainer.role}</p>
                <p className="text-xs text-secondary leading-relaxed mb-4 px-2">
                  {trainer.bio}
                </p>

                {/* Specialties as chips */}
                <div className="flex flex-wrap justify-center gap-2">
                  {trainer.specialties.map((spec, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{
                        backgroundColor: 'rgba(209, 255, 0, 0.2)',
                        color: 'var(--color-kr-on-tertiary-container, #5e7400)',
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 6 — CTA MEMBRESÍA
          ═══════════════════════════════════════ */}
      <section className="relative py-28 px-4 md:px-8 overflow-hidden">
        {/* Background with kr-orange */}
        <div className="absolute inset-0 bg-kr-orange" />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Listo para{' '}
            <span className="text-kr-lime">transformarte</span>?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Únete a la comunidad que está redefiniendo el fitness. Tu primer paso empieza aquí.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ClayButton
              variant="secondary"
              size="lg"
              glowOnHover
              onClick={() => navigate('/membresias')}
            >
              VER PLANES
            </ClayButton>
            <ClayButton
              variant="ghost"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10"
              onClick={() => window.open('https://wa.me/18091234567?text=Hola%2C%20quiero%20hablar%20con%20un%20asesor%20de%20Kinetic%20Rest', '_blank')}
            >
              HABLAR CON ASESOR
            </ClayButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 text-center text-xs text-secondary border-t border-kr-outline-variant/30 bg-kr-surface">
        <p className="font-semibold text-sm mb-1">
          <span className="text-kr-orange">KINETIC</span> REST
        </p>
        <p>© 2026 Kinetic Rest. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

/* ═══════════════════════════════════════
   BENTO CELL COMPONENT
   ═══════════════════════════════════════ */

function BentoCell({
  className = '',
  image,
  name,
  category,
}: {
  className?: string
  image: string
  name: string
  category: string
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`relative bento-cell overflow-hidden group cursor-pointer ${className}`}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
      />

      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="glass rounded-xl px-4 py-3 backdrop-blur-md">
          <p className="text-xs font-semibold uppercase tracking-widest text-kr-lime mb-0.5">
            {category}
          </p>
          <h3 className="text-white font-bold text-lg leading-tight">{name}</h3>
        </div>
      </div>
    </div>
  )
}
