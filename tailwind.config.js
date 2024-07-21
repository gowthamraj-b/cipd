module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        amber: { a700: "#ffa800", a700_4c: "#ffa8004c" },
        black: { 900: "#000000", "900_33": "#00000033", "900_3f": "#0000003f" },
        blue_gray: { 700: "#525252", 900: "#333333" },
        cyan: { "50_0c": "#cffcfc0c" },
        gray: {
          50: "#fbfbfb",
          100: "#f2f2f2",
          300: "#e6e6e6",
          700: "#676767",
          800: "#454545",
          900: "#1e1e1e",
          "50_01": "#f9fff9",
        },
        indigo: { 900: "#16006a" },
      },
      boxShadow: { xs: "0 3px 4px 0 #0000003f", sm: "0 2px 4px 0 #0000003f", md: "0 4px 4px 0 #0000003f" },
      fontFamily: {
        poppins: "Poppins",
        orbitron: "Orbitron",
        quantico: "Quantico",
        roboto: "Roboto",
        mulish: "Mulish",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
