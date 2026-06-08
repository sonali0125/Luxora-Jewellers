import { motion } from 'framer-motion'
import { getBestSellers, getAllProducts } from '../../data/products'
import { ProductGrid } from '../ui/ProductCard'
import { TextLink } from '../ui/TextLink'

export function BestSellerShowcase({ showAll = false, limit = 4 }) {
  const products = showAll ? getAllProducts() : getBestSellers().slice(0, limit)

  return (
    <section className="section-padding bg-luxora-primary">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-medium text-luxora-text sm:text-4xl md:text-5xl">
              Bestseller Products
            </h2>
          </motion.div>

          {!showAll && <TextLink to="/best-sellers">View All</TextLink>}
        </div>

        <ProductGrid products={products} />
      </div>
    </section>
  )
}
