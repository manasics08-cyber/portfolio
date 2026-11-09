/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#050A06',
        surfaceCard: '#080E09',
        surfaceHover: '#0E1710',
        primary: {
          DEFAULT: '#3DAA5C',
          glow: '#4ADE80',
          dark: '#2d8245',
          light: '#65d487',
        },
        borderMuted: 'rgba(255, 255, 255, 0.08)',
        borderHover: 'rgba(61, 170, 92, 0.4)',
        bodyMuted: '#B5B5B5',
        subtle: '#7E8680',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'green-glow': '0 0 25px -5px rgba(61, 170, 92, 0.35)',
        'green-glow-lg': '0 0 50px -10px rgba(61, 170, 92, 0.45)',
        'green-pill': '0 0 20px rgba(61, 170, 92, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

