/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "./index.html",                    
  ],
  theme: {
    extend: {
      colors: {
        videss: {
          white: '#FFFFFF',
          dark: '#1E2939',
          black: '#000000',
          purple: '#800ED4', 
          green: '#22C55E',  
          bgLight: '#F9FAFB',
        }
      },
    },
  },
  plugins: [],
};
