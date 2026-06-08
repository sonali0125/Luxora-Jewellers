import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { homeCategories, categories } from '../../data/content'
import { Button } from '../ui/Button'
import { SafeImage } from '../ui/SafeImage'

export function ShopByCategory({ showAll = false, limit = 4 }) {
  const items = showAll ? categories : homeCategories.slice(0, limit)

  return (
    <section className="section-padding bg-luxora-secondary">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14 text-center md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-medium text-luxora-text sm:text-4xl md:text-5xl">
            Shop by Category
          </h2>
        </motion.div>

        <div className={`grid gap-10 ${showAll ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6' : 'grid-cols-2 sm:grid-cols-4'}`}>
          {items.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <Link to={cat.path} className="group flex flex-col items-center gap-4">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border border-luxora-border bg-luxora-card transition-all duration-500 group-hover:border-luxora-gold group-hover:shadow-lift sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44">
                  <SafeImage
                    src={cat.image}
                    alt={cat.label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <span className="block font-body text-[10px] font-medium uppercase tracking-[0.2em] text-luxora-text">
                    {cat.label}
                  </span>
                  <span className="mt-1 block font-body text-[11px] font-light text-luxora-muted">
                    {cat.count} Products
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div
            className="mt-14 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button to="/collections" variant="minimal">
              View All Categories
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
