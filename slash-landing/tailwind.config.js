/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slash-gold': '#D4AF37',
        'slash-dark': '#0A0A0A',
        'slash-gray': '#1A1A1A',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'progress': 'progress 2s ease-out',
        'gradient-x': 'gradient-x 6s ease infinite',
         'spin-slow': 'spin-slow 4s linear infinite',
         'float': 'float 3s ease-in-out infinite',
         'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
       'progress': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'float': {
           '0%, 100%': { transform: 'translateY(0px)' },
           '50%': { transform: 'translateY(-10px)' },
         },
         'pulse-glow': {
           '0%, 100%': { opacity: '0.4' },
           '50%': { opacity: '0.8' }
         }
      },
    },
  },
  plugins: [],
}