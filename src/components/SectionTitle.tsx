interface SectionTitleProps {
  title: string
  subtitle?: string
  tag?: string
  className?: string
}

export default function SectionTitle({ title, subtitle, tag, className = '' }: SectionTitleProps) {
  return (
    <div className={`flex flex-col items-center text-center gap-3 mb-10 animate-fade-up ${className}`}>
      {tag && (
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-kr-lime text-kr-on-tertiary-container">
          {tag}
        </span>
      )}
      <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-[var(--text-secondary)] max-w-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
