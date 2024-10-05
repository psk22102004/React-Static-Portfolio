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
        'dblack' : '#669af4' , 
        'sblack' : '#CADCFC' ,
        'dgreen' : '#00246B'
      }
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}