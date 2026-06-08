import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="section-padding bg-luxora-primary">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="mb-4 inline-block font-body text-[10px] font-medium uppercase tracking-[0.35em] text-luxora-gold">
          Newsletter
        </span>
        <h2 className="mb-4 font-display text-3xl font-medium text-luxora-text sm:text-4xl md:text-5xl">
          Join Our Exclusive Circle
        </h2>
        <p className="mb-10 editorial-subheading">
          Receive updates about new collections and exclusive releases.
        </p>

        {submitted ? (
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-body text-sm text-luxora-gold"
            role="status"
          >
            Thank you for subscribing. Welcome to the Luxora family.
          </motion.p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
            aria-label="Newsletter subscription"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-luxora-border bg-luxora-card px-6 py-3 font-body text-sm text-luxora-text placeholder:text-luxora-muted/60 focus:border-luxora-gold focus:outline-none focus:ring-2 focus:ring-luxora-gold/20"
            />
            <Button type="submit" variant="filled" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
