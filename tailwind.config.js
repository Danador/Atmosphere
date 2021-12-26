const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: [ './src/**/*.{htm,md,njk}'],
  darkMode: 'class', // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/typography'),
    require('@savvywombat/tailwindcss-grid-areas')
  ],
  variants: {
    extend: {},
  },
  theme: {
    screens: {
      // xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        '2xl': '80px',
      },
    },
    gridTemplateAreas: {
      'layout': [
        'sale',
        'header',
        'main',
        'footer',
      ],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            table: {
              '@apply overflow-x-auto whitespace-nowrap inline-block md:table -mx-4 px-4 md:p-0 md:mx-0 md:w-full w-[calc(100%+32px)]': ''
            },
            thead : {
              '@apply bg-gray-200 w-max border-0': '',
              tr : {
                th : {
                  '@apply first:pl-2 pb-0 last:pr-2 px-2': ''
                },
              },
            },
            tbody: {
              '@apply w-max': '',
              tr : {
                '@apply border-0 even:bg-gray-200': '',
                td :{
                  '@apply first:pl-2 pb-0 last:pr-2 px-2': ''
                }
              },
            },
            ul: {
              li: {
                '&::before': {
                  '@apply bg-black': ''
                }
              },
              ul: {
                li: {
                  '&::before': {
                    '@apply ring-1 ring-inset ring-black bg-transparent': ''
                  }
                }
              }
            },
          },
        }
      }),
      spacing: {
        '4.5': '1.125rem',
        '6.5': '1.625rem',
        '15': '3.75rem',
      },
      borderRadius: {
        '2.5xl': '20px',
        '4xl': '30px',
      },
      gridTemplateColumns: {
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        'a1a': 'auto 1fr auto',
        full: '100%'
      },
      gridTemplateRows: {
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        'a1a': 'auto 1fr auto',
        full: '100%',
        'layout': 'auto auto 1fr auto',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        alto: '#D3D3D3',
        mercury: '#E5E5E5',
        alabaster: '#FAFAFA',
        gallery: '#F0F0F0',
        brightsun:'#FFDC49',
        'gray-dusty': '#999999',
        'gray-dove': '#666666',
        'river-bed': '#4B5563',
        silver: '#C4C4C4',
        silverdark: '#AAAAAA',
        wildsand: '#F4F4F4',
        mineshaft: '#333333',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink
      },
      cursor: {
        grab: 'grab',
      },
      boxShadow: {
        nav: '0 0px 11px rgb(0 0 0 / 20%)',
        button: '0px 0px 10px rgb(0 0 0 / 15%)',
        card: '0px 4px 10px rgb(0 0 0/ 5%)'
      },
      height: {
        max: 'max-content'
      },
      fontSize: {
        '1.5xl': '22px',
        '2.5xl': '26px',
        '2.6xl': '28px',
        '4.5xl': '40px',
      }
    },
  },
}
