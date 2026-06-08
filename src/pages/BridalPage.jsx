import { motion } from 'framer-motion'
import { categoryProducts } from '../data/products'
import { ProductGrid } from '../components/ui/ProductCard'
import { Button } from '../components/ui/Button'
import { NewCollectionShowcase } from '../components/sections/NewCollectionShowcase'
import { CustomerLove } from '../components/sections/CustomerLove'
import { SafeImage } from '../components/ui/SafeImage'
import { heroVideoImage } from '../data/content'

export function BridalPage() {
  const bridalItems = categoryProducts.bridal

  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-luxora-secondary pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:px-8 lg:grid-cols-2 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-block font-body text-[10px] uppercase tracking-[0.35em] text-luxora-gold">
              Bridal Collection
            </span>
            <h1 className="editorial-heading mb-6">
              Celebrate Your Wedding with Timeless Luxury
            </h1>
            <p className="mb-10 max-w-md editorial-subheading">
              Exquisite bridal sets handcrafted for your most cherished moments — where tradition meets editorial elegance.
            </p>
            <Button to="/collections/bridal" variant="filled">
              Shop Bridal
            </Button>
          </motion.div>

          <motion.div
            className="arch-frame overflow-hidden border border-luxora-border shadow-editorial"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <SafeImage
              src={heroVideoImage}
              alt="Premium Indian bridal gold jewellery"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-luxora-primary">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-display text-3xl font-medium text-luxora-text sm:text-4xl">
            Featured Bridal Pieces
          </h2>
          <ProductGrid products={bridalItems} />
        </div>
      </section>

      <NewCollectionShowcase />
      <CustomerLove />
    </>
  )
}
