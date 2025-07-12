export default async function About() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <div>
      <div className="min-h-[862px] hero  flex flex-col items-center justify-center  p-6 text-center ">
        <h1 className=" text-[#4A7639] pb-6 text-2xl font-bold">About Us</h1>
        <p className=" text-xl max-w-lg font-rob font-normal">
          Welcome to our coffee app! Here you can learn more about our mission
          and values.
        </p>
      </div>
      <div className="pt-20 p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-amber-300">
          Our Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((post: { id: number; title: string; body: string }) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <h2 className="text-lg font-bold text-[#4A7639] mb-2 truncate">
                {post.title}
              </h2>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3 font-rob">
                {post.body}
              </p>
              <div className="flex justify-end">
                <button className="px-4 py-2 rounded-lg bg-[#4A7639] text-white font-semibold hover:bg-[#3F2305] transition text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
