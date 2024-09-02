import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,jsx}",
    "./components/**/*.{ts,tsx,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "480px", //min-width 480px
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      spacing: {
        2.25: "9px",
        3.75: "15px",
        4.5: "18px",
        5.75: "23px",
        7.25: "29px",
        7.75: "31px",
        9.5: "38px",
        11.5: "46px",
        12.75: "51px",
        13: "52px",
        14.75: "59px",
        15: "60px",
        17.5: "70px",
        18.5: "74px",
        19.25: "77px",
        20.5: "82px",
        21.25: "85px",
        25.5: "98px",
        28.5: "114px",
        29: "116px",
        31.75: "127px",
        35: "140px",
        36.5: "146px",
        39: "156px",
        43: "172px",
        45: "180px",
        46.25: "185px",
        47.5: "190px",
        55: "220px",
        57.5: "230px",
        61: "244px",
        65: "260px",
        71.5: "287px",
        75: "300px",
        121.5: "486px",
        131.5: "526px",
        177.25: "709px",
        181.5: "726px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        "linear-grad-blue-10": "linear-gradient(to top, #5E66D6, #4956BA, #777FFA)",
        "linear-grad-yellow-10": "linear-gradient(126deg, #f5a623, #f76b1c)",
        "linear-grad-blue-20" : "linear-gradient(95deg,#64afef,#248ae4 50%,#244ee4 100%)",
      }),
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        transparent: "transparent",
        current: "currentColor",
        white: {
          10: "#FFFFFF",
          20: "#E0E0E0",
          30: "#BDBDBD",
        },
        green: {
          10: "#70FF00",
        },
        black: {
          10: "#4F4F4F",
          20: "#333333",
          30: "#2D2D2D",
          40: "#222222",
          50: "#161616",
          60: "#000000",
          70:"#717171",
        },
        grey: {
          10: "#808080",
          20: "#C5C5C5",
          30: "#C9C9C9",
          40: "#48484880",
          50: "#F9F9F9"
        },
        purple: {
          10: "#FF4500",
        },
        blue:{
          "10": "#646EDF",
          "20":"#0c5397"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      variants: {
        width: ["responsive", "hover", "focus", "group-hover"],
        display: ["responsive", "hover", "focus", "group-hover"],
        transform: ["responsive", "hover", "focus", "group-hover"],
        scale: ["responsive", "hover", "focus", "group-hover"],
        extend: {
          animation: ["hover", "focus", "group-hover"],
          grayscale: ["hover", "focus", "group-hover"],
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge: {
//     content: [
//       "./src/modules/**/*.{js,jsx,ts,tsx}",
//       "./src/common/**/*.{js,jsx,ts,tsx}"
//     ],
//     options: { safelist: [] }
//   },
//   important: true,
//   theme: {
//     screens: {
//       xs: "480px", //min-width 480px
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1280px",
//       "2xl": "1440px"
//     },
//     extend: {
//       spacing: {
//         2.25: "9px",
//         3.75: "15px",
//         4.5: "18px",
//         5.75: "23px",
//         7.25: "29px",
//         7.75: "31px",
//         9.5: "38px",
//         11.5: "46px",
//         12.75: "51px",
//         13: "52px",
//         14.75: "59px",
//         15: "60px",
//         17.5:"70px",
//         18.5: "74px",
//         19.25: "77px",
//         20.5: "82px",
//         21.25: "85px",
//         25.5: "98px",
//         28.5: "114px",
//         29: "116px",
//         31.75: "127px",
//         35: "140px",
//         36.5: "146px",
//         39: "156px",
//         43:"172px",
//         45: "180px",
//         46.25: "185px",
//         47.5:"190px",
//         55: "220px",
//         57.5: "230px",
//         61: "244px",
//         65: "260px",
//         71.5:"287px",
//         75: "300px",
//         121.5: "486px",
//         131.5: "526px",
//         177.25:"709px",
//         181.5: "726px"
//       },
//       colors: {
//         transparent: "transparent",
//         current: "currentColor",
//         white: {
//           10: "#FFFFFF",
//           20: "#E0E0E0",
//           30: "#BDBDBD"
//         },
//         green: {
//           10: "#70FF00"
//         },
//         black: {
//           10: "#4F4F4F",
//           20: "#333333",
//           30: "#2D2D2D",
//           40: "#222222",
//           50: "#161616",
//           60:"#000000",
//         },
//         grey:{
//           10:"#808080",
//           20:"#C5C5C5",
//         },
//         purple:{
//           10:"#FF4500",
//         }
//       },
//       fontSize: {
//         "ft12-18": [
//           "12px",
//           {
//             //Roboto Regular
//             letterSpacing: "0em",
//             lineHeight: "18px"
//           }
//         ],
//         "ft50-59": [
//           "50px",
//           {
//             //Roboto Regular
//             letterSpacing: "0em",
//             lineHeight: "59px"
//           }
//         ],
//         "ft26-30": [
//           "26px",
//           {
//             //Roboto Regular
//             letterSpacing: "0em",
//             lineHeight: "30px"
//           }
//         ],
//         "ft25-29": [
//           "25px",
//           {
//             //Roboto Regular
//             letterSpacing: "0em",
//             lineHeight: "29px"
//           }
//         ],

//         "ft27-32": [
//           "27px",
//           {
//             //Roboto Regular
//             letterSpacing: "0em",
//             lineHeight: "32px"
//           }
//         ],
//         "ft21-25": [
//           "21px",
//           {
//             //Roboto Regular
//             letterSpacing: "0em",
//             lineHeight: "25px"
//           }
//         ],
//         "ft39-46": [
//           "39px",
//           {
//             //Roboto Regular
//             letterSpacing: "0em",
//             lineHeight: "46px"
//           }
//         ],
//         "ft78-91": [
//           "78px",
//           {
//             //Roboto Regular
//             letterSpacing: "0em",
//             lineHeight: "91px"
//           }
//         ],
//         "ft57-67": [
//           "57px",
//           {
//             //Roboto Regular
//             letterSpacing: "0em",
//             lineHeight: "67px"
//           }
//         ],
//         "ft86-101": ["86px", { letterSpacing: "0em", lineHeight: "101px" }],
//         "ft49-57": ["49px", { letterSpacing: "0em", lineHeight: "57px" }],
//         "ft20-20": ["20px", { letterSpacing: "0em", lineHeight: "20px" }],
//         "ft16-29": ["16px", { letterSpacing: "0em", lineHeight: "29px" }],
//         "ft22-37": ["22px", { letterSpacing: "0em", lineHeight: "37px" }],
//         "ft29-34": ["29px", { letterSpacing: "0em", lineHeight: "34px" }],
//         "ft33-37": ["33px", { letterSpacing: "0em", lineHeight: "37px" }],
//         "ft35-15": ["35px", { letterSpacing: "0em", lineHeight: "15px" }],
//         "ft50-16": ["50px", { letterSpacing: "0em", lineHeight: "16px" }],
//         "ft19-32": ["19px", { letterSpacing: "0em", lineHeight: "32px" }]
//       },
//       fontFamily: {
//         RobotoBold: ["Roboto-Bold", "sans-serif"],
//         RobotoSemiBold: ["Roboto-SemiBold", "sans-serif"],
//         RobotoRegular: ["Roboto-Regular", "sans-serif"],
//         RobotoMedium: ["Roboto-Medium", "sans-serif"]
//       },
//       boxShadow: {
//         // none: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
//         inner: "0px 4px 4px 5px rgba(0, 0, 0, 0.06)",
//         xs: "0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
//         xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
//         DEFAULT:
//           "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
//         "2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
//         sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 3px 0 rgba(0, 0, 0, 0.5)",
//         lg: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
//         md: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
//         outline: "0px 0px 0px 3px rgba(0, 0, 0, 0.5)",
//         "blackShadow-10": "0px 5px 34px 2px rgba(0, 0, 0, 0.25)",
//         "blackShadow-20": "0px 4px 4px 5px rgba(0, 0, 0, 0.25)"
//       },
//       backgroundImage: (theme) => ({
//         "linear-grad-black":
//           "linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(39, 39, 39, 1),rgba(73, 73, 73, 1),rgba(114, 114, 114, 1) )"
//       }),
//       spacing: {
//         2.25: "9px",
//         3.75: "15px",
//         4.5: "18px",
//         5.75: "23px",
//         7.25: "29px",
//         7.75: "31px",
//         9.5: "38px",
//         11.5: "46px",
//         12.75: "51px",
//         13: "52px",
//         14.75: "59px",
//         15: "60px",
//         17.5:"70px",
//         18.5: "74px",
//         19.25: "77px",
//         20.5: "82px",
//         21.25: "85px",
//         25.5: "98px",
//         28.5: "114px",
//         29: "116px",
//         31.75: "127px",
//         35: "140px",
//         36.5: "146px",
//         39: "156px",
//         43:"172px",
//         45: "180px",
//         46.25: "185px",
//         47.5:"190px",
//         55: "220px",
//         57.5: "230px",
//         61: "244px",
//         65: "260px",
//         71.5:"287px",
//         75: "300px",
//         121.5: "486px",
//         131.5: "526px",
//         177.25:"709px",
//         181.5: "726px"
//       },
//       maxWidth: {
//         "86per": "86%",
//         46.25: "185px",
//         55: "220px",
//         100: "400px",
//         181.5: "726px"
//       },
//       borderWidth: {},
//       borderRadius: {
//         //same as border width
//         1.5: "6px",
//         "5-5xl": "34px",
//         "50per": "50%"
//       }
//     }
//   },

//   variants: {
//     width: ["responsive", "hover", "focus", "group-hover"],
//     display: ["responsive", "hover", "focus", "group-hover"],
//     transform: ["responsive", "hover", "focus", "group-hover"],
//     scale: ["responsive", "hover", "focus", "group-hover"],
//     extend: {
//       animation: ["hover", "focus", "group-hover"],
//       grayscale: ["hover", "focus", "group-hover"]
//     }
//   },
//   plugins: [],
//   darkMode: false
// };
