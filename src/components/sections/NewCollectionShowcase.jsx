import { motion } from 'framer-motion'
import { newCollectionFan } from '../../data/content'
import { Button } from '../ui/Button'
import { SafeImage } from '../ui/SafeImage'

export function NewCollectionShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#8B8475]">
      <div className="mx-auto grid min-h-[520px] max-w-7xl lg:grid-cols-2">
        <motion.div
          className="flex flex-col items-center justify-center px-8 py-16 text-center lg:py-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 h-px w-16 bg-white/40" aria-hidden="true" />
          <h2 className="mb-2 font-display text-4xl font-medium uppercase tracking-[0.2em] text-white sm:text-5xl md:text-6xl">
            New
            <br />
            Collection
          </h2>
          <div className="mb-8 h-px w-16 bg-white/40" aria-hidden="true" />
          <p className="mb-10 font-body text-[10px] uppercase tracking-[0.35em] text-white/70">
            Luxora Jewellers
          </p>
          <Button to="/collections/bridal" variant="minimal" className="border-white/40 text-white hover:border-white hover:bg-white hover:text-luxora-text">
            Explore Collection
          </Button>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center overflow-hidden py-12 lg:py-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative h-[380px] w-[380px] sm:h-[440px] sm:w-[440px]">
            {newCollectionFan.map((src, i) => {
              const rotations = [-28, 0, 28]
              const offsets = [-60, 0, 60]

              return (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-[280px] w-[160px] overflow-hidden rounded-2xl border-2 border-white/80 shadow-editorial sm:h-[320px] sm:w-[180px]"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${offsets[i]}px) rotate(${rotations[i]}deg)`,
                    transformOrigin: 'center bottom',
                    zIndex: i === 1 ? 2 : 1,
                  }}
                  initial={{ opacity: 0, y: 40, rotate: rotations[i] - 10 }}
                  whileInView={{ opacity: 1, y: 0, rotate: rotations[i] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.7 }}
                  whileHover={{ scale: 1.03, zIndex: 3 }}
                >
                  <SafeImage src={src} alt={`Collection piece ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
