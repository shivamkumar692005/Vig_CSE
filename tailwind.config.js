/** @type {import('tailwindcss').Config} */
import path from 'path';
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        vblue: "#1152ae",
        yellow: "#FBB03B",
        backColor: "#11458c",
      },
      height: {
        "screen-minus-4": "calc(100vh - 4.15rem)",
      },
      fontFamily: {
        dm: ["DM Serif Display"],
      },
      backgroundImage: {
        bgUrl: "url('image/bg.webp')",
      },
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
      
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  plugins: [
    daisyui,
  ],
};  
