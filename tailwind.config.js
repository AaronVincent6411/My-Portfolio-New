/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing:{
        '100': '25rem',
        '101': '26rem',
        '105': '30rem',
        '110': '35rem',
        '115': '40rem',
        '120': '45rem',
        '125': '50rem',
        '130': '55rem',
      }
    }
  },
  plugins: []
};