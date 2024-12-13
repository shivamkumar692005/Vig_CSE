/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vblue: "#1152ae",
        yellow: '#FBB03B',
        backColor : '#11458c'
      },
      height: {
        "screen-minus-4": "calc(100vh - 4.15rem)",
      },
      fontFamily: {
          'dm' : ['DM Serif Display']
      }
    },
  },
  plugins: [],
};
