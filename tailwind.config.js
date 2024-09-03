/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(145deg, rgba(197,223,233,1) 0%, rgba(25,41,79,0.8099614845938375) 71%)',
      }
    },
  },
  plugins: [],
}