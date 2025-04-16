import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { products } from "@/constant";



export const SectionTwo= () => {
  return (
    <div className="flex flex-col items-center mb-10  bg-[var(--background-orange)]">
      <div className="w-full max-w-7xl py-10">
      <h2 className="text-3xl font-bold mb-10 text-center">Tasarım Koleksiyonları</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card  key={product.id} className="rounded-2xl shadow-lg overflow-hidden bg-[var(--background)]">
          <div className="flex justify-center">
  <Image
    width={100}
    height={100}
    src={product.image}
    alt={product.title}
    className="object-contain"
  />
</div>
            <CardContent className="px-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
};
