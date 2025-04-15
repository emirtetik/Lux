"use client";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import styles from "./header.module.css";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const socialLinks = [
    { href: "#", icon: <Facebook size={16} /> },
    { href: "#", icon: <Twitter size={16} /> },
    { href: "#", icon: <Instagram size={16} /> },
  ];

  return (
    <header className=" text-white">
      <div
        className="flex container mx-auto h-16 justify-center 
        md:justify-between items-center px-4 py-2 text-sm"
      >
        <div className="flex items-center gap-5">
          <div className="flex gap-3 items-center">
            <div className="bg-white p-2 rounded-full">
              <MessageCircle size={12} className="text-orange-500" />
            </div>
            info@ısıltıaydınlatma.com
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-white p-2 rounded-full">
              <Phone size={12} className="text-orange-500" />
            </div>
            050 505 5005
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
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

      <div className="h-28 text-black shadow flex items-center">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Image
            src={"/logo.png"}
            alt="Travel"
            width={210}
            height={50}
            className="w-36 lg:w-52 h-auto"
          />

          <div className="space-x-8">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {theme === "dark" ? "Aç" : "Kapat"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
