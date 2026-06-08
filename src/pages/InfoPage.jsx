import { useParams, Navigate } from 'react-router-dom'
import { infoPages } from '../data/pages'
import { Button } from '../components/ui/Button'

export function InfoPage({ slug: slugProp }) {
  const { slug: slugParam } = useParams()
  const slug = slugProp || slugParam
  const page = infoPages[slug]

  if (!page) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <section className="bg-luxora-primary pt-32 pb-8">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 md:px-8">
          <span className="mb-4 inline-block font-body text-[10px] uppercase tracking-[0.35em] text-luxora-gold">
            {page.eyebrow}
          </span>
          <h1 className="font-display text-4xl font-medium text-luxora-text sm:text-5xl">
            {page.title}
          </h1>
        </div>
      </section>

      <section className="section-padding bg-luxora-secondary">
        <div className="mx-auto max-w-2xl space-y-6 px-4 sm:px-6">
          {page.content.map((paragraph, i) => (
            <p key={i} className="editorial-subheading">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-wrap gap-4 pt-6">
            <Button to="/contact" variant="filled">
              Contact Us
            </Button>
            <Button to="/collections">Shop Collections</Button>
          </div>
        </div>
      </section>
    </>
  )
}
