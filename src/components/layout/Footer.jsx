import { Link } from 'react-router-dom'
import { FaInstagram, FaPinterest, FaFacebook, FaYoutube } from 'react-icons/fa'
import { footerLinks, socialLinks, storeInfo } from '../../data/content'

const iconMap = {
  instagram: FaInstagram,
  pinterest: FaPinterest,
  facebook: FaFacebook,
  youtube: FaYoutube,
}

export function Footer() {
  return (
    <footer className="border-t border-luxora-border bg-luxora-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 lg:px-12 lg:py-24">
        <div className="mb-16 text-center">
          <Link
            to="/"
            className="inline-block font-display text-2xl font-medium italic text-luxora-text sm:text-3xl"
          >
            Luxora
          </Link>
          <p className="mx-auto mt-4 max-w-sm font-body text-sm font-light text-luxora-muted">
            Timeless jewellery for the modern muse. Crafted with passion, worn with pride.
          </p>
        </div>

        <div className="mb-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <h3 className="mb-5 font-body text-[10px] font-medium uppercase tracking-[0.3em] text-luxora-gold">
              About
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm font-light text-luxora-muted transition-colors hover:text-luxora-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-body text-[10px] font-medium uppercase tracking-[0.3em] text-luxora-gold">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm font-light text-luxora-muted transition-colors hover:text-luxora-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-body text-[10px] font-medium uppercase tracking-[0.3em] text-luxora-gold">
              Customer Service
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm font-light text-luxora-muted transition-colors hover:text-luxora-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-body text-[10px] font-medium uppercase tracking-[0.3em] text-luxora-gold">
              Visit Us
            </h3>
            <address className="space-y-2 not-italic">
              <p className="font-body text-sm font-light text-luxora-muted">{storeInfo.address}</p>
              <p className="font-body text-sm font-light text-luxora-muted">
                <a href={`tel:${storeInfo.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-luxora-gold">
                  {storeInfo.phone}
                </a>
              </p>
              <p className="font-body text-sm font-light text-luxora-muted">
                <a href={`mailto:${storeInfo.email}`} className="transition-colors hover:text-luxora-gold">
                  {storeInfo.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-luxora-border pt-10 sm:flex-row">
          <p className="font-body text-xs font-light text-luxora-muted">
            &copy; {new Date().getFullYear()} Luxora Jewellers. All rights reserved.
          </p>

          <div className="flex gap-5">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-luxora-muted transition-colors hover:text-luxora-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
