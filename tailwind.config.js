/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'poppins-thin': ['Poppins-thin', 'sans-serif'],
        'poppins-light': ['Poppins-light', 'sans-serif'],
        'poppins-bold': ['Poppins-bold', 'sans-serif'],
        'poppins-semibold': ['Poppins-semibold', 'sans-serif'],
        'jacquard': ['Jacquard24Charted-Regular', 'sans-serif'],
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 5s steps(50, end), blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};