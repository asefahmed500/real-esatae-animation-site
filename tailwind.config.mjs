/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js", // Include Flowbite components
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        unbounded: ["var(--font-unbounded)", "sans-serif"], // Add Unbounded font
      },
    },
  },
  plugins: [
    require('daisyui'), // Your existing plugin
    require('flowbite/plugin'), // Correct Flowbite plugin import
  ],
};

export default config;
