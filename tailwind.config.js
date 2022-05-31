const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
   content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
   theme: {
      container: {
         center: true,
         padding: "4rem",
      },
      extend: {
         fontFamily: {
            barlow: ["Barlow Semi Condensed", ...defaultTheme.fontFamily.sans],
            poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
            quando: ["Quando", ...defaultTheme.fontFamily.sans],
         },
      },
   },
   plugins: [require("@tailwindcss/forms")],
};
