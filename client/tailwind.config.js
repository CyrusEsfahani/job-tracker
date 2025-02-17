module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: true,
  },
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
          primary: '#4f46e5', // Deep blue (can be adjusted)
          accent: '#f59e0b', // Orange (good for contrast)
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          900: "#111827"
        }
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        'nav-height': '4rem',
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)',
        input: '0 1px 2px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'lg': '12px',
      },
    },
  },
  plugins: [],
};
