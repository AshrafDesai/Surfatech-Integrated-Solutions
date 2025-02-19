/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using class strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      // You can extend your theme here if needed
    },
  },
  plugins: [],
}