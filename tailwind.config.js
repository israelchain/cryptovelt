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
        // Ink typography on white canvas
        ink: {
          950: '#060b16',
          900: '#0b1426',
          800: '#16233d',
          700: '#243352',
          600: '#3d4a63',
          500: '#64748b',
          400: '#94a3b8',
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
        // Bitcoin orange scale
        btc: {
          50: '#fff8ef',
          100: '#fff3e2',
          200: '#ffe1b8',
          300: '#ffc36e',
          400: '#ffab3d',
          500: '#f7931a',
          600: '#e07f0a',
          700: '#b96406',
          800: '#934e08',
          900: '#78410c',
        },
        mint: {
          50: '#e6faf4',
          400: '#2dd4a8',
          500: '#0ac18e',
          600: '#059f75',
        },
      },
      boxShadow: {
        card: '0 2px 8px rgba(11, 20, 38, 0.05), 0 12px 32px -12px rgba(11, 20, 38, 0.12)',
        'card-hover': '0 4px 12px rgba(11, 20, 38, 0.06), 0 24px 48px -16px rgba(11, 20, 38, 0.18)',
        'glow-orange': '0 12px 32px -10px rgba(247, 147, 26, 0.5)',
        'glow-orange-lg': '0 16px 44px -8px rgba(247, 147, 26, 0.6)',
        'glow-sky': '0 12px 32px -10px rgba(14, 165, 233, 0.4)',
        'glow-green': '0 12px 32px -10px rgba(10, 193, 142, 0.5)',
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
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 8px 24px -8px rgba(247, 147, 26, 0.35)' },
          '50%': { boxShadow: '0 12px 40px -6px rgba(247, 147, 26, 0.6)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 12s ease-in-out infinite',
        shimmer: 'shimmer 5s linear infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'pulse-soft': 'pulse-soft 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
