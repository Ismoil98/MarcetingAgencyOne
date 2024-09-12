/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: {
          DEFAULT: '#A2A2FC'
        },
        first: {
          DEFAULT: '#232323'
        },
        second: {
          DEFAULT: '#F5EE6E'
        },
        third: {
          DEFAULT: '#DFE0DF'
        },
        blackSecond: {
          DEFAULT: '#242424'
        },
        blackThird: {
          DEFAULT: '#3A3A3A'
       
        },
        blackfour: {
          DEFAULT: '#121212'
        },
      },
      borderRadius: {
        'custom': '24px',
        // 'ellipse': '50% / 35%',
        'second': '12px',
      },
    },
  },
  plugins: [],
}


// theme: {
//   extend: {
//     boxShadow: {
//       'custom': '-30px 34px 54px 0px rgba(4, 20, 43, 0.09)',
//     },
//     colors: {
//       pink: {
//         light: "rgba(163, 120, 255, 0.1)",
//         DEFAULT: '#A378FF'
//       },
//       lines: {
//         light: '#f5f0ff',
//         DEFAULT: '#E6ECEE',
//         secondary: '#F7FBFC'
//       },
//       btnBg: {
//         DEFAULT: '#171717'
//       },
//       btnsBg: {
//         DEFAULT: '#C5F1A3'
//       },
//       btnBg3: {
//         DEFAULT: '#F7FBFC'
//       },
//       technalogies: {
//         DEFAULT: '#6900FF'
//       },
//       yellowes: {
//         DEFAULT: '#FDE049'
//       }
//       // Add more custom colors here
//     },
    // borderRadius: {
    //   'custom': '5px',
    //   'ellipse': '50% / 35%',
    // },
//     container: {
//       center: true,
//       padding: '10px',
//     },
//     screens: {
//       'small': '350px',

//       'hard' : '480px',

//       'sm': '640px',

//       'md': '768px',

//       'lg': '1055px',

//       'xl': '1300px',

//       '2xl': '1680px',
//     },
//     fontFamily: {
//       sans: ['SF Pro Display', 'serif'],
//       // Add more custom font families here
//     },
//   },
// },
