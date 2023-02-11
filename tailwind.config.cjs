/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Ubuntu', 'monospace'],
    },
    extend: {
      backgroundImage: {
        sidebarDesktop: "url('./assets/bg-sidebar-desktop.svg')",
        sidebarMobile: "url('./assets/bg-sidebar-mobile.svg')",
      },
      colors: {
        primary: {
          marine: {
            blue: '#02295a',
          },
          purplish: {
            blue: '#473dff',
          },
          pastel: {
            blue: '#adbeff',
          },
          light: {
            blue: '#bfe2fd',
          },
          strawberry: {
            red: '#ed3548',
          },
        },
        neutral: {
          cool: {
            gray: '#9699ab',
          },
          light: {
            gray: '#d6d9e6',
          },
          magnolia: {
            DEFAULT: '#f0f6ff',
          },
          alabaster: {
            DEFAULT: '#fafbff',
          },
          white: {
            DEFAULT: '#ffffff',
          },
        },
      },
    },
  },
  plugins: [],
};
