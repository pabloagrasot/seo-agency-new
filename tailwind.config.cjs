/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation:{
        'fade-in-one': 'fadeIn 1s cubic-bezier(0, 0, 0.2, 1)',
        'blinking': 'blink 1s step-start infinite'
      },
      keyframes:{
        blink:{
          '50%': {opacity: '0'}
        }
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
