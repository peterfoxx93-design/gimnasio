import NavDock from '../components/NavDock'
import ChatBubble from '../components/ChatBubble'

export default function Contacto() {
  return (
    <div className="min-h-screen pb-28">
      {/* Hero */}
      <section className="relative h-[180px] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-4 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contacto</h1>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — Form */}
          <div className="glass rounded-kr-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-kr-on-surface mb-6">Envíanos un mensaje</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('¡Mensaje enviado con éxito!')
              }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-kr-on-surface-variant mb-1.5">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2.5 rounded-kr bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-kr-on-surface placeholder:text-kr-on-surface-variant/50 focus:outline-none focus:border-kr-orange focus:ring-1 focus:ring-kr-orange/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-kr-on-surface-variant mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  className="w-full px-4 py-2.5 rounded-kr bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-kr-on-surface placeholder:text-kr-on-surface-variant/50 focus:outline-none focus:border-kr-orange focus:ring-1 focus:ring-kr-orange/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-kr-on-surface-variant mb-1.5">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+54 11 1234-5678"
                  className="w-full px-4 py-2.5 rounded-kr bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-kr-on-surface placeholder:text-kr-on-surface-variant/50 focus:outline-none focus:border-kr-orange focus:ring-1 focus:ring-kr-orange/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-kr-on-surface-variant mb-1.5">
                  Interés
                </label>
                <select className="w-full px-4 py-2.5 rounded-kr bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-kr-on-surface focus:outline-none focus:border-kr-orange focus:ring-1 focus:ring-kr-orange/30 transition-all appearance-none">
                  <option value="">Selecciona una opción</option>
                  <option value="clases">Clases</option>
                  <option value="membresia">Membresía</option>
                  <option value="consulta">Consulta</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-kr-on-surface-variant mb-1.5">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full px-4 py-2.5 rounded-kr bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-kr-on-surface placeholder:text-kr-on-surface-variant/50 focus:outline-none focus:border-kr-orange focus:ring-1 focus:ring-kr-orange/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-kr-full bg-kr-orange text-white font-semibold uppercase tracking-wider text-sm hover:bg-kr-orange/90 transition-all shadow-lg shadow-kr-orange/30"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Right — Contact Info */}
          <div className="space-y-6">
            <div className="glass rounded-kr-xl p-6 md:p-8 space-y-6">
              <h2 className="text-xl font-bold text-kr-on-surface mb-2">
                Información de Contacto
              </h2>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-kr-lg clay clay-icon flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-kr-on-surface text-sm">Dirección</h3>
                  <p className="text-sm text-kr-on-surface-variant mt-0.5">
                    Av. Corrientes 1234, CABA, Argentina
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-kr-lg clay clay-icon flex items-center justify-center text-xl">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-kr-on-surface text-sm">Teléfono</h3>
                  <p className="text-sm text-kr-on-surface-variant mt-0.5">+54 11 5555-6789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-kr-lg clay clay-icon flex items-center justify-center text-xl">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-kr-on-surface text-sm">Email</h3>
                  <p className="text-sm text-kr-on-surface-variant mt-0.5">
                    hola@kineticrest.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-kr-lg clay clay-icon flex items-center justify-center text-xl">
                  🕐
                </div>
                <div>
                  <h3 className="font-semibold text-kr-on-surface text-sm">Horario</h3>
                  <p className="text-sm text-kr-on-surface-variant mt-0.5">
                    Lun – Vie: 5am – 11pm
                  </p>
                  <p className="text-sm text-kr-on-surface-variant">Sáb – Dom: 7am – 9pm</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-kr-xl p-6 flex flex-col items-center justify-center h-[220px] text-center">
              <span className="text-4xl mb-3">🗺️</span>
              <p className="text-sm font-medium text-kr-on-surface">Mapa Interactivo</p>
              <p className="text-xs text-kr-on-surface-variant mt-1">
                Av. Corrientes 1234, CABA
              </p>
              <div className="mt-3 w-full h-[1px] bg-[var(--glass-border)]" />
              <p className="text-[11px] text-kr-on-surface-variant mt-3">
                Próximamente — mapa embebido con Google Maps
              </p>
            </div>
          </div>
        </div>
      </section>

      <NavDock />
      <ChatBubble />
    </div>
  )
}
