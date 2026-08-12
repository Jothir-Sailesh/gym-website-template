/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#E10600', // Premium Athletic Red
          hover: '#FF1E17',
          dark: '#B30000',
          alpha: 'rgba(225, 6, 0, 0.15)',
        },
        dark: {
          bg: '#0A0A0A',
          surface: '#151515',
          card: '#1D1D1D',
          border: '#2A2A2A',
          hover: '#252525',
        },
        light: {
          DEFAULT: '#F4F1EA',
          muted: '#A3A3A3',
          darker: '#E2DEC9',
        }
      },
      fontFamily: {
        display: ['Syne', 'Oswald', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.25em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
