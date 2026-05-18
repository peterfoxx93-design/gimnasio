import { useState, useEffect, useRef, type FormEvent } from 'react'

function ChatBubbleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(() => localStorage.getItem('kr-chat-name') ?? '')
  const [message, setMessage] = useState('')
  const [conversation, setConversation] = useState<{ role: string; text: string }[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && !conversation.length) {
      setConversation([
        { role: 'bot', text: '¡Bienvenido a Kinetic Rest! ¿En qué podemos ayudarte hoy?' },
      ])
    }
  }, [open, conversation.length])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open, conversation])

  const handleSend = (e: FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    const userMsg = message.trim()
    setConversation(prev => [...prev, { role: 'user', text: userMsg }])
    setMessage('')

    // Contextual memory: save name if user introduces themselves
    const nameMatch = userMsg.match(/^(?:soy|me llamo|mi nombre es)\s+(.+)/i)
    if (nameMatch) {
      const userName = nameMatch[1].trim()
      setName(userName)
      localStorage.setItem('kr-chat-name', userName)
      setTimeout(() => {
        setConversation(prev => [
          ...prev,
          { role: 'bot', text: `¡Encantado de conocerte, ${userName}! ¿Hay algo más en lo que pueda ayudarte?` },
        ])
      }, 400)
      return
    }

    // Personalized greeting if name is known
    const greetingMatch = userMsg.match(/^(?:hola|buenas|buen[ao]s?|hey|oye)/i)
    if (greetingMatch && name) {
      setTimeout(() => {
        setConversation(prev => [
          ...prev,
          { role: 'bot', text: `¡Hola de nuevo, ${name}! ¿En qué más puedo ayudarte?` },
        ])
      }, 400)
      return
    }

    // Default bot response
    setTimeout(() => {
      const greetings = [
        '¡Gracias por tu mensaje! Un asesor se pondrá en contacto contigo pronto.',
        'Entendido. ¿Te gustaría agendar una visita al gimnasio?',
        'Perfecto. Puedes revisar nuestras membresías en la sección de Membresías.',
        'Genial. ¿Hay algo más en lo que pueda ayudarte?',
      ]
      const reply = greetings[Math.floor(Math.random() * greetings.length)]
      setConversation(prev => [...prev, { role: 'bot', text: reply }])
    }, 400)
  }

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-28 sm:right-6">
      {/* Chat window */}
      {open && (
        <div className="glass rounded-2xl w-72 sm:w-80 overflow-hidden shadow-xl animate-scale-in origin-bottom-right">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--glass-border)]">
            <span className="text-sm font-semibold text-[var(--text-primary)]">Chat Kinetic Rest</span>
            <button onClick={() => setOpen(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <CloseIcon />
            </button>
          </div>

          {/* Messages */}
          <div className="px-4 py-3 max-h-56 overflow-y-auto space-y-2">
            {conversation.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <span
                  className={`inline-block max-w-[80%] px-3 py-2 text-sm rounded-xl ${
                    msg.role === 'user'
                      ? 'bg-kr-orange text-white rounded-br-sm'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="flex items-center gap-2 px-4 py-3 border-t border-[var(--glass-border)]">
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none"
            />
            <button
              type="submit"
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-kr-orange text-white text-sm font-bold transition-transform hover:scale-105 active:scale-95"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13" />
                <path d="m22 2-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className={`clay-icon w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
          open ? 'bg-kr-orange rotate-45' : 'bg-kr-orange shadow-lg'
        }`}
        aria-label="Chat"
      >
        {open ? <CloseIcon /> : <ChatBubbleIcon />}
      </button>
    </div>
  )
}
