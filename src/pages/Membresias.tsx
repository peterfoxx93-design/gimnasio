import { memberships, facilities } from '../data/gimnasio'
import NavDock from '../components/NavDock'
import ChatBubble from '../components/ChatBubble'

const facilityIcons: Record<string, string> = {
  Cardio: '🏃',
  Pesas: '💪',
  Yoga: '🧘',
  Boxeo: '🥊',
  Sauna: '🧖',
  CrossFit: '🔥',
}

export default function Membresias() {
  return (
    <div className="min-h-screen pb-28">
      {/* Hero */}
      <section className="relative h-[300px] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-4 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Membresías
          </h1>
          <p className="text-lg text-white/80 max-w-lg mx-auto">
            Elige el plan que mejor se adapte a tu estilo de vida fitness.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-5xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
          {memberships.map((m) => (
            <article
              key={m.id}
              className={`relative rounded-kr-xl p-6 flex flex-col ${
                m.highlighted
                  ? 'bg-gradient-to-b from-kr-orange/10 to-transparent border-2 border-kr-orange shadow-[0_0_24px_-4px_rgba(255,95,31,0.3)] scale-[1.02] md:scale-105'
                  : 'glass'
              }`}
            >
              {m.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-kr-orange text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-kr-full">
                  Más Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-kr-on-surface mb-1">{m.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-kr-orange">${m.price}</span>
                <span className="text-sm text-kr-on-surface-variant">{m.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {m.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-kr-on-surface-variant">
                    <span className="text-kr-orange mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 rounded-kr-full text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                  m.highlighted
                    ? 'bg-kr-orange text-white shadow-lg shadow-kr-orange/30 hover:bg-kr-orange/90'
                    : 'glass text-kr-on-surface hover:bg-kr-orange hover:text-white'
                }`}
              >
                Elegir Plan
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-2xl font-bold text-kr-on-surface text-center mb-8">
          Nuestras Instalaciones
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
          {facilities.map((f) => {
            const iconKey = Object.keys(facilityIcons).find((k) =>
              f.name.toLowerCase().includes(k.toLowerCase())
            )
            const icon = iconKey ? facilityIcons[iconKey] : '🏋️'
            return (
              <div
                key={f.name}
                className="glass rounded-kr-xl p-5 flex items-center gap-4 hover-lift"
              >
                <div className="w-12 h-12 shrink-0 rounded-kr-lg clay clay-icon flex items-center justify-center text-2xl">
                  {icon}
                </div>
                <div>
                  <h3 className="font-semibold text-kr-on-surface text-sm">{f.name}</h3>
                  <p className="text-xs text-kr-on-surface-variant mt-0.5">{f.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <NavDock />
      <ChatBubble />
    </div>
  )
}
