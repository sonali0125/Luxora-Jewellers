import { motion } from 'framer-motion'
import { SafeImage } from './SafeImage'

export function ProductCard({ product, index = 0 }) {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="mb-4 overflow-hidden rounded-xl border border-luxora-border bg-luxora-card">
        <SafeImage
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="font-body text-sm font-normal text-luxora-text">{product.name}</h3>
      <p className="mt-1 font-body text-sm text-luxora-muted">{product.price}</p>
    </motion.article>
  )
}

export function ProductGrid({ products, columns = 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' }) {
  if (!products.length) {
    return (
      <p className="py-12 text-center font-body text-sm text-luxora-muted">
        No products found in this collection.
      </p>
    )
  }

  return (
    <div className={`grid gap-8 ${columns}`}>
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  )
}
