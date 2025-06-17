const OurProduct = () => {
return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative">
    <section className=" max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative flex flex-col items-center text-center">
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
     <div className=" xl:gap-20 max-w-[1440px] mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10  mx-auto ">
     {/* 1 */}
      <div className="bg-white rounded-3xl shadow-2xl  text-left text-black">
       <img alt="Americano coffee cup on white background with coffee beans" className="rounded-t-3xl  w-full h-[313px] object-cover"  src="https://storage.googleapis.com/a1aa/image/506fb135-3d17-44ff-ddcb-f19f8016fd8c.jpg" width="320"/>
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
       <img alt="Americano coffee cup on white background with coffee beans" className="rounded-t-3xl   w-full   h-[313px] object-cover"  src="https://storage.googleapis.com/a1aa/image/09adab06-1c9b-4d19-ba0f-7e34af18f6e0.jpg" width="320"/>
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
       <img alt="Americano coffee cup on white background with coffee beans" className="rounded-t-3xl   w-full   h-[313px] object-cover"  src="https://storage.googleapis.com/a1aa/image/0af2baba-150d-4d5a-2d06-4658e4993a47.jpg" width="320"/>
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
)
}

export default OurProduct