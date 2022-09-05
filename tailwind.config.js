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
        'neon-blue-hover': '#4b4acf',
        'medium-slate-blue': '#7070FF',
        'magenta-process': '#EA348F',
        'rose-bonbon': '#EC4899',
        'green-pigment': '#16A34A',
        'green-pantone': '#18B451',
        'white-grey': '#D9E0EA',

  
      },
      container: {
        padding: '2rem',
        screens: {
          'sm': '72rem',
          'md': '72rem',
          'lg': '72rem',
          'xl': '72rem',
          '2xl': '72rem',
      },
        center: true,
      },
      scale: {
        '101': '1.1',
      },
      letterSpacing: {
        "m-wide": '.01em'
      }
    },
  },
  plugins: [],
}
