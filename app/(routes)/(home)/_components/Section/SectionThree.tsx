"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const fadeInLeft = {
  hidden: {x: -300, opacity: 0},
  visible: {x:0, opacity: 1,  transition:{ duration: 0.8, ease: "easeOut"} }
}
const fadeInRight = {
  hidden: {x: 300, opacity: 0},
  visible: {x:-0, opacity: 1,  transition:{ duration: 0.8, ease: "easeOut"} }
}
const SectionThree = () => {
  return (
    <div className="mx-auto container lg:mt-8 md:mt-44 mt-64 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 px-3 lg:px-28">
        <motion.div
          className="flex items-center justify-center md:w-1/2 overflow-hidden"
          initial={"hidden"}
          whileInView={"visible"}
          transition={{delay: 0.3}}
          variants={fadeInLeft}
        >
          <Image
            alt="Image 1"
            src="/lux15.jpeg"
            width={1260}
            height={590}
            className="rounded-xl transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center md:w-1/2 overflow-hidden"
          initial={"hidden"}
          whileInView={"visible"}
          transition={{delay: 0.3}}
          variants={fadeInRight}
        >
          <h2 className="text-3xl font-bold mb-4">Başlık Buraya</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            purus malesuada, pretium ligula a, fermentum nunc. Suspendisse
            potenti. Phasellus eget posuere urna.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-3 lg:px-28 mt-8">
        <motion.div
          className="flex flex-col justify-center md:w-1/2 overflow-hidden"
          initial={"hidden"}
          whileInView={"visible"}
          transition={{delay: 0.3}}
          variants={fadeInLeft}
        >
          <h2 className="text-3xl font-bold mb-4">Başlık Buraya</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            purus malesuada, pretium ligula a, fermentum nunc. Suspendisse
            potenti. Phasellus eget posuere urna.
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center md:w-1/2 overflow-hidden"
          initial={"hidden"}
          whileInView={"visible"}
          transition={{delay: 0.3}}
          variants={fadeInRight}
        >
          <Image
            alt="Image 2"
            src="/lux16.jpeg"
            width={1260}
            height={590}
            className="rounded-xl transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionThree;
