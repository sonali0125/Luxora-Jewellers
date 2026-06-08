import { getBestSellers, getAllProducts, categoryProducts } from './products.js'

const img = (path) => `/images/${path}`

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Collections', path: '/collections' },
  { label: 'Products', path: '/products' },
  { label: 'Bridal', path: '/bridal' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const heroCategories = [
  { id: 'earrings', label: 'Earrings', path: '/collections/earrings', image: img('categories/earrings.jpg') },
  { id: 'rings', label: 'Rings', path: '/collections/rings', image: img('categories/rings.jpg') },
  { id: 'necklaces', label: 'Necklaces', path: '/collections/necklaces', image: img('categories/necklaces.jpg') },
]

export const categories = [
  { id: 'earrings', label: 'Earrings', count: categoryProducts.earrings.length, path: '/collections/earrings', image: img('categories/earrings.jpg') },
  { id: 'bracelets', label: 'Bracelets', count: categoryProducts.bracelets.length, path: '/collections/bracelets', image: img('categories/bracelets.jpg') },
  { id: 'necklaces', label: 'Necklaces', count: categoryProducts.necklaces.length, path: '/collections/necklaces', image: img('categories/necklaces.jpg') },
  { id: 'rings', label: 'Rings', count: categoryProducts.rings.length, path: '/collections/rings', image: img('categories/rings.jpg') },
  { id: 'pendants', label: 'Pendants', count: categoryProducts.pendants.length, path: '/collections/pendants', image: img('categories/pendants.jpg') },
  { id: 'bridal', label: 'Bridal', count: categoryProducts.bridal.length, path: '/collections/bridal', image: img('categories/bridal.jpg') },
]

export const homeCategories = categories.slice(0, 4)

export const bestSellers = getBestSellers()
export const allProducts = getAllProducts()

export const galleryImages = [
  { id: 1, src: img('gallery/flatlay.jpg'), alt: 'Jewellery flat lay on beige surface', size: 'tall' },
  { id: 2, src: img('gallery/necklace.jpg'), alt: 'Gold necklace close-up', size: 'short' },
  { id: 3, src: img('gallery/model.jpg'), alt: 'Model wearing luxury jewellery', size: 'square' },
  { id: 4, src: img('gallery/pendant.jpg'), alt: 'Diamond pendant detail', size: 'short' },
  { id: 5, src: img('gallery/bangles.jpg'), alt: 'Traditional gold bangles', size: 'tall' },
  { id: 6, src: img('gallery/bridal.jpg'), alt: 'Bridal jewellery set', size: 'medium' },
]

export const newCollectionFan = [
  img('products/necklaces-2.jpg'),
  img('products/earrings-1.jpg'),
  img('products/bridal-1.jpg'),
]

export const testimonials = [
  {
    id: 1,
    name: 'Ananya Sharma',
    review: 'The craftsmanship is extraordinary. My bridal set felt like it was made just for me — elegant, timeless, and truly luxurious.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    review: 'Luxora transformed my idea of fine jewellery. Every piece feels like a work of art with the softest, most refined details.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Riya Kapoor',
    review: 'From browsing to unboxing, the experience was pure luxury. The editorial aesthetic matches the quality perfectly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80',
  },
]

export const footerLinks = {
  about: [
    { label: 'Our Story', path: '/about/our-story' },
    { label: 'Craftsmanship', path: '/about/craftsmanship' },
    { label: 'Sustainability', path: '/about/sustainability' },
    { label: 'Press', path: '/about/press' },
  ],
  quick: [
    { label: 'Collections', path: '/collections' },
    { label: 'Best Sellers', path: '/best-sellers' },
    { label: 'Bridal', path: '/bridal' },
    { label: 'Gift Guide', path: '/gift-guide' },
  ],
  service: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Shipping & Returns', path: '/shipping-returns' },
    { label: 'Size Guide', path: '/size-guide' },
    { label: 'Care Instructions', path: '/care-instructions' },
  ],
}

export const socialLinks = [
  { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
  { label: 'Pinterest', icon: 'pinterest', href: 'https://pinterest.com' },
  { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
  { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
]

export const storeInfo = {
  address: '42, Luxury Lane, MG Road, Mumbai, Maharashtra 400001',
  phone: '+91 98765 43210',
  email: 'hello@luxorajewellers.com',
  hours: 'Mon – Sat: 10:00 AM – 8:00 PM',
}

export const heroVideoImage = img('gallery/hero-model.jpg')
