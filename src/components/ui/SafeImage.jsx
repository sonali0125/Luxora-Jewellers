import { useState } from 'react'

const FALLBACK = '/images/products/earrings-1.jpg'

export function SafeImage({ src, alt, className = '', ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== FALLBACK) setCurrentSrc(FALLBACK)
      }}
      {...props}
    />
  )
}
