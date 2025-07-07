import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      {/* <!-- Header --> */}
      <header className="  min-h-[862px] hero  ">
        <nav className="flex items-center justify-between max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4">
            <Image
              alt="Coffee shop logo, stylized coffee cup icon in white
     on black background"
              src={"/logo.png"}
              width={155}
              height={140.7}
            />
          </div>
          <ul className="hidden  md:flex space-x-18 font-[600] text-white   xl:text-[20px] nav_button ">
            <li className="home">
              <Link href={"/"}>Home</Link>
            </li>
            <li className=" text-[#B9B9B9] hover:text-white">
              <Link href={"/"}>About</Link>
            </li>
            <li className=" text-[#B9B9B9] hover:text-white">
              <Link href={"/"}>Shop</Link>
            </li>
            <li className=" text-[#B9B9B9] hover:text-white">
              <Link href={"/"}>Delivery</Link>
            </li>
          </ul>
          <button className="hidden nav_b md:block border border-green-600 text-green-600 px-8 py-3 rounded-md text-sm font-semibold hover:bg-green-600 hover:text-black transition">
            Contact Us
          </button>
          <button
            aria-label="Toggle menu"
            className="md:hidden text-white text-2xl focus:outline-none"
            id="mobile-menu-button"
          >
            <i className="fas fa-bars"></i>
          </button>
        </nav>
        <section className="relative max-w-[1440px] mx-auto  px-4 xl:px-6 lg:px-8 mt-24 flex flex-col md:flex-row items-center md:items-start gap-6 text-center xl:text-left">
          <div className="flex-1 max-w-md md:max-w-none">
            <h1 className="text-white text-[32px] sm:text-[40px]  md:text-[48px] font-[700]  leading-[1.5] tracking-wide text-center xl:text-left">
              Brewing
              <br />
              <span className="text-[#4A7639]">Happiness</span>,
              <br className="sm:hidden" />
              <span className="text-white">one</span>
              <br className=" hidden sm:block" />
              cup at a <br className="  sm:hidden" /> time.
            </h1>
            <div className=" pl-16">
              <p className="mt-6   hero_desc   text-center xl:text-left ">
                Discover coffee made with love. Brewing happiness, one{" "}
                <br className=" hidden xl:block" />
                cup at a time.
              </p>
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
          <div className=" relative hidden xl:block">
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
                  <img src={"/arrow.png"} alt="" width={17} />
                </div>
              </div>
            </div>
            <Image
              alt="Top view of a coffee cup with latte
    art and green leaves around it on dark background"
              height={501}
              src={"/hero_left.png"}
              width={499}
            />
          </div>
        </section>
      </header>
      {/* <!-- Mobile menu --> */}
      <div
        className="hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-4 font-semibold text-lg"
        id="mobile-menu"
      >
        <a className="block hover:text-green-500 transition" href="#">
          Home
        </a>
        <a className="block hover:text-green-500 transition" href="#">
          About
        </a>
        <a className="block hover:text-green-500 transition" href="#">
          Shop
        </a>
        <a className="block hover:text-green-500 transition" href="#">
          Gallery
        </a>
        <button className="w-full border border-green-600 text-green-600 px-4 py-2 rounded-md font-semibold hover:bg-green-600 hover:text-black transition">
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Header;
