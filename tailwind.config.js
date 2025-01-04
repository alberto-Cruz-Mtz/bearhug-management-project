import { nextui } from "@nextui-org/theme";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
  ],
  theme: {
    extend: {
      height: {
        "10s": "10svh",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
    colors: {
      light: "#F8FAFC",
      dark: "#3f3b3b",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
