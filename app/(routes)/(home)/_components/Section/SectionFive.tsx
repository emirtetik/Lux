"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constant";
import React from "react";

const SectionFive = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-montserrat">
      <div className="max-w-3xl w-full mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center">
          Sıkça Sorulan Sorular
        </h2>
        
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4 "
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer"
            >
              <AccordionTrigger className="text-base sm:text-lg px-4 py-3 font-medium  transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-sm sm:text-base text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SectionFive;
