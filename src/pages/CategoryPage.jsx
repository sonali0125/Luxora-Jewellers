import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductsByCategory, categoryMeta } from '../data/products'
import { categories } from '../data/content'
import { ProductGrid } from '../components/ui/ProductCard'
import { Button } from '../components/ui/Button'

export function CategoryPage() {
  const { categoryId } = useParams()
  const meta = categoryMeta[categoryId]
  const products = getProductsByCategory(categoryId)

  if (!meta) {
    return <Navigate to="/collections" replace />
  }

  return (
    <>
      <section className="bg-luxora-primary pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 md:px-8 lg:px-12">
          <span className="mb-4 inline-block font-body text-[10px] uppercase tracking-[0.35em] text-luxora-gold">
            Collection
          </span>
          <h1 className="font-display text-4xl font-medium text-luxora-text sm:text-5xl md:text-6xl">
            {meta.label}
          </h1>
          <p className="mx-auto mt-6 max-w-lg editorial-subheading">{meta.description}</p>
        </div>
      </section>

      <section className="section-padding bg-luxora-secondary">
        <div className="mx-auto max-w-7xl">
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="border-t border-luxora-border bg-luxora-primary py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-sm text-luxora-muted">Explore other categories</p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories
                .filter((c) => c.id !== categoryId)
                .map((cat) => (
                  <Link
                    key={cat.id}
                    to={cat.path}
                    className="rounded-full border border-luxora-border px-5 py-2 font-body text-[10px] uppercase tracking-[0.15em] text-luxora-muted transition-all hover:border-luxora-gold hover:text-luxora-gold"
                  >
                    {cat.label}
                  </Link>
                ))}
            </div>
            <Button to="/collections" variant="minimal">
              All Collections
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
