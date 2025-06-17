import Image from "next/image"
const WhatCustomerSay = () => {
  return (
    <>   
     <section className=" relative mx-auto  mt-44 flex flex-col md:flex-row items-center gap-6">
    <div className="flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-left mb-20 ">
     <h2 className="text-[#3F2305] font-bold text-5xl uppercase tracking-widest">
      WHAT
     </h2>
     <h3 className="text-[#3F2305]   text-4xl font-extrabold mt-2">
      our <span className="text-[#4A7639] ">customers</span>  say
     </h3>
     <p className="text-gray-500 max-w-md mt-3 text-base sm:text-base">
     Discover coffee made with love. Brewing happiness, one cup at a time.    </p>
    </div>
          {/* Left  Flower Customer say */}
          <img alt="Decorative coffee beans cluster with leaves 
      on top left side" 
      className="absolute  right-0 top-[-300px] hidden md:block" 
      height="319px" 
      src="/cr.png" 
      width="380px"/>
   </section>
     <div className="flex items-center max-w-5xl mx-auto  bg-gray-50 px-6">
      {/* Customer Profile Section */}
      <div className="flex flex-col items-center bg-[#436934] rounded-2xl p-6 min-w-[200px] ">
        <div className="w-[180px] h-28 rounded-2xl overflow-hidden mb-4 bg-gray-200">
          <Image
            src="/person.png"
            alt="Sophia M."
            width={280}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-white  text-lg mb-1 rbf">Sophia M.</h3>
        <p className=" text-sm rbf text-[#E8E8E8]">Regular Customer</p>
      </div>

      {/* Testimonial Content */}
      <div className="bg-[#3D1D17] rounded-tr-2xl rounded-br-2xl pt-12 px-6 flex-1 relative  h-42">
        <p className="text-white text-base leading-relaxed rbf">
          Every visit to Half Million is a treat! The coffee itself is rich, smooth, and perfectly brewed every time.
        </p>
        
        {/* Decorative dots */}
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
        </div>
      </div>
    </div>
    </>

  )
}

export default WhatCustomerSay