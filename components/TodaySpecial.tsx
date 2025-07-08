import Image from "next/image";

const TodaySpecial = () => {
  return (
    <section className="relative  px-4 sm:px-6 lg:px-8 mt-20 bg-black  overflow-hidden min-h-[612px]  flex items-center justify-center bg2">
      <div className="relative z-10 py-12 text-center">
        <h2 className=" font-bold text-4xl uppercase tracking-widest">
          TODAY <span className="text-[#4A7639]">SPECIAL</span>
        </h2>
        <h3 className="text-white text-4xl font-extrabold mt-2">
          coffee <span className="text-[#4A7639]">time</span>
        </h3>
        <p className="text-gray-300 max-w-xl mx-auto mt-3 text-sm sm:text-base">
          Enjoy the best coffee blends brewed fresh daily. Visit us for a
          special treat.
        </p>
        <button className="mt-6 bg-[#b35a1e] hover:bg-[#a04e1a] transition text-white font-semibold px-6 py-2 rounded-md text-sm sm:text-base">
          Visit Our Outlet
        </button>
      </div>

      <Image
        alt="Decorative coffee beans cluster with leaves
    on top left side"
        className="absolute  left-0  hidden md:block md:w-[200px] lg:w-[380px] "
        height="319"
        src="/fll.png"
        width="380"
      />
      {/* Right Flower */}
      <Image
        alt="Decorative coffee beans cluster with leaves
      on top left side"
        className="absolute  right-0  hidden md:block md:w-[200px] lg:w-[380px] "
        height="319"
        src="/rightf.png"
        width="380"
      />
    </section>
  );
};

export default TodaySpecial;
