/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '2xl':"1.5rem"
      },
      width: {
        '125': '31.25rem',
      },
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
        'pantone-266c':'#5d5dff',
        'pantone-2736':'#5151f7',
        'pantone-2727c':'#2b7de1',
        'pantone-2726c':'#1861d8',
        'pantone-212c':'#ec4899',
        'pantone-213c':'#f12f82',
        'pantone-7465c':'#3cbfae',
        'pantone-7473c':'#16a794',
       'pantone-426c': '#25282c',
       'pantone-7479c': '#00ce7d',
       'pantone-7731c': '#09a668',
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
      },
      boxshadow3xl:{
        '3xl':':50px 40px 10px',
      },
    },
  },
  plugins: [],
}
