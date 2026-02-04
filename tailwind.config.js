module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sap: {
          blue: "#0070b1",
          deep: "#001e4d",
          cyan: "#008fd3",
          orange: "#f0ab00",
          grey: "#f4f4f4",
        }
      },
      fontFamily: {
        sans: ['72', '72Full', 'Arial', 'Helvetica', 'sans-serif'],
      },
      borderRadius: {
        'sap': '0.5rem',
      }
    },
  },
  plugins: [],
}
