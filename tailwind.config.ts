import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/**/*.{svg}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "avatar": "url('/assets/image/avatar.jpg')"
      },
      colors: {
        "primary-yellow": '#ffb400',
        "primary-gray": "#252525"
      },
    },
  },
  plugins: [],
};
export default config;
