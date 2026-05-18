import type { ReactNode } from 'react'

interface BentoCardProps {
  span?: 1 | 2 | '2xl'
  children: ReactNode
  className?: string
}

const spanClasses: Record<string, string> = {
  1: 'col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3',
  2: 'col-span-12 sm:col-span-6 lg:col-span-8 xl:col-span-6',
  '2xl': 'col-span-12',
}

export default function BentoCard({ span = 1, children, className = '' }: BentoCardProps) {
  const baseClass = 'bento-cell animate-fade-up'
  const spanClass = spanClasses[String(span)] ?? spanClasses[1]

  return (
    <div className={`${baseClass} ${spanClass} ${className}`}>
      {children}
    </div>
  )
}
