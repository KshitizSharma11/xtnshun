/** @type {import('tailwindcss').Config} */
export default {
  content: ['./entrypoints/**/*.{html,js,ts,jsx,tsx,css}'], // Ensure it includes .css if Tailwind classes are there
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [],
}
