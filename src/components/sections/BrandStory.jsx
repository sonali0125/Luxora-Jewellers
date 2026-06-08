import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SafeImage } from '../ui/SafeImage'
import { footerLinks } from '../../data/content'

export function BrandStory({ compact = false }) {
  return (
    <section className="section-padding bg-luxora-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl border border-luxora-border shadow-soft">
            <SafeImage
              src="/images/gallery/flatlay.jpg"
              alt="Luxury jewellery lifestyle flat lay"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="order-1 flex flex-col justify-center lg:order-2">
          <span className="mb-4 font-body text-[10px] font-medium uppercase tracking-[0.35em] text-luxora-gold">
            Our Story
          </span>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-luxora-text sm:text-4xl md:text-5xl">
            Crafted For
            <br />
            <span className="italic">Everyday Luxury</span>
          </h2>
          <p className="mb-6 editorial-subheading">
            Born from a passion for artisanal excellence, Luxora Jewellers reimagines fine jewellery for the
            modern connoisseur. Each piece is meticulously handcrafted by master artisans.
          </p>
          {!compact && (
            <p className="mb-10 editorial-subheading">
              We believe luxury should feel effortless — worn daily, cherished forever. From ethically sourced gold
              to conflict-free diamonds, every creation tells a story of elegance and integrity.
            </p>
          )}
          <div className="flex flex-wrap gap-3">
            <Button to="/about/our-story" className="w-fit">
              Discover More
            </Button>
            {compact &&
              footerLinks.about.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-[10px] uppercase tracking-[0.15em] text-luxora-muted transition-colors hover:text-luxora-gold"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
