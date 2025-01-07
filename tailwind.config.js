/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#f9b70eff',
        secondary: '#f9b60e7b',
        accent: '#ccced0',
        dark: '#3d3e4c',
        lightDark: '#55566d',
        light: '#dde0e4',
        lightGray: '#64646435'
      }
    },
    fontFamily: {
      'lexend':['Lexend', 'sans'],
      'orbitron': ['Orbitron','sans']
    }
  },
  plugins: [],
}

