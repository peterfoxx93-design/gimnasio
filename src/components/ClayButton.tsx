import { type ButtonHTMLAttributes, type ReactNode, useRef } from 'react'

interface ClayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  glowOnHover?: boolean
  icon?: ReactNode
}

export default function ClayButton({
  children,
  variant = 'primary',
  size = 'md',
  glowOnHover = false,
  icon,
  className = '',
  ...props
}: ClayButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!glowOnHover || !btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    btnRef.current.style.setProperty('--mouse-x', `${x}%`)
    btnRef.current.style.setProperty('--mouse-y', `${y}%`)
  }

  const variants = {
    primary:
      'bg-kr-orange text-white shadow-[inset_0_-3px_6px_rgba(0,0,0,0.2),inset_0_3px_6px_rgba(255,255,255,0.3),0_4px_14px_rgba(255,95,31,0.35)] hover:shadow-[inset_0_-3px_6px_rgba(0,0,0,0.2),inset_0_3px_6px_rgba(255,255,255,0.3),0_6px_20px_rgba(255,95,31,0.5)] active:translate-y-[1px]',
    secondary:
      'glass border border-[var(--glass-border)] text-[var(--text-primary)] shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_2px_6px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_6px_16px_rgba(0,0,0,0.1)] active:translate-y-[1px]',
    ghost:
      'bg-transparent text-kr-on-surface border border-kr-outline-variant hover:bg-kr-surface-container-high shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_2px_6px_rgba(0,0,0,0.05)]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  }

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      className={`
        inline-flex items-center justify-center font-semibold rounded-xl
        transition-all duration-200 ease-out cursor-pointer hover-lift
        ${glowOnHover ? 'glow-on-hover' : ''}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  )
}
