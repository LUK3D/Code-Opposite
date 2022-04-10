import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        dark: {
          50:'#4B4D53',
          100: '#2D2E32',
          200:'#25262A',
        },
        text:{
            100:'#FBFBFB'
        },
        primary:{
          100:'#FF4A57'
        }
      },
    },
  },
  plugins: [],
})