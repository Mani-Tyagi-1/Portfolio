/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
      text: 'text 5s ease infinite',
    },
      fontFamily: {
        Poppins: "Poppins",
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export const theme = {
//   extend: {
//     animation: {
//       text: 'text 5s ease infinite',
//     },
//     fontFamily: {
//       Poppins: "Poppins",
//       keyframes: {
//         text: {
//           '0%, 100%': {
//             'background-size': '200% 200%',
//             'background-position': 'left center',
//           },
//           '50%': {
//             'background-size': '200% 200%',
//             'background-position': 'right center',
//           },
//         },
//       },
//     },
//   }
// }
//   ;
// export const plugins = [];

