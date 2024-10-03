const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),

  ],
  theme: {
    extend: {
      colors :{
        'dblack' : '#0e0e0e' , 
        'sblack' : '#171718' ,
        'dgreen' : '#28e98c'
      }
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}