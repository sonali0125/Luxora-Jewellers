import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPlay } from 'react-icons/hi'
import { heroCategories, heroVideoImage } from '../../data/content'
import { TextLink } from '../ui/TextLink'
import { FadeIn } from '../ui/ScrollReveal'
import { SafeImage } from '../ui/SafeImage'
import { VideoModal } from '../ui/VideoModal'

export function EditorialHero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-luxora-primary pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-10 sm:px-6 md:gap-16 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-16">
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.1}>
              <h1 className="editorial-heading mb-6 max-w-lg">
                Find Your
                <br />
                Perfect Piece
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mb-8 max-w-sm editorial-subheading">
                Discover timeless jewellery collections crafted for elegance and modern sophistication.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <TextLink to="/collections" className="mb-14">
                Shop Now
              </TextLink>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="flex items-center gap-5 sm:gap-7">
                {heroCategories.map((cat, i) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                  >
                    <Link to={cat.path} className="group block" aria-label={`Shop ${cat.label}`}>
                      <div className="h-14 w-14 overflow-hidden rounded-full border border-luxora-border bg-luxora-card transition-all duration-300 group-hover:border-luxora-gold sm:h-16 sm:w-16">
                        <SafeImage
                          src={cat.image}
                          alt={cat.label}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="eager"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <motion.button
                type="button"
                aria-label="Play brand video"
                onClick={() => setVideoOpen(true)}
                className="absolute -left-2 top-8 z-20 flex items-center gap-2 rounded-full border border-luxora-border bg-luxora-card/90 px-4 py-2 shadow-soft backdrop-blur-sm transition-all hover:border-luxora-gold sm:-left-6"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-luxora-border">
                  <HiPlay className="h-3.5 w-3.5 text-luxora-text" />
                </span>
                <span className="font-body text-[10px] uppercase tracking-[0.15em] text-luxora-muted">
                  Play Video
                </span>
              </motion.button>

              <div className="arch-frame relative overflow-hidden border border-luxora-border bg-luxora-card shadow-editorial">
                <SafeImage
                  src={heroVideoImage}
                  alt="Elegant model wearing luxurious gold jewellery"
                  className="aspect-[3/4] w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  )
}
