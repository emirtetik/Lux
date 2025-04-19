"use client";

import {
  Instagram,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const socialLinks = [
    { href: "#", icon: <Instagram size={16} /> },
  ];

  return (
    <header className="font-montserrat">
      <div className="hidden md:block border-b border-gray-200 dark:border-gray-700 text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between gap-2">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6  md:text-left">
            <div className="flex items-center gap-2">
              <MessageCircle size={14} className="text-orange-500" />
              <span>info@ısıltıaydınlatma.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-orange-500" />
              <span>050 505 5005</span>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-start md:justify-end">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-orange-500 transition-colors"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="h-auto py-6 ">
        <div className="container mx-auto px-4 flex  items-center justify-between gap-4">
          <h4 className="text-[var(--background-orange)] text-2xl sm:text-3xl font-lilita uppercase font-bold text-center sm:text-left md:max-w-full max-w-2.5">
            Işıltı Aydınlatma
          </h4>

          <div className="relative inline-block w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]">
            {theme === "dark" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.6, scale: 1.2 }}
                transition={{ delay: 3, duration: 2, ease: "easeOut" }}
                className="absolute left-3 md:left-[18px] top-[70px] sm:top-[80px] w-0 h-0 
                border-l-[15px] border-r-[15px] border-b-[30px]
                border-l-transparent border-r-transparent border-b-yellow-500
                z-10 pointer-events-none blur-xs"
              />
            )}

            <Image
              src={"/lux13.png"}
              alt="Tema Değiştir"
              width={150}
              height={150}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="cursor-pointer z-20 relative object-contain"
              priority
              draggable={false}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
