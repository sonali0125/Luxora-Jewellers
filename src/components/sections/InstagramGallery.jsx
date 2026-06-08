import { motion } from 'framer-motion'
import { galleryImages } from '../../data/content'
import { SafeImage } from '../ui/SafeImage'

const sizeClasses = {
  short: 'h-48 sm:h-52',
  medium: 'h-56 sm:h-64',
  square: 'h-56 sm:h-60',
  tall: 'h-72 sm:h-80',
}

export function InstagramGallery({ compact = false }) {
  const images = compact ? galleryImages.slice(0, 4) : galleryImages

  return (
    <section className="section-padding bg-luxora-primary">
      <div className="mx-auto max-w-7xl">
        {!compact && (
          <motion.div
            className="mb-12 text-center md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-3 inline-block font-body text-[10px] uppercase tracking-[0.3em] text-luxora-gold">
              @luxorajewellers
            </span>
            <h2 className="font-display text-3xl font-medium text-luxora-text sm:text-4xl">
              Inspired By Beauty
            </h2>
          </motion.div>
        )}

        {compact && (
          <motion.h2
            className="mb-10 text-center font-display text-2xl font-medium text-luxora-text sm:text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Gallery
          </motion.h2>
        )}

        <div className={`columns-2 gap-3 masonry-grid sm:gap-4 ${compact ? '' : 'lg:columns-4'}`}>
          {images.map((img, i) => (
            <motion.figure
              key={img.id}
              className="group mb-3 break-inside-avoid sm:mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className={`${sizeClasses[img.size] || sizeClasses.medium} relative overflow-hidden rounded-xl border border-luxora-border bg-luxora-card transition-all duration-500 group-hover:shadow-lift`}
              >
                <SafeImage
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
