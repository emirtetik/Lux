import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { products } from "@/constant";

export const SectionTwo = () => {
  return (
    <section className="w-full bg-[var(--background-orange)] py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Tasarım Koleksiyonları
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="rounded-2xl shadow-md overflow-hidden bg-[var(--background)] transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="flex justify-center p-4 ">
                <Image
                  width={100}
                  height={100}
                  src={product.image}
                  alt={product.title}
                  className="object-contain"
                />
              </div>
              <CardContent className="px-4 py-3">
                <h3 className="text-base md:text-lg font-semibold">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
