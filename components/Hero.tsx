import Image from "next/image";

const Hero = () => {
  return (
    <div className="  min-h-[862px] hero  ">
      <section className="relative max-w-[1440px] mx-auto  px-4 xl:px-6 lg:px-8 mt-24 flex flex-col md:flex-row items-center md:items-start gap-6 text-center xl:text-left">
        <div className="flex-1 max-w-md md:max-w-none">
          {/* Hero Title Tag */}
          <h1 className="text-white text-[32px] sm:text-[40px]  md:text-[48px] font-[700]  leading-[1.5] tracking-wide text-center xl:text-left">
            Brewing
            <br />
            <span className="text-[#4A7639]">Happiness</span>,
            <br className="sm:hidden" />
            <span className="text-white">one</span>
            <br className=" hidden sm:block" />
            cup at a <br className="  sm:hidden" /> time.
          </h1>
          {/* Hero Description */}
          <div className=" sm:pl-16">
            <p className="mt-6  hero_desc   text-center xl:text-left ">
              Discover coffee made with love. Brewing happiness, one{" "}
              <br className=" hidden xl:block" />
              cup at a time.
            </p>
            {/* Hero Button */}
            <button
              className="mt-12 bg-[#A36939] hover:bg-[#a04e1a]
                      transition text-white font-[700]	 px-6 py-2
                        rounded-full
                        text-sm sm:text-[18px]"
            >
              Explore Catalog
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className=" relative hidden xl:block">
          {/* Community Card */}
          <div className=" img_card rounded-xl bg-[#4A7639] flex px-[30] py-[11px]  justify-between items-center">
            <p className=" hero_left_p">
              Join Our <br /> Community
            </p>
            <div className="flex gap-4 items-center">
              <p className="hero_left_p hero_left_p_bf">
                to enjoy monthly coffe
                <br /> surprises tailored to <br /> your taste
              </p>
              <div className=" flex items-center justify-center h-[45px] w-[45px] rounded-full bg-[#F8F8F8]">
                <Image src={"/arrow.png"} alt="" width={17} height={17} />
              </div>
            </div>
          </div>
          {/* Decorative Coffee Cup Image */}
          <Image
            alt="Top view of a coffee cup with latte
                art and green leaves around it on dark background"
            height={501}
            src={"/hero_left.png"}
            width={499}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
