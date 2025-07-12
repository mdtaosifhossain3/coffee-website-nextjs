import Image from "next/image";

export default async function Gallery() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();

  return (
    <div>
      <div className="min-h-[862px] hero  flex flex-col items-center justify-center  p-6 text-center ">
        <h1 className=" text-[#4A7639] pb-6 text-2xl font-bold">Gallery</h1>
        <p className=" text-xl max-w-lg font-rob font-normal">
          Welcome to our coffee gallery! Here you can explore our collection of
          beautiful coffee images and learn more about our products.
        </p>
      </div>
      <div className="pt-20 p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-amber-300">
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data
            .slice(0, 20)
            .map(
              (photo: {
                id: number;
                title: string;
                url: string;
                thumbnailUrl: string;
              }) => (
                <div
                  key={photo.id}
                  className="bg-teal-700 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <Image
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    width={200}
                    height={200}
                  />
                  <h2 className="text-lg font-bold  mb-2 truncate">
                    {photo.title}
                  </h2>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
}
