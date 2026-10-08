/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050508',
        surface: {
          DEFAULT: '#0b0b12',
          card: '#0f0f1b',
          border: 'rgba(168, 85, 247, 0.2)',
          'border-gold': 'rgba(234, 179, 8, 0.3)',
        },
        arv: {
          black: '#040407',
          deep: '#07070d',
          card: '#0c0b16',
          purple: {
            DEFAULT: '#8b5cf6',
            dark: '#4c1d95',
            glow: '#a855f7',
            deep: '#2e1065',
            neon: '#c084fc',
          },
          gold: {
            DEFAULT: '#eab308',
            light: '#fde047',
            dark: '#ca8a04',
            champagne: '#fef08a',
            metallic: '#d4af37',
            gradient: '#e5c07b',
          },
        },
      },
      fontFamily: {
        podium: ['"Kanit"', '"Syne"', 'sans-serif'],
        kanit: ['"Kanit"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-metallic': 'linear-gradient(135deg, #fef08a 0%, #eab308 50%, #ca8a04 100%)',
        'gold-metallic-hover': 'linear-gradient(135deg, #ffffff 0%, #fde047 50%, #eab308 100%)',
        'purple-glow': 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(5, 5, 8, 0) 70%)',
        'purple-gold': 'linear-gradient(135deg, #7e22ce 0%, #eab308 100%)',
      },
      boxShadow: {
        'purple-sm': '0 0 15px rgba(168, 85, 247, 0.2)',
        'purple-md': '0 0 30px rgba(168, 85, 247, 0.3)',
        'purple-lg': '0 0 50px rgba(168, 85, 247, 0.45)',
        'gold-sm': '0 0 15px rgba(234, 179, 8, 0.25)',
        'gold-md': '0 0 30px rgba(234, 179, 8, 0.4)',
        'card-glow': '0 10px 40px -10px rgba(76, 29, 149, 0.3)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        'shine': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 5s ease-in-out infinite',
        'shine': 'shine 2.5s infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
}
