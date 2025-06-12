import Image from "next/image";
import Link from "next/link";
import ImageSlider from "@/components/CoffeeSlider";

export default function Home() {
  // Main homepage structure based on Figma layout
  return (
   <div>
    
 <div className="bg-[#F8F8F8] text-white relative">
 <img alt="Decorative coffee beans cluster with leaves 
  on top left side" 
  className="absolute  left-0 top-[740px] hidden md:block" 
  height="319px" 
  src="/fll.png" 
  width="280px"/>
  {/* Right Flower */}
  <img alt="Decorative coffee beans cluster with leaves 
  on top left side" 
  className="absolute  right-0 top-[1680px] hidden md:block" 
  height="319px" 
  src="/rightf.png" 
  width="280px"/>
  {/* <!-- Header --> */}
  <header className=" min-h-[862px] hero  ">
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
    <ul className="hidden  md:flex space-x-18 font-[600] text-white text-[20px] nav_button ">
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
    <button aria-label="Toggle menu" className="md:hidden text-white text-2xl focus:outline-none" id="mobile-menu-button">
     <i className="fas fa-bars">
     </i>
    </button>
   </nav>
   <section className="relative max-w-[1440px] mx-auto  px-4 sm:px-6 lg:px-8 mt-24 flex flex-col md:flex-row items-center md:items-start gap-6">
   <div className="flex-1 max-w-md md:max-w-none">
    <h1 className="text-white text-[48px] font-[700]  leading-[1.5] tracking-wide">
     Brewing
     <br/>
     <span className="text-[#4A7639]">
      Happiness
     </span>
     , 
     <span className="text-white">
      one
     </span>
     <br/>
     cup at a time.
    </h1>
<div className=" pl-[70px] ">
<p className="mt-6   hero_desc max-w-[530px] ">
    Discover coffee made with love. Brewing happiness, one cup at a time.
    </p>
    <button className="mt-12 bg-[#A36939] hover:bg-[#a04e1a] 
    transition text-white font-[700]	 px-6 py-2 
    rounded-full 
    text-sm sm:text-[18px]">
     Explore Catalog
    </button>
</div>
   </div>
   <div className=" relative">
   <div className=" img_card rounded-xl bg-[#4A7639] flex px-[30] py-[11px]  justify-between items-center">
     <p className=" hero_left_p">Join Our <br/> Community</p>
      <div className="flex gap-4 items-center">
        <p className="hero_left_p hero_left_p_bf">to enjoy monthly coffe
          <br/> surprises tailored to <br/> your taste</p>
          <div className=" flex items-center justify-center h-[45px] w-[45px] rounded-full bg-[#F8F8F8]">
            <img src={"/arrow.png"} alt="" width={17}/>
          </div>
        
      </div>
     </div>
    <Image 
    alt="Top view of a coffee cup with latte 
    art and green leaves around it on dark background" 
   
    height= {501}
    src={"/hero_left.png"}
    width={499}/>

   </div>
  </section>
  </header>
  {/* <!-- Mobile menu --> */}
  <div className="hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-4 font-semibold text-lg" id="mobile-menu">
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
  {/* <!-- Hero Section --> */}

  <section className="  max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative flex flex-col items-center text-center">
   <h2 className="  text-green-600 font-bold  uppercase tracking-widest text-5xl">
   <span className="text-[#3F2305]">We</span>  <span className=" text-[#4A7639]">provide</span> 
   </h2>
   <h3 className="text-gray-900 dark:text-white  text-4xl font-bold mt-2">
    <span className="text-[#4A7639]">QUALITY</span> 
    <span  className="text-[#3F2305]">COFFEE TO DELIVER</span>
    
   </h3>
   <p className="text-gray-500 max-w-xl mt-3 text-sm sm:text-[18px]">
   Discover coffee made with love. Brewing happiness, one cup at a time.
   </p>
 
  </section>
    {/* <!-- Three coffee images row --> */}
    <ImageSlider />
  {/* <!-- Our Product Section --> */}
  <section className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative">
  <section className="  max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative flex flex-col items-center text-center">
   <h2 className="  text-green-600 font-bold  uppercase tracking-widest text-5xl">
   <span className="text-[#3F2305]">our</span>  <span className=" text-[#4A7639]">product</span> 
   </h2>
   <h3 className="text-gray-900 dark:text-white  text-4xl font-bold mt-2">
    <span className="text-[#4A7639]">premium</span> 
    <span  className="text-[#3F2305]">coffee to available</span>
    
   </h3>
   <p className="text-gray-500 max-w-xl mt-3 text-sm sm:text-[18px]">
   Discover coffee made with love. Brewing happiness, one cup at a time.
   </p>
 
  </section>
   <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
   {/* 1 */}
    <div className="bg-white rounded-3xl shadow-2xl  text-left text-black">
     <img alt="Americano coffee cup on white background with coffee beans" className="rounded-t-3xl  w-full h-[213px] object-cover"  src="https://storage.googleapis.com/a1aa/image/506fb135-3d17-44ff-ddcb-f19f8016fd8c.jpg" width="320"/>
     <h3 className="font-semibold mt-3  rbf text-[22px] pl-6 ">
      Americano
     </h3>
     <p className=" text-[15px] mt-1 text-gray-700 rbf pl-6 ">
      A classNameic espresso diluted with hot water for a smooth taste.
     </p>
     <p className="  mt-2  font-bold rbf pl-6 text-[24px] pb-4">
     20$
     </p>
    </div>
    {/* 2 */}
    <div className="bg-white rounded-3xl  shadow-2xl  text-left text-black">
     <img alt="Americano coffee cup on white background with coffee beans" className="rounded-t-3xl   w-full  h-[213px] object-cover"  src="https://storage.googleapis.com/a1aa/image/09adab06-1c9b-4d19-ba0f-7e34af18f6e0.jpg" width="320"/>
     <h3 className="font-semibold mt-3  rbf text-[22px] pl-6 ">
     Cookies
     </h3>
     <p className=" text-[15px] mt-1 text-gray-700 rbf pl-6 ">
     Freshly baked cookies to complement your coffee break.
     </p>
     <p className="  mt-2  font-bold rbf pl-6 text-[24px] pb-4">
     20$
     </p>
    </div>
    {/* 3 */}
    <div className="bg-white rounded-3xl  shadow-2xl  text-left text-black">
     <img alt="Americano coffee cup on white background with coffee beans" className="rounded-t-3xl   w-full  h-[213px] object-cover"  src="https://storage.googleapis.com/a1aa/image/0af2baba-150d-4d5a-2d06-4658e4993a47.jpg" width="320"/>
     <h3 className="font-semibold mt-3  rbf text-[22px] pl-6 ">
     Cappuccino
     </h3>
     <p className=" text-[15px] mt-1 text-gray-700 rbf pl-6 ">
     Espresso with steamed milk foam, rich and creamy.     </p>
     <p className="  mt-2  font-bold rbf pl-6 text-[24px] pb-4">
     20$
     </p>
    </div>

   </div>
  </section>
  

 
  {/* <!-- Our Shop Section --> */}
  <section className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
   <h2 className="text-gray-900 dark:text-white font-extrabold text-3xl">
    OUR SHOP
   </h2>
   <p className="text-gray-700 mt-1 font-semibold text-xl">
    our dream gallery
   </p>
  </section>
  {/* <!-- Gallery images --> */}
  <section className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
   <img alt="Coffee shop interior with wooden shelves and coffee equipment" className="rounded-lg object-cover w-full h-44" height="180" src="https://storage.googleapis.com/a1aa/image/36121e33-012e-4662-3ba6-bc7a8ac6d477.jpg" width="280"/>
   <img alt="Closeup of roasted coffee beans in burlap sack" className="rounded-lg object-cover w-full h-44" height="180" src="https://storage.googleapis.com/a1aa/image/2fa13263-c9d8-4bf9-d23f-71172381e639.jpg" width="280"/>
   <img alt="Latte art in red coffee cup on wooden table" className="rounded-lg object-cover w-full h-44 col-span-2" height="180" src="https://storage.googleapis.com/a1aa/image/5dda58ec-65d4-47f0-227d-663847437b55.jpg" width="280"/>
   <img alt="Coffee cup with green leaves on dark background" className="rounded-lg object-cover w-full h-44" height="180" src="https://storage.googleapis.com/a1aa/image/c0cc515d-1a17-4ee0-afec-57f3a88e872b.jpg" width="280"/>
   <img alt="Barista making coffee with espresso machine" className="rounded-lg object-cover w-full h-44" height="180" src="https://storage.googleapis.com/a1aa/image/da29e51c-831a-452d-6ab5-48f26fb12156.jpg" width="280"/>
  </section>
  {/* <!-- Decorative coffee beans left side --> */}
 
  {/* <!-- What Our Customers Say Section --> */}
  <section className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 flex flex-col md:flex-row items-center gap-6">
   <div className="flex-1 text-left">
    <h2 className="text-green-600 font-bold text-lg uppercase tracking-widest">
     WHAT
    </h2>
    <h3 className="text-gray-900 dark:text-white text-3xl font-extrabold mt-2">
     our customers say
    </h3>
    <p className="text-gray-500 max-w-md mt-3 text-sm sm:text-base">
     Discover what our customers say about our coffee and service.
    </p>
   </div>
   <div className="flex-1 bg-green-700 rounded-lg p-6 text-white max-w-md shadow-lg">
    <div className="flex items-center space-x-4">
     <img alt="Photo of customer named Benjamin smiling" className="rounded-full w-20 h-20 object-cover" height="80" src="https://storage.googleapis.com/a1aa/image/d992a703-6aaf-4923-771d-215d1ecd3bbf.jpg" width="80"/>
     <div>
      <h4 className="font-semibold text-lg">
       Benjamin
      </h4>
      <p className="text-sm mt-1">
       Every cup is a celebration of taste! The coffee here is rich and
            full of flavor.
      </p>
     </div>
    </div>
   </div>
  </section>
  {/* <!-- Today Special Section --> */}
  <section className="relative max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 bg-black rounded-lg overflow-hidden">
   <img alt="Dark coffee shop interior with warm lighting and coffee cups on table" className="w-full h-48 object-cover opacity-30 absolute inset-0" height="200" src="https://storage.googleapis.com/a1aa/image/7d08d5de-37f0-4633-3366-688ff438f199.jpg" width="1189"/>
   <div className="relative z-10 py-12 text-center">
    <h2 className="text-green-600 font-bold text-lg uppercase tracking-widest">
     TODAY SPECIAL
    </h2>
    <h3 className="text-white text-4xl font-extrabold mt-2">
     coffee time
    </h3>
    <p className="text-gray-300 max-w-xl mx-auto mt-3 text-sm sm:text-base">
     Enjoy the best coffee blends brewed fresh daily. Visit us for a
        special treat.
    </p>
    <button className="mt-6 bg-[#b35a1e] hover:bg-[#a04e1a] transition text-white font-semibold px-6 py-2 rounded-md text-sm sm:text-base">
     Order Now
    </button>
   </div>
  </section>
  {/* <!-- Footer --> */}
  <footer className="bg-[#111111] text-gray-400 mt-20">
   <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
     <img alt="Coffee shop logo in footer" className="w-10 h-10 mb-4" height="40" src="https://storage.googleapis.com/a1aa/image/702c8c9e-e833-46a0-310e-643eb687641f.jpg" width="40"/>
     <p className="text-sm">
      Brewing happiness one cup at a time. Visit us for the finest coffee.
     </p>
     <div className="flex space-x-4 mt-4 text-lg">
      <a aria-label="Facebook" className="hover:text-green-500" href="#">
       <i className="fab fa-facebook-f">
       </i>
      </a>
      <a aria-label="Twitter" className="hover:text-green-500" href="#">
       <i className="fab fa-twitter">
       </i>
      </a>
      <a aria-label="Instagram" className="hover:text-green-500" href="#">
       <i className="fab fa-instagram">
       </i>
      </a>
      <a aria-label="LinkedIn" className="hover:text-green-500" href="#">
       <i className="fab fa-linkedin-in">
       </i>
      </a>
     </div>
    </div>
    <div>
     <h4 className="font-semibold mb-4">
      About
     </h4>
     <ul className="space-y-2 text-sm">
      <li>
       <a className="hover:text-green-500" href="#">
        Our Story
       </a>
      </li>
      <li>
       <a className="hover:text-green-500" href="#">
        Team
       </a>
      </li>
      <li>
       <a className="hover:text-green-500" href="#">
        Careers
       </a>
      </li>
      <li>
       <a className="hover:text-green-500" href="#">
        Blog
       </a>
      </li>
     </ul>
    </div>
    <div>
     <h4 className="font-semibold mb-4">
      Help
     </h4>
     <ul className="space-y-2 text-sm">
      <li>
       <a className="hover:text-green-500" href="#">
        FAQs
       </a>
      </li>
      <li>
       <a className="hover:text-green-500" href="#">
        Shipping
       </a>
      </li>
      <li>
       <a className="hover:text-green-500" href="#">
        Returns
       </a>
      </li>
      <li>
       <a className="hover:text-green-500" href="#">
        Contact Support
       </a>
      </li>
     </ul>
    </div>
    <div>
     <h4 className="font-semibold mb-4">
      Contact Us
     </h4>
     <p className="text-sm">
      123 Coffee St, Brew City, CA 90210
     </p>
     <p className="text-sm mt-2">
      Email: support@coffee.com
     </p>
     <p className="text-sm mt-1">
      Phone: (123) 456-7890
     </p>
    </div>
   </div>
   <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-600">
    © 2024 Coffee Shop. All rights reserved.
   </div>
  </footer>

 </div>


   </div>
  );
}

