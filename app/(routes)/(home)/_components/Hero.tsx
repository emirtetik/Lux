"use client"

import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import { slides } from '@/constant'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap())
    }

    onSelect()
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])
  return (
    <div className='relative heroBg py-16'>
      <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center'>
        {/* Left Content */}
        <div className='lg:w-1/2 space-y-6 text-center lg:text-left px-6 transition-all duration-500'>
          <h4 className="text-orange-600 font-bold text-lg">Lets Go Now</h4>
          <h1 className='text-3xl md:text-5xl font-semibold text-gray-900'>
          {hasMounted ? slides[currentSlide].title : slides[0].title}
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
          {hasMounted ? slides[currentSlide].description : slides[0].description}
          </p>
        </div>

        {/* Right Carousel */}
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
      </div>
    </div>
  )
}

export default Hero
