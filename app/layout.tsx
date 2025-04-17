import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { fontMontserrat, fontPrata, lilitaOne } from "@/components/font/Font";

export const metadata: Metadata = {
  title: "Işıltı Aydınlatma",
  description: "Isıltı Aydınlatma Website",
};

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