const img = (path) => `/images/${path}`

export const categoryProducts = {
  earrings: [
    { id: 'e1', name: 'Pearl Drop Earrings', price: '₹45,200', image: img('products/earrings-1.jpg'), categoryId: 'earrings' },
    { id: 'e2', name: 'Gold Jhumka Earrings', price: '₹38,900', image: img('products/earrings-2.jpg'), categoryId: 'earrings' },
    { id: 'e3', name: 'Diamond Stud Earrings', price: '₹62,500', image: img('products/earrings-3.jpg'), categoryId: 'earrings' },
    { id: 'e4', name: 'Chandbali Earrings', price: '₹54,800', image: img('products/earrings-4.jpg'), categoryId: 'earrings' },
    { id: 'e5', name: 'Hoop Gold Earrings', price: '₹28,400', image: img('products/earrings-5.jpg'), categoryId: 'earrings' },
    { id: 'e6', name: 'Kundan Drop Earrings', price: '₹71,200', image: img('products/earrings-6.jpg'), categoryId: 'earrings' },
  ],
  bracelets: [
    { id: 'b1', name: 'Heritage Gold Bracelet', price: '₹67,800', image: img('products/bracelets-1.jpg'), categoryId: 'bracelets' },
    { id: 'b2', name: 'Diamond Tennis Bracelet', price: '₹1,12,000', image: img('products/bracelets-2.jpg'), categoryId: 'bracelets' },
    { id: 'b3', name: 'Pearl Chain Bracelet', price: '₹42,600', image: img('products/bracelets-3.jpg'), categoryId: 'bracelets' },
    { id: 'b4', name: 'Traditional Gold Kada', price: '₹89,500', image: img('products/bracelets-4.jpg'), categoryId: 'bracelets' },
  ],
  necklaces: [
    { id: 'n1', name: 'Royal Gold Necklace', price: '₹1,24,500', image: img('products/necklaces-1.jpg'), categoryId: 'necklaces' },
    { id: 'n2', name: 'Layered Gold Chain', price: '₹78,300', image: img('products/necklaces-2.jpg'), categoryId: 'necklaces' },
    { id: 'n3', name: 'Temple Necklace Set', price: '₹1,56,000', image: img('products/necklaces-3.jpg'), categoryId: 'necklaces' },
    { id: 'n4', name: 'Diamond Choker Set', price: '₹2,10,000', image: img('products/necklaces-4.jpg'), categoryId: 'necklaces' },
  ],
  rings: [
    { id: 'r1', name: 'Diamond Solitaire Ring', price: '₹89,999', image: img('products/rings-1.jpg'), categoryId: 'rings' },
    { id: 'r2', name: 'Gold Band Ring', price: '₹34,500', image: img('products/rings-2.jpg'), categoryId: 'rings' },
    { id: 'r3', name: 'Emerald Cocktail Ring', price: '₹1,05,000', image: img('products/rings-3.jpg'), categoryId: 'rings' },
    { id: 'r4', name: 'Platinum Engagement Ring', price: '₹1,48,000', image: img('products/rings-4.jpg'), categoryId: 'rings' },
  ],
  pendants: [
    { id: 'p1', name: 'Diamond Pendant', price: '₹72,400', image: img('products/pendants-1.jpg'), categoryId: 'pendants' },
    { id: 'p2', name: 'Gold Locket Pendant', price: '₹48,900', image: img('products/pendants-2.jpg'), categoryId: 'pendants' },
    { id: 'p3', name: 'Ruby Heart Pendant', price: '₹56,700', image: img('products/pendants-3.jpg'), categoryId: 'pendants' },
  ],
  bridal: [
    { id: 'br1', name: 'Bridal Gold Necklace Set', price: '₹2,45,000', image: img('products/bridal-1.jpg'), categoryId: 'bridal' },
    { id: 'br2', name: 'Royal Bridal Choker Set', price: '₹3,20,000', image: img('products/bridal-2.jpg'), categoryId: 'bridal' },
    { id: 'br3', name: 'Traditional Bridal Set', price: '₹2,85,000', image: img('products/bridal-3.jpg'), categoryId: 'bridal' },
    { id: 'br4', name: 'Bridal Bangles Collection', price: '₹1,95,000', image: img('products/bridal-4.jpg'), categoryId: 'bridal' },
  ],
}

export const categoryMeta = {
  earrings: { label: 'Earrings', description: 'From delicate studs to statement jhumkas — explore our curated earring collection.' },
  bracelets: { label: 'Bracelets', description: 'Elegant bracelets and traditional kadas crafted in gold and diamonds.' },
  necklaces: { label: 'Necklaces', description: 'Timeless necklaces and chokers designed for everyday luxury.' },
  rings: { label: 'Rings', description: 'Solitaires, bands, and cocktail rings for every cherished moment.' },
  pendants: { label: 'Pendants', description: 'Refined pendants and lockets that rest beautifully against the skin.' },
  bridal: { label: 'Bridal Collection', description: 'Exquisite bridal sets handcrafted for your most treasured celebrations.' },
}

export function getProductsByCategory(categoryId) {
  return categoryProducts[categoryId] || []
}

export function getAllProducts() {
  return Object.values(categoryProducts).flat()
}

export function getBestSellers() {
  return [
    categoryProducts.earrings[0],
    categoryProducts.rings[0],
    categoryProducts.necklaces[0],
    categoryProducts.bracelets[0],
    categoryProducts.pendants[0],
    categoryProducts.earrings[1],
    categoryProducts.bridal[0],
    categoryProducts.bracelets[3],
  ]
}

export function getCategoryLabel(categoryId) {
  return categoryMeta[categoryId]?.label || categoryId
}
