import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { CollectionsPage } from './pages/CollectionsPage'
import { CategoryPage } from './pages/CategoryPage'
import { ProductsPage } from './pages/ProductsPage'
import { BridalPage } from './pages/BridalPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { InfoPage } from './pages/InfoPage'
import { GiftGuidePage } from './pages/GiftGuidePage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="collections" element={<CollectionsPage />} />
        <Route path="collections/:categoryId" element={<CategoryPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="best-sellers" element={<ProductsPage title="Best Sellers" />} />
        <Route path="gift-guide" element={<GiftGuidePage />} />
        <Route path="bridal" element={<BridalPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="about/:slug" element={<InfoPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="shipping-returns" element={<InfoPage slug="shipping-returns" />} />
        <Route path="size-guide" element={<InfoPage slug="size-guide" />} />
        <Route path="care-instructions" element={<InfoPage slug="care-instructions" />} />
      </Route>
    </Routes>
  )
}

export default App
