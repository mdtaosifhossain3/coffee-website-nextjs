import Image from "next/image";

const GalleryImage = () => {
  return (
    <div>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8  md:text-right mt-44 mb-20 text-center">
        <h2 className="text-gray-900  font-extrabold sm:text-5xl">
          OUR <span className="text-[#4A7639]">SHOP</span>
        </h2>
        <p className="text-gray-700 mt-1 font-semibold sm:text-4xl">
          our dream <span className="text-[#4A7639]">gallery</span>
        </p>
        <p className=" text-black text-[8px] sm:text-[12px] mt-2">
          Discover coffee made with love. Brewing <br /> happiness, one cup at a
          time.
        </p>
      </section>
      {/* <!-- Gallery images --> */}
      <section className="max-w-[1187px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Image
          alt="Coffee shop interior with wooden shelves and coffee equipment "
          className="rounded-3xl object-cover w-full   col-span-2"
          src="/gallery/1.png"
          width={524}
          height={283}
        />
        <Image
          alt="Coffee shop interior with wooden shelves and coffee equipment "
          // className="rounded-lg object-cover w-full   col-span-2"
          src="/gallery/4.png"
          width={632}
          height={581}
          className="rounded-3xl object-cover   row-span-2 col-span-2 h-full"
        />

        <Image
          alt="Coffee cup with green leaves on dark background"
          className="rounded-3xl object-cover w-full h-full"
          src="/gallery/2.png"
          width={241}
          height={283}
        />
        <Image
          alt="Barista making coffee with espresso machine"
          className="rounded-3xl object-cover w-full h-full"
          src="/gallery/3.png"
          width={268}
          height={283}
        />
      </section>
    </div>
  );
};

export default GalleryImage;
