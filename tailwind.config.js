/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'eerie-black': '#151719',
        'raisin-black': '#25282C',
        'cadet-grey': '#9BA9B4',
        'alise-blue': '#D9E3EA',
        'neon-blue': '#5D5DFF',
        'magenta-process': '#EA348F',
        'rose-bonbon': '#EC4899',
        'green-pigment': '#16A34A',
        'green-pantone': '#18B451',
  
      },
      container: {
        screens: {
          'sm': '72rem',
          'md': '72rem',
          'lg': '72rem',
          'xl': '72rem',
          '2xl': '72rem',
      },
        center: true,
      },
    },
  },
  plugins: [],
}
