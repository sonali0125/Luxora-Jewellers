import { getAllProducts, getBestSellers } from '../data/products'
import { ProductGrid } from '../components/ui/ProductCard'
import { InstagramGallery } from '../components/sections/InstagramGallery'

export function ProductsPage({ title = 'All Products' }) {
  const isBestSellers = title === 'Best Sellers'
  const products = isBestSellers ? getBestSellers() : getAllProducts()

  return (
    <>
      <section className="bg-luxora-primary pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 md:px-8 lg:px-12">
          <span className="mb-4 inline-block font-body text-[10px] uppercase tracking-[0.35em] text-luxora-gold">
            Fine Jewellery
          </span>
          <h1 className="font-display text-4xl font-medium text-luxora-text sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-lg editorial-subheading">
            {isBestSellers
              ? 'Our most loved pieces — refined, radiant, and ready to become yours.'
              : 'Minimal, refined pieces — gold, diamond, and handcrafted jewellery for every occasion.'}
          </p>
        </div>
      </section>

      <section className="section-padding bg-luxora-secondary">
        <div className="mx-auto max-w-7xl">
          <ProductGrid products={products} />
        </div>
      </section>

      {!isBestSellers && <InstagramGallery />}
    </>
  )
}
