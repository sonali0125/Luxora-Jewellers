import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

export function TextLink({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.25em] text-luxora-text transition-colors hover:text-luxora-gold ${className}`}
    >
      {children}
      <HiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}
