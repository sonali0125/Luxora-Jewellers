/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        luxora: {
          primary: '#E8E0D4',
          secondary: '#F6F1EA',
          card: '#FFFFFF',
          gold: '#C7A56A',
          text: '#2B2B2B',
          border: '#E0D7CB',
          muted: '#6B6560',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        heading: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(43, 43, 43, 0.06)',
        lift: '0 12px 40px rgba(43, 43, 43, 0.1)',
        editorial: '0 20px 60px rgba(43, 43, 43, 0.08)',
      },
      borderRadius: {
        editorial: '2rem',
      },
    },
  },
  plugins: [],
}
