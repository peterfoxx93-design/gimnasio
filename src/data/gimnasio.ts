export interface GymClass {
  id: string
  name: string
  category: 'yoga' | 'hiit' | 'weights' | 'pilates' | 'boxing' | 'spinning'
  description: string
  duration: string
  intensity: 'low' | 'medium' | 'high'
  image: string
  schedule: string[]
  trainer: string
  capacity: number
}

export interface Trainer {
  id: string
  name: string
  role: string
  bio: string
  image: string
  specialties: string[]
}

export interface Membership {
  id: string
  name: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
}

export const classes: GymClass[] = [
  {
    id: '1',
    name: 'Power Yoga',
    category: 'yoga',
    description: 'Fluidez y fuerza. Conecta respiración con movimiento en una secuencia dinámica que desafía tu resistencia.',
    duration: '60 min',
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    schedule: ['Lun 7am', 'Mié 7am', 'Vie 8am'],
    trainer: 'Sofía Méndez',
    capacity: 20,
  },
  {
    id: '2',
    name: 'HIIT Inferno',
    category: 'hiit',
    description: 'Intervalos de alta intensidad que maximizan la quema de calorías en solo 30 minutos. Resultados reales.',
    duration: '30 min',
    intensity: 'high',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80',
    schedule: ['Lun 6am', 'Mar 6am', 'Jue 6am', 'Sáb 9am'],
    trainer: 'Carlos Ruiz',
    capacity: 25,
  },
  {
    id: '3',
    name: 'Strength Lab',
    category: 'weights',
    description: 'Entrenamiento de fuerza progresivo. Técnica perfecta y sobrecarga controlada para resultados sostenibles.',
    duration: '50 min',
    intensity: 'high',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    schedule: ['Mar 7am', 'Jue 7am', 'Sáb 10am'],
    trainer: 'Marcos Peña',
    capacity: 15,
  },
  {
    id: '4',
    name: 'Reformer Pilates',
    category: 'pilates',
    description: 'Control, precisión y alineación. Fortalece el core y mejora tu postura con equipamiento profesional.',
    duration: '55 min',
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    schedule: ['Lun 9am', 'Mié 9am', 'Vie 10am'],
    trainer: 'Ana Torres',
    capacity: 12,
  },
  {
    id: '5',
    name: 'Box & Burn',
    category: 'boxing',
    description: 'Boxeo funcional combinado con acondicionamiento. Libera estrés mientras te pones en forma.',
    duration: '45 min',
    intensity: 'high',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    schedule: ['Mar 8am', 'Jue 8am', 'Sáb 11am'],
    trainer: 'David Cruz',
    capacity: 20,
  },
  {
    id: '6',
    name: 'Spin Journey',
    category: 'spinning',
    description: 'Ritmo, música y resistencia. Un viaje en bicicleta que quema calorías y fortalece piernas.',
    duration: '45 min',
    intensity: 'medium',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    schedule: ['Lun 5pm', 'Mié 5pm', 'Vie 5pm'],
    trainer: 'Laura Jiménez',
    capacity: 20,
  },
]

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Sofía Méndez',
    role: 'Yoga & Mindfulness',
    bio: 'Certificada en Yoga Alliance RYT-500. 10 años guiando prácticas transformadoras.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
    specialties: ['Vinyasa', 'Meditación', 'Respiración'],
  },
  {
    id: '2',
    name: 'Carlos Ruiz',
    role: 'HIIT & Performance',
    bio: 'Entrenador certificado NASM. Especialista en programas de alta intensidad.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
    specialties: ['HIIT', 'CrossFit', 'Cardio'],
  },
  {
    id: '3',
    name: 'Ana Torres',
    role: 'Pilates & Rehab',
    bio: 'Fisioterapeuta y entrenadora de Pilates. Enfoque en alineación y prevención.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
    specialties: ['Reformer', 'Mat Pilates', 'Rehab'],
  },
  {
    id: '4',
    name: 'Marcos Peña',
    role: 'Fuerza & Acondicionamiento',
    bio: 'Powerlifter competitivo con 8 años de experiencia en entrenamiento de fuerza.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
    specialties: ['Powerlifting', 'Strongman', 'Movilidad'],
  },
]

export const memberships: Membership[] = [
  {
    id: '1',
    name: 'Esencial',
    price: '49',
    period: '/mes',
    features: ['Acceso al gym 5am-10pm', 'Clases grupales ilimitadas', 'Vestidores y lockers', 'App de seguimiento'],
  },
  {
    id: '2',
    name: 'Premium',
    price: '89',
    period: '/mes',
    features: ['Acceso 24/7', 'Clases ilimitadas', '2 sesiones de coaching mensuales', 'Acceso a sauna y spa', 'Estacionamiento VIP', 'Nutricionista'],
    highlighted: true,
  },
  {
    id: '3',
    name: 'Élite',
    price: '149',
    period: '/mes',
    features: ['Todo Premium', 'Coaching ilimitado', 'Plan nutricional personalizado', 'Acceso a todos los workshops', 'Invitado +1 siempre', 'Prioridad en nuevas clases'],
  },
]

export const facilities = [
  { name: 'Zona de Cardio', description: 'Equipamiento Technogym de última generación' },
  { name: 'Sala de Pesas', description: 'Racks, dumbells y máquinas de aislamiento' },
  { name: 'Estudio de Yoga', description: 'Espacio tranquilo con luz natural' },
  { name: 'Ring de Boxeo', description: 'Ring profesional y sacos de entrenamiento' },
  { name: 'Sauna & Spa', description: 'Relajación post-entreno' },
  { name: 'Zona de CrossFit', description: 'Área funcional con equipamiento completo' },
]

export const stats = [
  { value: '5 años', label: 'Transformando vidas' },
  { value: '2,500+', label: 'Miembros activos' },
  { value: '40+', label: 'Clases semanales' },
  { value: '12', label: 'Trainers certificados' },
]
