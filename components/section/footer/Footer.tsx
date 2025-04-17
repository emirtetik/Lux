import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const socialLinks = [{ href: "#", icon: <Instagram size={16} /> }];

  const instagramImages = Array.from(
    { length: 11 },
    (_, index) => `/home/instagram/${index + 1}.jpg`
  );
  return (
    <footer className="relative">
      <div
        className="absolute -top-16 left-1/2 transform -translate-x-1/2 
  bg-gradient-to-t from-[var(--background)]  via-[var(--background)]  to-[var(--background-orange)] overflow-hidden text-left px-6 py-12 
  w-12/12  h-72
  grid grid-cols-1 md:grid-cols-2 items-center gap-6"
      >
        <div >
          <h2 className="text-3xl font-bold  text-center">
            Ready to get started?
          </h2>
          <p className="mt-2 text-lg text-right">
            It only takes a few minutes to register your FREE Travel account.
          </p>
        </div>

        <div className="flex justify-center relative">
          <Image
            height={450}
            width={350}
            src="/lux7.png"
            alt="Call to action graphic"
            className="hidden md:block absolute -bottom-50"
            draggable={false}
          />
        </div>
      </div>

      <div className="container  mx-auto relative py-48 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
        <div className="lg:col-span-2 mt-16 ">
          <h3 className="text-2xl font-bold">Travel</h3>
          <p className="mt-4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            consectetur omnis ullam iure tempore ab doloremque neque repellendus
            enim, dolore ratione error, corrupti consequatur nesciunt.
          </p>
          <div className="flex mt-4 space-x-4">
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
        <div className="mt-16">
          <h4 className="text-xl font-bold mb-4">Yol Tarifi</h4>
          <div className="space-y-2 text-sm mt-8">	Emek Mahallesi D-100 Karayolu Caddesi No:92 Uzunçiftlik / İzmit / Kocaeli</div>
        </div>
        <div className="lg:col-span-2 mt-16">
          <h4 className="text-xl font-bold mb-4">Instagram</h4>
          <div className="grid grid-cols-6  gap-2 mt-8">
            {instagramImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={50}
                height={50}
                alt={`Instagram Image ${index + 1}`}
                className="w-full h-auto rounded-md"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4 text-center text-sm border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            Copyright © 2025{" "}
            <span className="text-orange-500">Işıltı Aydınlatma</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
