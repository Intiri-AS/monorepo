/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      'xs': '576px',
      ...defaultTheme.screens
    },
    extend: {
      backgroundImage: {
        'landing-img': "url('/assets/images/landing-img.png')",
        'img-01': "url('/assets/images/img-01.png')",
        'logo': "url('/assets/images/intiri-logo.svg')",
        'quote': "url('/assets/icon/quote.svg')",
        'arrow-left': "url('/assets/icon/arrow-left.svg')",
        'arrow-right': "url('/assets/icon/arrow-right.svg')",
      },
      colors: {
        primary: {
          DEFAULT: 'var(--ion-color-primary)',
          shade: 'var(--ion-color-primary-shade)',
          tint: 'var(--ion-color-primary-tint)',
        },
        secondary: {
          DEFAULT: 'var(--ion-color-secondary)',
          shade: 'var(--ion-color-secondary-shade)',
          tint: 'var(--ion-color-secondary-tint)',
        },
        light: {
          DEFAULT: 'var(--ion-color-light)',
          shade: 'var(--ion-color-light-shade)',
          tint: 'var(--ion-color-light-tint)',
        },
        dark: {
          DEFAULT: 'var(--ion-color-dark)',
          shade: 'var(--ion-color-dark-shade)',
          tint: 'var(--ion-color-dark-tint)',
        },
        'black-1': {
          DEFAULT: 'var(--ion-color-black-1)',
          shade: 'var(--ion-color-black-1-shade)',
          tint: 'var(--ion-color-black-1-tint)',
        },
        'black-2': {
          DEFAULT: 'var(--ion-color-black-2)',
          shade: 'var(--ion-color-black-2-shade)',
          tint: 'var(--ion-color-black-2-tint)',
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '12rem',
      }
    },
    fontFamily: {
      "Fira-Sans": ["Fira-Sans, sans-serif"],
      "Allison": ["Allison, sans-serif"]
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms')
,require('@tailwindcss/line-clamp')
,require('@tailwindcss/typography')
],
};
