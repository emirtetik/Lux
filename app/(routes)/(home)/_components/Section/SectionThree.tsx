"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const fadeInLeft = {
  hidden: { x: -300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { x: 300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const SectionThree = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-28 py-16 space-y-16 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
          variants={fadeInLeft}
        >
          <Image
            alt="Image 1"
            src="/lux15.jpeg"
            width={1260}
            height={590}
            className="rounded-xl object-cover w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="md:w-1/2 space-y-4"
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
          variants={fadeInRight}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Başlık Buraya
          </h2>
          <p className="text-base sm:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            purus malesuada, pretium ligula a, fermentum nunc. Suspendisse
            potenti. Phasellus eget posuere urna.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <motion.div
          className="md:w-1/2 space-y-4"
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
          variants={fadeInLeft}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Başlık Buraya
          </h2>
          <p className="text-base sm:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            purus malesuada, pretium ligula a, fermentum nunc. Suspendisse
            potenti. Phasellus eget posuere urna.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
          variants={fadeInRight}
        >
          <Image
            alt="Image 2"
            src="/lux16.jpeg"
            width={1260}
            height={590}
            className="rounded-xl object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;