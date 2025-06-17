import ImageSlider from "@/components/CoffeeSlider";
import OurProduct from "@/components/OurProduct.js";
import Footer from "@/components/Footer";
import TodaySpecial from "@/components/TodaySpecial";
import GalleryImage from "@/components/GalleryImage";
import WhatCustomerSay from "@/components/WhatCustomerSay";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
export default function Home() {
  // Main homepage structure based on Figma layout
  return (
    <div>
      <div className="bg-[#F8F8F8] text-white relative ">
        <img
          alt="Decorative coffee beans cluster with leaves 
    on top left side"
          className="absolute  left-0 top-[740px] hidden md:block"
          height="319px"
          src="/fll.png"
          width="380px"
        />
        {/* Right Flower */}
        <img
          alt="Decorative coffee beans cluster with leaves 
      on top left side"
          className="absolute  right-0 top-[1580px] hidden md:block"
          height="319px"
          src="/rightf.png"
          width="380px"
        />

        {/* Right Flower Shop */}
        <img
          alt="Decorative coffee beans cluster with leaves 
      on top left side"
          className="absolute  left-0 top-[2360px] hidden md:block"
          height="319px"
          src="/cl.png"
          width="380px"
        />

        <Header />
        <Hero />
        <ImageSlider />
        <OurProduct />
        <GalleryImage />
        <WhatCustomerSay />
        <TodaySpecial />
        <Footer />
      </div>
    </div>
  );
}
