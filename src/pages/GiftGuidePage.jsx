import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { giftGuideItems } from '../data/pages'
import { getBestSellers } from '../data/products'
import { ProductGrid } from '../components/ui/ProductCard'

export function GiftGuidePage() {
  const picks = getBestSellers().slice(0, 4)

  return (
    <>
      <section className="bg-luxora-primary pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 md:px-8 lg:px-12">
          <span className="mb-4 inline-block font-body text-[10px] uppercase tracking-[0.35em] text-luxora-gold">
            Curated Gifts
          </span>
          <h1 className="font-display text-4xl font-medium text-luxora-text sm:text-5xl md:text-6xl">
            Gift Guide
          </h1>
          <p className="mx-auto mt-6 max-w-lg editorial-subheading">
            Thoughtfully selected pieces for every occasion — wrapped in Luxora elegance.
          </p>
        </div>
      </section>

      <section className="section-padding bg-luxora-secondary">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {giftGuideItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={item.path}
                className="group block rounded-2xl border border-luxora-border bg-luxora-card p-8 transition-all hover:border-luxora-gold hover:shadow-lift"
              >
                <h2 className="mb-3 font-display text-xl font-medium text-luxora-text group-hover:text-luxora-gold">
                  {item.title}
                </h2>
                <p className="font-body text-sm font-light text-luxora-muted">{item.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-luxora-primary">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-display text-3xl font-medium text-luxora-text">
            Editor&apos;s Picks
          </h2>
          <ProductGrid products={picks} columns="grid-cols-2 sm:grid-cols-4" />
        </div>
      </section>
    </>
  )
}
