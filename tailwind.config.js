/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '48/100': '48%',
        '9/19': '47%',
        '10/19': '53%',
        '4/5': '80%',
        '77/100': '77%',
        '75/100': '75%',
        '1/3': '30%',
        '35/100': '35%',
        '22/100': '22%',
        '15/100': '20%',
        '67/100': '67%'
      },
      aspectRatio: {
        '57/34': '57 / 34',
      },
    },
  },
  plugins: [],
}
