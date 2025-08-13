module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0b1220',
          accent: '#ff6b6b'
        },
        spacing: {
          '128': '32rem'
        },
        backgroundImage: {
            'hero-pattern': "url('./src/assets/RegistrationBG.png')",
        },
        fontFamily: {
            yourfont: [ 'sans-serif', 'romance'],
          },
      }
    },
    plugins: [],
  }