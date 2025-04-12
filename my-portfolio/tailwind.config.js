export default {
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
    },
  },
  plugins: [],
}