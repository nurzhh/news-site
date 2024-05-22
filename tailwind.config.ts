import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    fontSize: {
      "2xl": "36px",
      xl: "32px",
      lg: "24px",
      md: "20px",
      sm: "16px",
      "2sm": "12px",
    },
    extend: {
      colors: {
        main: "#172B4D",
        bg: "#F6F7F9",
        gray: "rgba(255, 255, 255, 0.60)",
        akparat: "#4B68A1",
        adebiet: "#479CFF",
        oner: "#FF6D6D",
        gilym: "#1EBD71",
        exc: "#B957D2",
        career: "#FFB72C",
        sport: "#AA2424",
        tarih: "#4B47E2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        badscript: ["var(--font-bad-script)"],
        chaupo: ["var(--font-chaupo)"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
// fc62c44428db43f0a43ec3c505585046
