module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      'justify-around': 'justify-content: flex-around',
      'justify-between': 'justify-content: flex-between',
    },
    extend: {
      backgroundImage: (theme) => ({
        'blue-pattern': "url('src/assets/imgs/bg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
