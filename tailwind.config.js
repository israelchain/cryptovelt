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
        // Real licensed fonts recovered via CRY-237 (Israel's nouvelle-base
        // rebuild) — replaces the Rubik/Heebo approximation from CRY-235.
        display: ['Discovery Fs', 'Heebo', 'Assistant', 'sans-serif'],
        hebrew: ['Talent FS', 'Heebo', 'Assistant', 'sans-serif'],
        sans: ['Talent FS', 'Heebo', 'Assistant', 'sans-serif'],
      },
      colors: {
        // Ink typography on white canvas — 900 is the exact Figma "כהה" dark
        // token (#1C1C1C), extracted live via mcp__figma__get_figma_data
        // (fileKey QmrAocByUD7qxzxq9Rc7uu, node 2001:56) — CRY-235.
        ink: {
          950: '#141414',
          900: '#1C1C1C',
          800: '#2b2b2b',
          700: '#3f3f3f',
          600: '#5a5a5a',
          500: '#7a7a7a',
          400: '#a3a3a3',
        },
        // Primary accent — exact Figma "כחול" token (#4A4FD9). Overrides
        // Tailwind's built-in `indigo` scale below too, since most components
        // already use text-indigo-*/border-indigo-* utilities directly.
        brand: {
          50: '#eef0fc',
          100: '#dce0f9',
          200: '#b9c1f3',
          300: '#96a3ed',
          400: '#7784e3',
          500: '#4A4FD9',
          600: '#3a3fc0',
          700: '#2e32a0',
          800: '#242780',
          900: '#1b1e63',
        },
        indigo: {
          50: '#eef0fc',
          100: '#dce0f9',
          200: '#b9c1f3',
          300: '#96a3ed',
          400: '#7784e3',
          500: '#4A4FD9',
          600: '#3a3fc0',
          700: '#2e32a0',
          800: '#242780',
          900: '#1b1e63',
        },
        // Bitcoin orange scale — kept for the spinning-coin illustration only;
        // Figma has no orange token (its accent roles are blue/yellow/gradient).
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
        // Deep violet/indigo gradient — exact Figma GRADIENT token stops
        // (radial-gradient(circle at 28% 2%, #6D4FBE 0%, #3A40B7 65%, #262A78 100%)),
        // used on: community banner, footer, large bento cards. CRY-235.
        deep: {
          950: '#1c1f5c',
          900: '#262A78',
          700: '#3A40B7',
          500: '#6D4FBE',
        },
        // Yellow/gold — exact Figma "צהוב" token (#FFC712).
        gold: {
          400: '#FFC712',
          500: '#e5ae00',
          600: '#c79600',
        },
        // Warm white — exact Figma "לבן" token (#FFF6E6), used as text color
        // on dark/blue/gold fills instead of pure white.
        warm: {
          DEFAULT: '#FFF6E6',
        },
        // Light background tint — exact Figma "בהיר" token (#F6F7FA).
        mist: {
          DEFAULT: '#F6F7FA',
        },
        cream: {
          50: '#fdf6e3',
          100: '#fbf0d3',
        },
      },
      borderRadius: {
        // Figma "cards/color blocks" radius = 30px (design-system swatches,
        // node 2001:56) — large image rectangles on the homepage use 32px,
        // close enough to share this token. CRY-235.
        '3xl': '30px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(11, 20, 38, 0.05), 0 12px 32px -12px rgba(11, 20, 38, 0.12)',
        'card-hover': '0 4px 12px rgba(11, 20, 38, 0.06), 0 24px 48px -16px rgba(11, 20, 38, 0.18)',
        'glow-orange': '0 12px 32px -10px rgba(247, 147, 26, 0.5)',
        'glow-orange-lg': '0 16px 44px -8px rgba(247, 147, 26, 0.6)',
        'glow-sky': '0 12px 32px -10px rgba(14, 165, 233, 0.4)',
        'glow-green': '0 12px 32px -10px rgba(10, 193, 142, 0.5)',
        'glow-indigo': '0 12px 32px -10px rgba(74, 79, 217, 0.45)',
        'glow-indigo-lg': '0 16px 44px -8px rgba(74, 79, 217, 0.55)',
        'glow-gold': '0 12px 32px -10px rgba(255, 199, 18, 0.55)',
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
