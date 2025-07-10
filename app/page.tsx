import ImageSlider from "@/components/CoffeeSlider";
import OurProduct from "@/components/OurProduct";
import TodaySpecial from "@/components/TodaySpecial";
import GalleryImage from "@/components/GalleryImage";
import WhatCustomerSay from "@/components/WhatCustomerSay";
import Hero from "@/components/Hero";
import Image from "next/image";
export default function Home() {
  // Main homepage structure based on Figma layout
  return (
    <div>
      <div className="bg-[#F8F8F8] text-white relative ">
        <Image
          alt="Decorative coffee beans cluster with leaves
    on top left side"
          className="absolute  left-0  sm:top-[780px] hidden sm:block sm:w-[120px] md:top-[740px] md:w-[154px] lg:w-[220px] xl:w-[380px]"
          height="319"
          src="/fll.png"
          width="380"
        />
        {/* Right Flower */}
        <Image
          alt="Decorative coffee beans cluster with leaves
      on top left side"
          className="absolute  right-0 top-[1580px]  sm:block sm:w-[120px] hidden md:top-[1480px] md:w-[164px] lg:top-[1580px]  lg:w-[220px] xl:w-[380px]"
          height="319"
          src="/rightf.png"
          width="380"
        />

        {/* Right Flower Shop */}
        <Image
          alt="Decorative coffee beans cluster with leaves
      on top left side"
          className="absolute  left-0 hidden md:block  md:w-[300px] md:top-[2710px] lg:top-[2390px] "
          height="319"
          src="/cl.png"
          width="380"
        />

        <Hero />
        <ImageSlider />
        <OurProduct />
        <GalleryImage />
        <WhatCustomerSay />
        <TodaySpecial />
      </div>
    </div>
  );
}
