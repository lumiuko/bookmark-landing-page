/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        blue: '#5267DF',
        red: '#FA5959',
        gray: '#9194A2',
        line: '#dbdff5',
        overlay: 'hsl(229 31% 21% / 95%)',
        'grayish-blue': '#5b5f74',
        'line-2': '#dedfe3',
        'line-3': '#4e5368',
        'dark-blue': '#242A45',
        'gray-primary': '#9295a2',
        'light-gray': '#F7F7F7',
        'dark-gray': '#595d72',
        'very-light-gray': 'rgb(36 42 69 / 25%)'
      }
    },
    fontSize: {
      h1: '3rem', // 48px
      h2: '2rem', // 32px
      h3: '1.875rem', // 30px
      h4: '1.5rem', // 24px
      h5: '1.25rem', // 20px
      lg: '1.125rem', // 18px
      main: '1rem', // 16px
      md: '0.9375rem', // 15px
      sm: '0.875rem', // 14px
      xs: '0.75rem' // 12px
    },
    lineHeight: {
      h1: '3.25rem', // 52px
      h2: '3.25rem', // 52px
      h3: '2.5rem', // 40px
      h4: '3.25rem', // 52px
      h5: '1.5rem', // 24px
      lg: '1.75rem', // 28px
      main: '1.0625rem', // 17px
      md: '1.5625rem', // 25px
      sm: '1.75rem', // 28px
      xs: '2.5rem' // 40px
    },
    borderRadius: {
      sm: '5px',
      md: '15px'
    },
    boxShadow: {
      btn: '0px 8px 8px -4px rgba(73, 93, 207, 0.20)',
      card: '0px 10px 20px -5px rgba(73, 93, 207, 0.20)'
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    screens: {
      xl: '1110px'
    }
  },
  plugins: []
}
