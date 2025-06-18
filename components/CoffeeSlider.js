"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=820",
    alt: "Coffee and pastries on wooden table",
    title: "Morning Coffee",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=820",
    alt: "Coffee being poured into glass",
    title: "Fresh Brew",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=820",
    alt: "Latte art in white cup",
    title: "Latte Art",
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(1); // start in the middle
  const [auto, setAuto] = useState(true);

  /* autoplay */
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      4_000
    );
    return () => clearInterval(id);
  }, [auto]);

  /* change slide */
  const go = (i) => {
    setCurrent(i);
    setAuto(false);
    const id = setTimeout(() => setAuto(true), 3_000);
    return () => clearTimeout(id);
  };

  /* class helpers -------------------------------------------------------- */
  const pos = (i) => {
    const left = (current - 1 + slides.length) % slides.length;
    const right = (current + 1) % slides.length;

    if (i === current) return "z-20 translate-x-0";
    if (i === left)
      return "-translate-x-full sm:-translate-x-80 lg:-translate-x-96 z-10";
    if (i === right)
      return "translate-x-full sm:translate-x-80 lg:translate-x-96 z-10";
    return "opacity-0 scale-75 pointer-events-none";
  };

  const size = (i) =>
    i === current
      ? "w-64 h-80 sm:w-80 sm:h-[22rem] lg:w-[410px] lg:h-[499px]"
      : "w-52 h-64 sm:w-64 sm:h-80 lg:w-[312px] lg:h-[379px]";

  /* --------------------------------------------------------------------- */
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      {/* Slider ----------------------------------------------------------- */}
      <div className="relative py-12 lg:px-32">
        <div className="relative flex items-center justify-center h-80 sm:h-[22rem] lg:h-[550px] overflow-visible">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`absolute transition-all duration-500 ease-out ${pos(
                i
              )}`}
            >
              <div
                className={`relative rounded-2xl overflow-hidden ${size(i)} ${
                  i === current ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                />

                {/* dark‑to‑clear fade on centre frame */}
                {i === current && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                )}

                {/* top‑right “Explore” badge */}
                {i === current && (
                  <div className="absolute top-0 right-0 flex items-center gap-2 rounded-tr-2xl rounded-bl-2xl bg-white/90 backdrop-blur px-3 py-2 space-x-1">
                    <span className="text-sm font-semibold leading-tight text-black text-left">
                      Explore
                      <br />
                      More
                    </span>
                    <Image
                      src="/ex.png"
                      alt=""
                      width={24}
                      height={24}
                      className="shrink-0"
                    />
                  </div>
                )}

                {/* caption */}
                {i === current && (
                  <h3 className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold drop-shadow-lg">
                    {s.title}
                  </h3>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* dots ------------------------------------------------------------- */}
      <div className="flex justify-center gap-3 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-[#A36939] scale-125 shadow-xl"
                : "bg-[#A3693994] hover:bg-[#A3693994]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
