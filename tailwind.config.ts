import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#DA0037",
        "light-dark": "#444444",
        dark: "#171717",
        light: "#EDEDED",
      },
    },
    fontFamily: {
      "mont-alt": ["Montserrat Alternates", "sans-serif"],
    },
  },
};
