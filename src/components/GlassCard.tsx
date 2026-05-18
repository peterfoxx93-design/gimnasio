import { type ReactNode, type HTMLAttributes } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`
        glass rounded-xl p-6
        ${hover ? 'hover-lift' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
