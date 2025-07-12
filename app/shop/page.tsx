import Image from "next/image";

export default async function Shop() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  console.log(data);

  return (
    <div>
      <div className="min-h-[862px] hero  flex flex-col items-center justify-center  p-6 text-center ">
        <h1 className=" text-[#4A7639] pb-6 text-2xl font-bold">Our Shop</h1>
        <p className=" text-xl max-w-lg font-rob font-normal">
          Explore our collection of premium coffee products. From beans to
          brewers, we have everything you need to enjoy the perfect cup.
        </p>
      </div>
      <div className="pt-20 p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-amber-300">
          Our Shop
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {data.map(
            (product: {
              id: number;
              title: string;
              image: string;
              price: number;
            }) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-full h-[200px] mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={300}
                    className="w-full h-full object-cover "
                  />
                </div>
                <h2 className="text-sm font-bold text-[#4A7639] ">
                  {product.title}
                </h2>

                <p className="text-gray-700 text-2xl   font-rob font-bold">
                  ${product.price.toFixed(2)}
                </p>

                <div className="flex justify-end">
                  <button className="px-4 py-2 rounded-lg bg-[#4A7639] text-white font-semibold hover:bg-[#3F2305] transition text-xs">
                    View Details
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
