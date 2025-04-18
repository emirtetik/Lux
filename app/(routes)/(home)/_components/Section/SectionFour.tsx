import React from "react";
import Image from "next/image";

export const SectionFour = () => {
  return (
    <div className="bg-[var(--background-orange)] py-24 px-4 flex justify-center font-montserrat">
      <div className="relative max-w-6xl w-full flex items-center">
        
        {/* Resmi tüm ekran boyutlarında göster */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10 md:block block">
          <Image
            src="/lux14.jpeg"
            alt="Product"
            width={480}
            height={360}
            className="rounded-xl shadow-2xl"
          />
        </div>

        <div className="bg-transparent border border-black rounded-xl p-10 w-full md:w-[50%] ml-auto z-10 relative">
          <h2 className="text-4xl font-bold mb-2 text-black">LED Lightning</h2>
          <p className="mb-2 text-black">Lumo Model 17 Standard</p>
          <p className="text-lg text-black font-medium mb-6">$199.00</p>

          <div className="absolute top-[-20px] left-[-20px] w-full h-full border border-black rounded-xl z-[-1]" />
        </div>
      </div>
    </div>
  );
};
