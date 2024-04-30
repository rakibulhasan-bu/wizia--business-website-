/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        divBgColor: "#07292F",
        textSky: "#0FF1F6",
        textSkySecondary: "#14BCB2",
        bgSky: "#0FF1F6",
        textBlack: "#002228",
      },
      container: {
        center: true
      },
      backgroundImage: {
        'banner': "url('/banner-image.png')",
        'trainingBg': "url('/training.png')",
        'statBg': "url('/stat-bg.png')",
      }
    },
  },
  plugins: [],
}