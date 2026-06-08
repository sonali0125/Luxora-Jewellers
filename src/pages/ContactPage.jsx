import { useState } from 'react'
import { motion } from 'framer-motion'
import { storeInfo } from '../data/content'
import { Button } from '../components/ui/Button'
import { Newsletter } from '../components/sections/Newsletter'

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <>
      <section className="bg-luxora-primary pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 md:px-8 lg:px-12">
          <span className="mb-4 inline-block font-body text-[10px] uppercase tracking-[0.35em] text-luxora-gold">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl font-medium text-luxora-text sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-lg editorial-subheading">
            We&apos;d love to hear from you. Visit our showroom or send us a message.
          </p>
        </div>
      </section>

      <section className="section-padding bg-luxora-secondary">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 font-display text-2xl font-medium text-luxora-text sm:text-3xl">
              Store Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-body text-[10px] uppercase tracking-[0.25em] text-luxora-gold">
                  Address
                </h3>
                <p className="font-body text-sm font-light text-luxora-muted">{storeInfo.address}</p>
              </div>
              <div>
                <h3 className="mb-2 font-body text-[10px] uppercase tracking-[0.25em] text-luxora-gold">
                  Phone
                </h3>
                <a href={`tel:${storeInfo.phone.replace(/\s/g, '')}`} className="font-body text-sm text-luxora-muted hover:text-luxora-gold">
                  {storeInfo.phone}
                </a>
              </div>
              <div>
                <h3 className="mb-2 font-body text-[10px] uppercase tracking-[0.25em] text-luxora-gold">
                  Email
                </h3>
                <a href={`mailto:${storeInfo.email}`} className="font-body text-sm text-luxora-muted hover:text-luxora-gold">
                  {storeInfo.email}
                </a>
              </div>
              <div>
                <h3 className="mb-2 font-body text-[10px] uppercase tracking-[0.25em] text-luxora-gold">
                  Hours
                </h3>
                <p className="font-body text-sm font-light text-luxora-muted">{storeInfo.hours}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="mb-8 font-display text-2xl font-medium text-luxora-text sm:text-3xl">
              Send a Message
            </h2>

            {sent ? (
              <p className="font-body text-sm text-luxora-gold" role="status">
                Thank you for reaching out. We&apos;ll get back to you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-luxora-border bg-luxora-card px-5 py-3.5 font-body text-sm text-luxora-text placeholder:text-luxora-muted/60 focus:border-luxora-gold focus:outline-none focus:ring-2 focus:ring-luxora-gold/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-luxora-border bg-luxora-card px-5 py-3.5 font-body text-sm text-luxora-text placeholder:text-luxora-muted/60 focus:border-luxora-gold focus:outline-none focus:ring-2 focus:ring-luxora-gold/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-luxora-border bg-luxora-card px-5 py-3.5 font-body text-sm text-luxora-text placeholder:text-luxora-muted/60 focus:border-luxora-gold focus:outline-none focus:ring-2 focus:ring-luxora-gold/20"
                  />
                </div>
                <Button type="submit" variant="filled">
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
