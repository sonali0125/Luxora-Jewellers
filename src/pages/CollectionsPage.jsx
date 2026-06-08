import { ShopByCategory } from '../components/sections/ShopByCategory'
import { EditorialGrid } from '../components/sections/EditorialGrid'
import { InstagramGallery } from '../components/sections/InstagramGallery'
import { NewCollectionShowcase } from '../components/sections/NewCollectionShowcase'

export function CollectionsPage() {
  return (
    <>
      <section className="bg-luxora-primary pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 md:px-8 lg:px-12">
          <span className="mb-4 inline-block font-body text-[10px] uppercase tracking-[0.35em] text-luxora-gold">
            Curated For You
          </span>
          <h1 className="font-display text-4xl font-medium text-luxora-text sm:text-5xl md:text-6xl">
            Our Collections
          </h1>
          <p className="mx-auto mt-6 max-w-lg editorial-subheading">
            Explore signature categories and editorial curations — each piece crafted for modern sophistication.
          </p>
        </div>
      </section>
      <ShopByCategory showAll />
      <EditorialGrid />
      <InstagramGallery />
      <NewCollectionShowcase />
    </>
  )
}
