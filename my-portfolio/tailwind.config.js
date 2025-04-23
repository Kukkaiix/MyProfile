/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        background: '#F6F4FD',
        card: '#CFC3F3',
        primary: '#1A1A7A',
        accent: '#4B4BE1',
        hoverLight: '#EAE6FF',
      },
      boxShadow: {
        neumorphism: '8px 8px 16px #1a1a1a, -8px -8px 16px #262626',
      },
    },
  },
  plugins: [],
}