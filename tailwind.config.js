/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "merienda": "Merienda",
      },
      colors: {
        "mybg": "#F2EDDF",
        "myPrimary": "#3C73A0",
        "mySecondary": "#E97A94",
      },
      screens: {
        "4xl": "1921px",
        'max-992':{'max' : '992px'},
        'max-768':{'max' : '768px'},
        'max-576':{'max' : '576px'},
      },
      spacing: {
        "hero-lg": "calc(100vh - 72px)",
        "hero-md": "calc(100vh - 67px)",
        "45": "45%",
        "48": "48%",
      }
    },
  },
  plugins: [],
}

