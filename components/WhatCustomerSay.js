"use client";
import Image from "next/image";
import React, { useState } from "react";
const testimonials = [
  {
    id: 1,
    image: "/person.png",
    name: "Sophia M",
    title: "Regular Customer",
    description:
      "Every visit to Half Million is a treat! The coffee itself is rich, smooth, and perfectly brewed every time.",
  },
  {
    id: 2,
    image: "/person2.png",
    name: "Marcus J.",
    title: "Coffee Enthusiast",
    description:
      "Love the minimalist decor and cozy seating — it’s the kind of place you could sit with a book for hours.",
  },
  {
    id: 3,
    image: "/person3.png",
    name: "Elena R.",
    title: "Local Business Owner",
    description:
      "The ambiance is great and I really liked the signature Half Million Mocha — rich and not too sweet.",
  },
];
const WhatCustomerSay = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [pulseIndex, setPulseIndex] = useState(null);

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
    setPulseIndex(index);
  };

  return (
    <>
      <section className=" relative mx-auto  mt-44 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-left mb-20 ">
          <h2 className="text-[#3F2305] font-bold text-5xl uppercase tracking-widest">
            WHAT
          </h2>
          <h3 className="text-[#3F2305]   text-4xl font-extrabold mt-2">
            our <span className="text-[#4A7639] ">customers</span> say
          </h3>
          <p className="text-gray-500 max-w-md mt-3 text-base sm:text-base">
            Discover coffee made with love. Brewing happiness, one cup at a
            time.{" "}
          </p>
        </div>
        {/* Left  Flower Customer say */}
        <img
          alt="Decorative coffee beans cluster with leaves 
      on top left side"
          className="absolute  right-0 top-[-300px] hidden md:block"
          height="319px"
          src="/cr.png"
          width="380px"
        />
      </section>
      <div className="flex items-center max-w-5xl mx-auto  bg-gray-50 px-6 mt-12 xl:mt-0">
        {/* Customer Profile Section */}
        <div className="flex flex-col items-center bg-[#436934] rounded-2xl p-6 min-w-[302px] min-h-[315px] ">
          <div className="w-[270px] h-[200px] rounded-2xl overflow-hidden mb-4 bg-gray-200">
            <Image
              src={testimonials[activeTestimonial].image}
              alt="Sophia M."
              width={280}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-white  text-lg mb-1 rbf">
            {testimonials[activeTestimonial].name}
          </h3>
          <p className=" text-sm rbf text-[#E8E8E8]">
            {testimonials[activeTestimonial].title}
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="bg-[#3D1D17] rounded-tr-2xl rounded-br-2xl pt-[57px] px-20  flex-col  pb-2 flex-1 relative  h-[230px]">
          <p className="text-white text-base leading-relaxed rbf">
            {testimonials[activeTestimonial].description}
          </p>

          {/* Decorative dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                onAnimationEnd={() => setPulseIndex(null)}
                className={`flex items-center justify-center transition-transform duration-300 w-[12px] h-[12px] bg-transparent rounded-full p-0 border-none outline-none
                  ${
                    pulseIndex === index && index === activeTestimonial
                      ? "animate-pulse-custom "
                      : ""
                  }
                `}
                style={{
                  padding: 0,
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  className={`block rounded-full transition-all duration-300 
                    ${
                      index === activeTestimonial
                        ? "bg-[#A36939] shadow-xl scale-125 "
                        : "bg-[#7B4A2D] scale-100 "
                    }
                    w-[12px] h-[12px] flex items-center justify-center
                  `}
                >
                  {index === activeTestimonial ? (
                    <span className="block w-[8px] h-[8px] bg-[#E2C6A6] rounded-full"></span>
                  ) : null}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @layer utilities {
          .animate-pulse-custom {
            animation: pulse-custom 0.4s;
          }
          @keyframes pulse-custom {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.3);
            }
            100% {
              transform: scale(1.1);
            }
          }
        }
      `}</style>
    </>
  );
};

export default WhatCustomerSay;
