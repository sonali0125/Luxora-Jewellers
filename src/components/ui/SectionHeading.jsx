import { ScrollReveal } from './ScrollReveal'

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : align === 'right' ? 'text-right items-end' : 'text-center items-center'

  return (
    <ScrollReveal className={`mb-12 flex flex-col gap-3 md:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="font-body text-[10px] font-medium uppercase tracking-[0.35em] text-luxora-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-medium text-luxora-text sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="max-w-xl editorial-subheading">{subtitle}</p>}
    </ScrollReveal>
  )
}
