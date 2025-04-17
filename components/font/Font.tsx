import { Lilita_One, Montserrat, Prata } from "next/font/google";

export const lilitaOne = Lilita_One({
    variable: "--font-lilita",
    subsets: ["latin"],
    fallback: ["serif"],
    weight: "400",
    preload: false,
  });
  export const fontMontserrat = Montserrat({
    variable: "--font-montserrat",
    fallback: ["sans-serif"],
    weight: "400",
    preload: false,
    subsets: ["latin"],
  });
  
  export const fontPrata = Prata({
    variable: "--font-prata",
    fallback: ["serif"],
    weight: "400",
    preload: false,
    subsets: ["latin"],
  });