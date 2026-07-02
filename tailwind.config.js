/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Frank Ruhl Libre"', 'Heebo', 'serif'],
        hebrew: ['Heebo', 'Assistant', 'sans-serif'],
        sans: ['Heebo', 'Assistant', 'sans-serif'],
      },
      colors: {
        // Deep night-blue canvas
        ink: {
          950: '#050810',
          900: '#070b16',
          800: '#0b1120',
          700: '#111a2e',
          600: '#1a2540',
          500: '#263353',
          400: '#3b4a70',
        },
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gold: {
          200: '#fde9b8',
          300: '#fcd97d',
          400: '#f7c548',
          500: '#eaa820',
          600: '#c98a10',
        },
      },
      boxShadow: {
        'glow-gold': '0 0 24px -4px rgba(247, 197, 72, 0.45)',
        'glow-gold-lg': '0 8px 40px -6px rgba(247, 197, 72, 0.55)',
        'glow-cyan': '0 0 30px -6px rgba(56, 189, 248, 0.4)',
        'glow-violet': '0 0 30px -6px rgba(139, 92, 246, 0.4)',
        'glow-green': '0 8px 40px -8px rgba(74, 222, 128, 0.45)',
        card: '0 8px 32px -8px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(12px, -20px) scale(1.06)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '150% center' },
          '100%': { backgroundPosition: '-50% center' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 18px -4px rgba(247, 197, 72, 0.35)' },
          '50%': { boxShadow: '0 0 34px -2px rgba(247, 197, 72, 0.65)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 12s ease-in-out infinite',
        shimmer: 'shimmer 5s linear infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
