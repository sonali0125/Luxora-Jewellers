import { EditorialHero } from '../components/sections/EditorialHero'
import { ShopByCategory } from '../components/sections/ShopByCategory'
import { EditorialGrid } from '../components/sections/EditorialGrid'
import { BestSellerShowcase } from '../components/sections/BestSellerShowcase'
import { BrandStory } from '../components/sections/BrandStory'
import { InstagramGallery } from '../components/sections/InstagramGallery'
import { NewCollectionShowcase } from '../components/sections/NewCollectionShowcase'
import { CustomerLove } from '../components/sections/CustomerLove'
import { Newsletter } from '../components/sections/Newsletter'

export function HomePage() {
  return (
    <>
      <EditorialHero />
      <ShopByCategory />
      <EditorialGrid compact />
      <BestSellerShowcase />
      <BrandStory compact />
      <InstagramGallery compact />
      <NewCollectionShowcase />
      <CustomerLove compact />
      <Newsletter />
    </>
  )
}
