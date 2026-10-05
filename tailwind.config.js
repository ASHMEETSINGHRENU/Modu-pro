/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#8C460C',       // Dark Burnt Orange
          'primary-dark': '#703709', // Deeper Burnt Orange
          'primary-light': '#a65410',
          secondary: '#D17E3A',     // Warm Orange
          'secondary-hover': '#bd6d2c',
          green: '#47704C',         // Deep Green
          'green-dark': '#38593c',  // Forest Green
          'green-light': '#588b5e',
          'green-surface': '#2f4b33',
          offwhite: '#F7F4EF',      // Off-White background
          dark: '#1F241F',          // Dark Text
          border: '#E5E0D8',        // Light Border
          muted: '#636D64',         // Muted industrial text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'industrial': '0 2px 8px -1px rgba(31, 36, 31, 0.08), 0 1px 3px -1px rgba(31, 36, 31, 0.05)',
        'industrial-hover': '0 12px 24px -4px rgba(71, 112, 76, 0.12), 0 4px 8px -2px rgba(140, 70, 12, 0.08)',
        'industrial-lg': '0 20px 30px -10px rgba(31, 36, 31, 0.15)',
      }
    },
  },
  plugins: [],
}
