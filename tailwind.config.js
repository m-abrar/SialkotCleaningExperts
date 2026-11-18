/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deepNavy: '#0B1F3A',
          darkNavy: '#08172B',
          blue: '#1479F8',
          blueHover: '#0d65d4',
          lightBlue: '#EAF3FF',
          softBg: '#F6F8FC',
          darkText: '#17243A',
          mutedText: '#667085',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 31, 58, 0.06), 0 2px 6px -1px rgba(11, 31, 58, 0.04)',
        'card': '0 10px 30px -4px rgba(11, 31, 58, 0.08), 0 4px 12px -2px rgba(11, 31, 58, 0.04)',
        'elevated': '0 20px 40px -8px rgba(11, 31, 58, 0.14)',
      }
    },
  },
  plugins: [],
}
