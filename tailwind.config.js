/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#090807',
          900: '#0F0D0B',
          800: '#181411',
          700: '#241E1A',
        },
        spice: {
          orange: '#E05A2B',
          crimson: '#B8332A',
          gold: '#D4AF37',
          amber: '#F59E0B',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F5EFE6',
          200: '#E6DEC8',
          400: '#B5AA99',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 10px 35px -10px rgba(224, 90, 43, 0.35)',
        'gold-glow': '0 10px 35px -10px rgba(212, 175, 55, 0.22)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
