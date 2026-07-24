/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        marca: '#154741',        // verde institucional
        floresta: '#12372D',     // verde-floresta profundo
        'verde-esc': '#0E2E25',  // verde mais profundo (fundos)
        'verde-claro': '#1F493B',
        salvia: '#8DA493',
        'salvia-claro': '#B8C5B7',
        dourado: '#BE9A3C',
        'dourado-claro': '#D8BC72',
        marfim: '#F7F4ED',
        'marfim-esc': '#EEE8DB',
        card: '#FFFEFB',
        bege: '#DBCEBC',
        grafite: '#27352F',
        tinta: '#25302B',        // texto sobre claro
        'tinta-suave': '#5C665E',
        erro: '#A93B30',
        sucesso: '#3E7C4F',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cormorant', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      maxWidth: {
        editorial: '1280px',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,45,40,.04), 0 12px 34px rgba(20,45,40,.09)',
        'card-hover': '0 6px 18px rgba(20,45,40,.10), 0 26px 60px rgba(20,45,40,.16)',
        float: '0 10px 40px rgba(14,46,37,.16)',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1.06)' },
          '100%': { transform: 'scale(1.14)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 22s ease-out forwards',
        'fade-in': 'fade-in .8s ease forwards',
      },
    },
  },
  plugins: [],
}
