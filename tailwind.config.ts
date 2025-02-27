import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // Ensures all components are included
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // Ensure App Router components are included
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // If using Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // If you have a components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
