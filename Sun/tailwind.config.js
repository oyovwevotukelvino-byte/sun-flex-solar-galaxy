/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          50: '#0a0f2a',
          100: '#050816',
        },
        solar: {
          gold: '#FDB813',
        },
        electric: {
          500: '#2B6CFF',
          600: '#1B4BFF',
        },
      },
      boxShadow: {
        galaxy: '0 0 0 1px rgba(253,184,19,0.25), 0 0 24px rgba(253,184,19,0.20), 0 0 60px rgba(43,108,255,0.10)',
      },
      backdropBlur: {
        20: '20px',
      },
    },
  },
  plugins: [],
}

