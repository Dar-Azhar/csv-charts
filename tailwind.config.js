/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}", 
    "./public/index.html",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', 
        'custom-19': 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        'custom-18': "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      },
    },
  },
  plugins: [],
}

