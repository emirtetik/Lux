import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Lilita_One, Prata, Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Işıltı Aydınlatma",
  description: "Isıltı Aydınlatma Website",
};
const lilitaOne = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  fallback: ["serif"],
  weight: "400",
  preload: false,
  display: "swap",
});
const fontMontserrat = Montserrat({
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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
         className={`${lilitaOne.className, fontMontserrat.className, fontPrata.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}