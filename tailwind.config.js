/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
      'secondary' : "#55ccc2",
      "slate-gray": "#6D6D6D",
    }
    },
    
  },
  plugins: [require("daisyui")],

}

