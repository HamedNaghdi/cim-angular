/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    './src/app/pages/admin/**/*.{html,ts,scss}',
    "./libs/ui/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

