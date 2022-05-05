module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '128':'32rem',
        '200':'80'
      },
      colors: {
        clifford: '#da373d',
        primary: '#FF6363',
        secondary:{
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily:{
        body: 'Nunito'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}

