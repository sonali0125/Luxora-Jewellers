import { BrandStory } from '../components/sections/BrandStory'
import { CustomerLove } from '../components/sections/CustomerLove'
import { InstagramGallery } from '../components/sections/InstagramGallery'
import { Newsletter } from '../components/sections/Newsletter'

export function AboutPage() {
  return (
    <>
      <section className="bg-luxora-primary pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 md:px-8 lg:px-12">
          <span className="mb-4 inline-block font-body text-[10px] uppercase tracking-[0.35em] text-luxora-gold">
            About Luxora
          </span>
          <h1 className="font-display text-4xl font-medium text-luxora-text sm:text-5xl md:text-6xl">
            Our Story
          </h1>
        </div>
      </section>
      <BrandStory />
      <InstagramGallery />
      <CustomerLove />
      <Newsletter />
    </>
  )
}
