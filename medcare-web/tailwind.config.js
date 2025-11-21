/** @type {import('tailwindcss').Config} */
// Force reload
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#fcbf49',
          hover: '#e0ab35',
        },
        secondary: {
          main: '#1a659e',
          light: '#e0f2fe',
        },
        neutral: {
          900: '#0b0f0f',
          800: '#1F2937',
          600: '#4B5563',
          500: '#6B7280',
          100: '#F3F4F6',
          50: '#F9FAFB',
        },
        background: {
          default: '#FFFFFF',
          alt: '#FDFCF6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        pill: '9999px',
        card: '24px',
      },
      boxShadow: {
        card: '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        button: '0 4px 6px -1px rgba(252, 191, 73, 0.2)',
      },
      spacing: {
        section: '6rem',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
