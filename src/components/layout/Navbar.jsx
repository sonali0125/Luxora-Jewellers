import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineSearch, HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { navLinks } from '../../data/content'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const linkClass = ({ isActive }) =>
    `font-body text-[11px] font-normal uppercase tracking-[0.18em] transition-colors ${
      isActive ? 'text-luxora-gold' : 'text-luxora-muted hover:text-luxora-text'
    }`

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-luxora-secondary/95 shadow-soft backdrop-blur-md' : 'bg-luxora-primary/80 backdrop-blur-sm'
        }`}
      >
        <nav
          className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-5 sm:px-6 md:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="font-display text-xl font-medium italic text-luxora-text sm:text-2xl"
          >
            Luxora
          </Link>

          <ul className="hidden items-center gap-8 lg:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.path} className={linkClass} end={link.path === '/'}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            {[
              { icon: HiOutlineSearch, label: 'Search' },
              { icon: HiOutlineHeart, label: 'Wishlist' },
              { icon: HiOutlineShoppingBag, label: 'Cart' },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="rounded-full p-2 text-luxora-text transition-colors hover:text-luxora-gold"
              >
                <Icon className="h-[18px] w-[18px] stroke-[1.5]" />
              </button>
            ))}

            <Link
              to="/contact"
              className="ml-1 hidden rounded-md bg-luxora-text px-5 py-2 font-body text-[10px] font-medium uppercase tracking-[0.15em] text-luxora-secondary transition-opacity hover:opacity-85 sm:inline-flex"
            >
              Login
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="rounded-full p-2 text-luxora-text lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-luxora-secondary/98 backdrop-blur-sm lg:hidden"
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="flex h-full flex-col items-center justify-center gap-8"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `font-display text-2xl ${isActive ? 'text-luxora-gold' : 'text-luxora-text'}`
                    }
                    onClick={() => setMobileOpen(false)}
                    end={link.path === '/'}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-md bg-luxora-text px-8 py-3 font-body text-xs uppercase tracking-[0.15em] text-luxora-secondary"
              >
                Login
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
