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
      <div
        className="flex container mx-auto h-16 justify-center 
        md:justify-between items-center px-4 py-2 text-sm"
      >
        <div className="flex  items-center gap-5">
          <div className="flex gap-3 items-center">
            <div className="p-2 rounded-full">
              <MessageCircle size={12} className="text-orange-500" />
            </div>
            info@ısıltıaydınlatma.com
          </div>
          <div className="flex gap-3 items-center">
            <div className="p-2 rounded-full">
              <Phone size={12} className="text-orange-500" />
            </div>
            050 505 5005
          </div>
          <div className="flex gap-3 items-center">
           {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-orange-500"
            >
              {link.icon}
            </Link>
          ))}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
         
        </div>
      </div>

      <div className="h-28 text-black  flex items-center">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h4 className="text-[var(--background-orange)] text-2xl font-lilita uppercase font-bold">Işıltı Aydınlatma</h4>

          <div className="space-x-8">
            <div className="relative inline-block w-[150px] h-[150px]">
              {theme === "dark" && (
               <motion.div
               initial={{
                 opacity: 0,
                 scale: 0.5,
               }}
               animate={{
                 opacity: 0.6,
                 scale: 1.2,
               }}
               transition={{
                 delay: 3,
                 duration: 2,
                 ease: "easeOut",
               }}
               className="absolute left-[18px] top-[80px] w-0 h-0 
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
                className="cursor-pointer z-20 relative"
                priority
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
