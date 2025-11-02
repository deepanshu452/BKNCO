/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Tells Tailwind to scan all your React files
  ],
  theme: {
    extend: {
      colors: {
        // Here is your custom color palette!
        'brand-blue': '#054c7d', 
        // You can now use classes like `bg-brand-blue` or `text-brand-blue`
      }
    },
  },
  plugins: [],

  
}