import { Link } from 'react-router-dom'

export function Button({ children, variant = 'minimal', className = '', to, type = 'button', ...props }) {
  const baseClass = variant === 'filled' ? 'btn-filled' : 'btn-minimal'

  if (to) {
    return (
      <Link to={to} className={`${baseClass} ${className}`} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  )
}
