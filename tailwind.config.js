/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oasim1': '#00153D',
        'oasim2': '#0A2472',
      },
      width: {
        '90': '90%',
      },
      screens: {
        "xsm": "320px",
        "msm": "375px",
        "sm": "425px",
        "lsm": "640px",
        "md": "768px",
        "lmd": "992px",
        "lg": "1124px",
        "llg": "1280px",
        "xl": "1350px",
        "xxl": "1440px",
        "xxxl": "1640px",
      },
    },
  },
  plugins: [],
}
