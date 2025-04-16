"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const faqData = [
  {
    question: "LED ürünlerinizin ömrü ne kadar?",
    answer:
      "LED ürünlerimiz ortalama 50.000 saat dayanıklılık sunar. Bu, günde 8 saat kullanımda yaklaşık 17 yıla denk gelir.",
  },
  {
    question: "Garanti süresi ne kadar?",
    answer:
      "Tüm ürünlerimiz 2 yıl garantilidir. Herhangi bir arıza durumunda ücretsiz değişim sağlanır.",
  },
  {
    question: "Siparişten sonra teslimat süresi nedir?",
    answer:
      "Siparişleriniz genellikle 2-5 iş günü içerisinde adresinize teslim edilir.",
  },
  {
    question: "Özel ölçü veya proje bazlı sipariş alıyor musunuz?",
    answer:
      "Evet, mimari projeler veya özel ölçü talepleri için bizimle iletişime geçebilirsiniz.",
  },
];

const SectionFive = () => {
  return (
    <section className=" py-24 px-4 flex justify-center font-montserrat">
      <div className="max-w-3xl w-full  p-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Sıkça Sorulan Sorular</h2>
        <Accordion type="single" collapsible className="w-full space-y-4 p-4 ">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className=" ">
              <AccordionTrigger className="text-lg px-4 py-3">{faq.question}</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-600">
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
