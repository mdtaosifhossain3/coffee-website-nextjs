"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with middle slide
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Sample images - replace with your actual images
  const slides = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=410&h=499&fit=crop',
      alt: 'Coffee and pastries on wooden table',
      title: 'Morning Coffee'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=410&h=499&fit=crop',
      alt: 'Coffee being poured into glass',
      title: 'Fresh Brew'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=410&h=499&fit=crop',
      alt: 'Latte art in white cup',
      title: 'Latte Art'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  // Navigate to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  // Get slide position class
  const getSlideClass = (index) => {
    if (index === currentSlide) {
      return 'z-20 shadow-2xl translate-x-0'; // Center slide - largest
    } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
      return '-translate-x-96 z-10'; // Left slide
    } else if (index === (currentSlide + 1) % slides.length) {
      return 'translate-x-96 z-10'; // Right slide
    } else {
      return 'scale-75 opacity-0'; // Hidden slides
    }
  };

  // Get slide size class
  const getSizeClass = (index) => {
    if (index === currentSlide) {
      return 'w-[410px] h-[499px]'; // Center slide size
    } else {
      return 'w-[312px] h-[379px]'; // Side slides size
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4  ">
      {/* Main slider container */}
      <div className="relative  rounded-3xl overflow-visible py-12 px-32">
        {/* Explore more badge */}
      

        {/* Images container */}
        <div className="flex justify-center items-center h-[550px] relative overflow-visible">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`absolute rounded-2xl  cursor-pointer transition-all duration-500 ease-out ${getSlideClass(index)}`}
            >
              <div className={`relative rounded-2xl   overflow-hidden ${getSizeClass(index)}`}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full  object-cover "
                />
                
                {/* Overlay gradient for center slide */}
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                )}

                
                   {/* Slide title for center slide */}
                   {index === currentSlide && (
                  <div className="absolute space-x-3 px-4 py-1 top-0 right-0 rounded-tr-2xl  rounded-bl-2xl   text-black flex items-center bg-white">
                    <h3 className="text-[14px] font-bold drop-shadow-lg">
                     Explore <br/> More
                    </h3>
                    <Image alt=""  src={"/ex.png"} width={27} height={27} className='  '/>
                  </div>
                )}
                
                {/* Slide title for center slide */}
                {index === currentSlide && (
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold drop-shadow-lg">
                      {slide.title}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center items-center space-x-3 ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 shadow-2xl rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#A36939] scale-125  shadow-2xl'
                : 'bg-[#A3693994] hover:bg-[#A3693994]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;