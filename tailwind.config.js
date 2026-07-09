/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          white: "#FFFFFF",
          gray: "#B2B8BE",
          pattern: "#3C3C3C",
          // светлые монохромные секции (ритм тёмное/светлое)
          light: "#F3F3F4",
          ink: "#0B0B0C",
          mute: "#6C7075",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
