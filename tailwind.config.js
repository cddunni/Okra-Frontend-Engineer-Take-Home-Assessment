// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        footerBg: "url('/src/assets/svg/word-mark.svg')",
        footerGraphics: "url('/src/assets/svg/graphics.svg')",
      },
    },
    backgroundSize: {
      '90': '90%'
    },
    colors: {
      button_disabled: '#C7C7E1',
      on_primary: '#FEFEFF',
      primary: '#202022',
      primary_action: '#824FE7',
      primary_action_hover: '#A277FF',
      secondary: '#5E5E60',
      secondary_action: '#F2F2F3',
      neutral_hover: '#303032',
      subdued: '#909092',
      subdue: '#E6E6E7',
      label: '#464649',
      tertiary_highlight: '#DADADB',
      error: "#FF401E",
      purple_400: "#D2BCFF",
      purple_500: '#BA9AFF',
      orange_400: '#FFB693',
      orange_500: '#FF8C51',
      tertiary_dim: '#E6E6E7',
      overlay: '#46464929'
    },
    boxShadow: {
      btnShadowOne: '0px 0.5px 0px 0px rgba(86, 94, 113, 0.08)',
      btnShadowTwo: '0px 0.5px 0px 0px rgba(63, 71, 89, 0.12)',
      btnShadowThree: '0px 1px 0.5px 0px rgba(0, 0, 0, 0.16)',
      btnPrimary: '0px 0px 0px 4px rgba(137, 87, 239, 0.2)',
      btnPressed: '0px -1px 2px 0px rgba(34, 44, 59, 0.48) inset',
      btnSecondaryFocus: '0px 0px 0px 4px rgba(11, 10, 12, 0.16)',
      inputPressed: '0px 0px 0px 4px rgba(137, 87, 239, 0.2)',
      error: '0px 0px 0px 4px rgba(255, 64, 30, 0.24)',
      dropdownShadow: '0px 8px 8px 0px rgba(0, 0, 0, 0.08)',
      cardShadow: '0px 1px 0.5px 0px rgba(0, 0, 0, 0.16)'
    },
    fontFamily: {
      pptelegraph_r: ['pptelegraph_r', 'sans-serif'],
      pptelegraph_ul: ['pptelegraph_ul', 'sans-serif'],
      pptelegraph_ub: ['pptelegraph_ub', 'sans-serif']
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.hide_tap': {
          '-webkit-tap-highlight-color':'rgba(255, 255, 255, 0)'
        }
      })
    })
  ],
}

