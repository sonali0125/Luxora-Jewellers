import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { TextLink } from '../ui/TextLink'
import { Button } from '../ui/Button'
import { SafeImage } from '../ui/SafeImage'

const img = (path) => `/images/${path}`

const tiles = [
  {
    id: 'exclusive',
    layout: 'split-curve',
    title: 'Exclusive drop.',
    image: img('products/rings-1.jpg'),
    bg: 'bg-luxora-secondary',
  },
  {
    id: 'coming-soon',
    layout: 'full-image',
    title: 'Coming Soon',
    image: img('gallery/necklace.jpg'),
  },
  {
    id: 'review',
    layout: 'testimonial',
    review: 'Absolutely stunning craftsmanship. Every detail feels intentional and luxurious.',
    name: 'Sarah M.',
    image: img('products/pendants-1.jpg'),
    bg: 'bg-luxora-primary',
  },
  {
    id: 'promo',
    layout: 'promo-image',
    title: 'Special Promo',
    subtitle: '25% Off',
    image: img('products/necklaces-2.jpg'),
  },
  {
    id: 'shine',
    layout: 'text-only',
    title: 'Shine with every piece',
    bg: 'bg-luxora-card',
  },
  {
    id: 'collage',
    layout: 'collage',
    images: [
      img('products/necklaces-2.jpg'),
      img('products/earrings-1.jpg'),
      img('products/rings-1.jpg'),
    ],
  },
  {
    id: 'new-store',
    layout: 'full-image',
    title: 'New in store',
    image: img('products/bracelets-1.jpg'),
  },
  {
    id: 'hot',
    layout: 'editorial-split',
    title: 'Hot Right Now',
    text: 'Discover the pieces everyone is talking about this season.',
    images: [
      img('products/earrings-1.jpg'),
      img('products/pendants-1.jpg'),
      img('products/rings-1.jpg'),
    ],
  },
  {
    id: 'arrivals',
    layout: 'cta-image',
    title: 'New arrivals',
    image: img('gallery/flatlay.jpg'),
    link: '/products',
  },
]

function MosaicTile({ tile, index }) {
  const base =
    'relative overflow-hidden rounded-2xl border border-luxora-border transition-shadow duration-500 hover:shadow-lift'

  if (tile.layout === 'split-curve') {
    return (
      <motion.article
        className={`${base} ${tile.bg} flex min-h-[220px] items-stretch sm:min-h-[260px]`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        whileHover={{ y: -3 }}
      >
        <div className="flex w-1/2 items-center px-6">
          <h3 className="font-display text-xl font-medium leading-snug text-luxora-text sm:text-2xl">
            {tile.title}
          </h3>
        </div>
        <div className="w-1/2 overflow-hidden rounded-l-[50%]">
          <SafeImage src={tile.image} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </motion.article>
    )
  }

  if (tile.layout === 'full-image') {
    return (
      <motion.article
        className={`${base} group min-h-[220px] sm:min-h-[260px]`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        whileHover={{ y: -3 }}
      >
        <SafeImage
          src={tile.image}
          alt={tile.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-luxora-text/10" />
        <h3 className="absolute bottom-5 left-5 right-5 text-center font-display text-xl font-medium uppercase tracking-[0.15em] text-white sm:text-2xl">
          {tile.title}
        </h3>
      </motion.article>
    )
  }

  if (tile.layout === 'testimonial') {
    return (
      <motion.article
        className={`${base} ${tile.bg} flex min-h-[220px] items-center justify-center p-6 sm:min-h-[260px]`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
      >
        <div className="max-w-[200px] rounded-2xl border border-luxora-border bg-luxora-card p-5 shadow-soft">
          <SafeImage src={tile.image} alt="" className="mb-3 h-16 w-16 rounded-lg object-cover" loading="lazy" />
          <div className="mb-2 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="h-2.5 w-2.5 text-luxora-gold" />
            ))}
          </div>
          <p className="mb-2 font-body text-[11px] font-light leading-relaxed text-luxora-muted">
            &ldquo;{tile.review}&rdquo;
          </p>
          <span className="font-body text-[10px] text-luxora-text">{tile.name}</span>
        </div>
      </motion.article>
    )
  }

  if (tile.layout === 'promo-image') {
    return (
      <motion.article
        className={`${base} group min-h-[220px] sm:min-h-[260px]`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        whileHover={{ y: -3 }}
      >
        <SafeImage src={tile.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-luxora-text/20" />
        <div className="absolute bottom-5 left-5">
          <span className="block font-body text-[9px] uppercase tracking-[0.25em] text-white/80">
            {tile.title}
          </span>
          <span className="font-display text-2xl font-medium text-white">{tile.subtitle}</span>
        </div>
      </motion.article>
    )
  }

  if (tile.layout === 'text-only') {
    return (
      <motion.article
        className={`${base} ${tile.bg} flex min-h-[220px] items-center justify-center p-8 sm:min-h-[260px]`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
      >
        <h3 className="text-center font-display text-2xl font-medium leading-snug text-luxora-text sm:text-3xl">
          {tile.title}
        </h3>
      </motion.article>
    )
  }

  if (tile.layout === 'collage') {
    return (
      <motion.article
        className={`${base} bg-luxora-card min-h-[220px] p-2 sm:min-h-[260px]`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
      >
        <div className="grid h-full grid-rows-2 gap-2">
          <SafeImage src={tile.images[0]} alt="" className="h-full w-full rounded-xl object-cover" loading="lazy" />
          <div className="grid grid-cols-2 gap-2">
            <SafeImage src={tile.images[1]} alt="" className="h-full w-full rounded-xl object-cover" loading="lazy" />
            <SafeImage src={tile.images[2]} alt="" className="h-full w-full rounded-xl object-cover" loading="lazy" />
          </div>
        </div>
      </motion.article>
    )
  }

  if (tile.layout === 'editorial-split') {
    return (
      <motion.article
        className={`${base} bg-luxora-secondary flex min-h-[220px] overflow-hidden sm:min-h-[260px]`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
      >
        <div className="flex w-1/2 flex-col justify-center px-5 py-4">
          <span className="mb-2 font-body text-[9px] uppercase tracking-[0.25em] text-luxora-gold">
            {tile.title}
          </span>
          <p className="font-body text-[11px] font-light leading-relaxed text-luxora-muted">{tile.text}</p>
        </div>
        <div className="flex w-1/2 flex-col gap-1.5 p-2">
          {tile.images.map((src, i) => (
            <SafeImage key={i} src={src} alt="" className="flex-1 rounded-lg object-cover" loading="lazy" />
          ))}
        </div>
      </motion.article>
    )
  }

  if (tile.layout === 'cta-image') {
    return (
      <motion.article
        className={`${base} group min-h-[220px] sm:min-h-[260px]`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        whileHover={{ y: -3 }}
      >
        <SafeImage src={tile.image} alt={tile.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-luxora-text/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
          <h3 className="font-display text-xl font-medium text-white sm:text-2xl">{tile.title}</h3>
          <Link
            to={tile.link}
            className="rounded-full border border-white/60 px-6 py-2 font-body text-[10px] uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-luxora-text"
          >
            Shop Now
          </Link>
        </div>
      </motion.article>
    )
  }

  return null
}

export function EditorialGrid({ compact = false }) {
  const displayTiles = compact ? tiles.slice(0, 6) : tiles

  return (
    <section className="section-padding bg-luxora-primary">
      <div className="mx-auto max-w-7xl">
        {!compact && (
          <motion.div
            className="mb-12 text-center md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-3 inline-block font-body text-[10px] uppercase tracking-[0.3em] text-luxora-gold">
              Editorial
            </span>
            <h2 className="font-display text-3xl font-medium text-luxora-text sm:text-4xl">
              Curated Moments
            </h2>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {displayTiles.map((tile, i) => (
            <MosaicTile key={tile.id} tile={tile} index={i} />
          ))}
        </div>

        {compact && (
          <div className="mt-12 flex justify-center">
            <TextLink to="/collections">Explore Collections</TextLink>
          </div>
        )}
      </div>
    </section>
  )
}
