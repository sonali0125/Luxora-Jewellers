import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { testimonials } from '../../data/content'
import { TextLink } from '../ui/TextLink'

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="h-3 w-3 text-luxora-gold" aria-hidden="true" />
      ))}
    </div>
  )
}

export function CustomerLove({ compact = false }) {
  const items = compact ? testimonials.slice(0, 3) : testimonials

  return (
    <section className="section-padding bg-luxora-secondary">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-3 inline-block font-body text-[10px] uppercase tracking-[0.3em] text-luxora-gold">
            Testimonials
          </span>
          <h2 className="font-display text-3xl font-medium text-luxora-text sm:text-4xl">
            Customer Love
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {items.map((item, i) => (
            <motion.blockquote
              key={item.id}
              className="flex flex-col items-center rounded-2xl border border-luxora-border bg-luxora-card p-8 text-center shadow-soft transition-shadow duration-500 hover:shadow-lift md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="mb-5 h-14 w-14 rounded-full border border-luxora-border object-cover"
                loading="lazy"
              />
              <StarRating count={item.rating} />
              <p className="my-5 font-body text-sm font-light italic leading-relaxed text-luxora-muted">
                &ldquo;{item.review}&rdquo;
              </p>
              <cite className="font-display text-base font-medium not-italic text-luxora-text">
                {item.name}
              </cite>
            </motion.blockquote>
          ))}
        </div>

        {compact && (
          <div className="mt-12 flex justify-center">
            <TextLink to="/about">Read More Stories</TextLink>
          </div>
        )}
      </div>
    </section>
  )
}
