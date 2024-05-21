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
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        badscript: ["var(--font-bad-script)"],
        chapo: ["var(--font-chapo)"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
