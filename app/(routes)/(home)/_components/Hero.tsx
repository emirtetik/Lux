"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[45vh] mx-auto max-w-7xl w-full flex  items-center justify-center px-8 font-prata ">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1.5,
          ease: "easeOut",
        }}
        className="w-3/4 hidden md:block text-left p-4 space-y-4  "
      >
        <TypeAnimation
          sequence={[
            "Yeniliğe Hazır mısın?",
            2000,
            "Yeniliğe Hazır değilim?",
            2000,
            "Yeniliğe Hazır yok?",
            2000,
            "Yeniliğe Hazır?",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl md:text-4xl font-bold text-gray-300"
          repeat={Infinity}
        />
        <p className="text-lg text-gray-600 dark:text-gray-300">
          En yeni aydınlatma çözümleriyle tanış.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: -1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          duration: 1.5,
          ease: "easeOut",
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        className={`absolute top-[-600] w-[600px] h-[500px] z-10`}
      >
        <Image
          width={600}
          height={500}
          src="/lux8.png"
          alt="Call to action graphic"
          draggable={false}
        />
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.3,
          duration: 1.5,
          ease: "easeOut",
        }}
        className="w-3/4 hidden md:block text-right  p-4 space-y-4  "
      >
        <TypeAnimation
          sequence={[
            "Yeniliğe Hazır mısın?",
            2000,
            "Yeniliğe Hazır değilim?",
            2000,
            "Yeniliğe Hazır yok?",
            2000,
            "Yeniliğe Hazır?",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl md:text-4xl font-bold text-gray-300"
          repeat={Infinity}
        />
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Estetik, işlevsellik ve enerji tasarrufu bir arada.
        </p>
      </motion.div>
      {isAnimated && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 2 }}
          transition={{
            delay: 0.2,
            duration: 3,
            ease: "easeOut",
          }}
          className={`absolute top-[110px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] 
            rounded-full blur-2xl z-0 pointer-events-none 
            ${theme === "dark" ? "bg-yellow-500" : "bg-black"}`}
        />
      )}
    </div>
  );
};

export default Hero;

// const [currentSlide, setCurrentSlide] = useState(0)
// const [api, setApi] = useState<CarouselApi | null>(null)
// const [hasMounted, setHasMounted] = useState(false)
// useEffect(() => {
//   setHasMounted(true)
// }, [])
// useEffect(() => {
//   if (!api) return

//   const onSelect = () => {
//     setCurrentSlide(api.selectedScrollSnap())
//   }

//   onSelect()
//   api.on("select", onSelect)

//   return () => {
//     api.off("select", onSelect)
//   }
// }, [api])

{
  /* <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center'>
  
<div className='lg:w-1/2 space-y-6 text-center lg:text-left px-6 transition-all duration-500'>
  <h4 className="text-orange-600 font-bold text-lg">Lets Go Now</h4>
  <h1 className='text-3xl md:text-5xl font-semibold text-gray-900'>
  {hasMounted ? slides[currentSlide].title : slides[0].title}
  </h1>
  <p className="text-gray-600 text-base md:text-lg">
  {hasMounted ? slides[currentSlide].description : slides[0].description}
  </p>
</div>


 <div className='lg:w-1/2 mt-12 lg:mt-0 w-full'>
  <Carousel
    opts={{
      align: "center",
      loop: true,
    }}
    plugins={[
      Autoplay({
        delay: 3500,
      }),
    ]}
    setApi={setApi}
    className="overflow-hidden rounded-3xl"
  >
    <CarouselContent className="flex">
      {slides.map((slide, index) => (
        <CarouselItem key={index} className="min-w-full">
          <Image
            src={slide.image}
            alt={slide.title}
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-3xl"
          />
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</div>
</div> */
}
