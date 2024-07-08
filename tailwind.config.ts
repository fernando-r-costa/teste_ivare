import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'dark-color': '#0c120cff',
      'highlight-color': '#c20114ff',
      'light-color': '#F8F8F8',
      'primary-color': '#6d7275ff',
      'secondary-color': '#c7d6d5ff',
      'tertiary-color': '#F4A460',
  },
    fontFamily: {
      primaryFont: ['Poppins', 'sans-serif']
  },
    plugins: [],
}};
export default config;
