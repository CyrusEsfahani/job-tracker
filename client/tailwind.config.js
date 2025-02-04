module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            500: '#14b8a6',
            600: '#0d9488',
          },
          huntr: {
            primary: '#4f46e5',
            accent: '#f59e0b',
          }
        },
        boxShadow: {
          card: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
        }
      },
    },
    plugins: [],
  }