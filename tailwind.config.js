/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      height: {
        'screen': [
          '100vh','100dvh'
        ]
      },
      minHeight: {
        'screen': [
          '100vh','100dvh'
        ]
      },
      maxHeight: {
        'screen': [
          '100vh','100dvh'
        ]
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  variants: { extend: { typography: ["dark"] } },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
}