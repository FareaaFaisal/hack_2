import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";


// TypeScript type for food items
type FoodItem = {
  name: string;
  price: number;
  originalPrice: number;
  slug: string;
  image_url: string;
};

// Sanity query to fetch food items
const query = `*[_type=='food']{
  name, 
  price, 
  originalPrice, 
  "slug": slug.current,
  "image_url": image.asset->url
}`;

// Async server component to fetch food data
export default async function Shop() {
  const food: FoodItem[] = await client.fetch(query);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Navbar / Hero Section */}
      <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src="/unsplash_4ycv3Ky1ZZU.png"
          alt="Banner Image"
          width={500}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-50 max-w-4xl mx-auto flex flex-col items-center justify-center text-center p-6 min-h-[350px]">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-8">Our Shop</h2>
          <div className="flex items-center space-x-2 text-white">
            <Link href="/" className="text-white">Home</Link>
            <span className="text-white"> &gt; </span>
            <Link href="/menu" className="text-orange-500">Shop</Link>
          </div>
        </div>
      </div>

      {/* Shop Page */}
      <div className="mt-10 mb-10 mx-auto flex flex-wrap lg:flex-nowrap justify-center gap-4">
        {/* Main Content */}
        <div className="flex flex-col gap-4 w-full lg:w-[70%]">
          {/* Sort and Filter */}
          <div className="flex flex-wrap gap-4 mt-20 items-center justify-center">
            <p>Sort By: &nbsp;</p>
            <select className="w-[30%] pl-3 pr-3 py-2 border rounded focus:ring focus:ring-yellow-300 text-gray-600">
              <option value="newest">Newest</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
              <option value="best-sellers">Best Sellers</option>
            </select>

            <p>Show: &nbsp;</p>
            <select className="w-[30%] pl-3 pr-3 py-2 border rounded focus:ring focus:ring-yellow-300 text-gray-600">
              <option value="default">Default</option>
              <option value="fast-food">Fast Food</option>
              <option value="dessert">Desserts</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>

          {/* Dynamic Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  {food.map((item, index) => (
    <Link key={index} href={`/shop/${item.slug}`}>
      <div className="flex flex-col items-center cursor-pointer">
        <Image
          src={item.image_url}
          alt={item.name}
          width={300}
          height={300}
          className="object-cover rounded-lg"
        />
        <p className="text-2xl text-[#333333] font-bold">{item.name}</p>
        <p className="text-[#FF9F0D]">
          ${item.price.toFixed(2)}{" "}
          <span>
            <del>${item.originalPrice.toFixed(2)}</del>
          </span>
        </p>
      </div>
    </Link>
  ))}
</div>


          {/* Go to Checkout Button */}
          {/* <Link href="/checkout">
            <button className="mt-10 mb-10 lg:mt-20 mx-auto border border-[#FF9F0D] bg-transparent text-black flex items-center justify-center rounded-[36px] w-[150px] h-[50px] lg:w-[190px] lg:h-[60px]">
              Go to Checkout
            </button>
          </Link> */}
        </div>

        {/* Sidebar */}
        <div className="mt-[170px] w-full lg:w-[25%] flex flex-col gap-8">
          {/* Search Box */}
          <div className="flex w-full border-1">
            <input
              type="text"
              placeholder="Search Your Keyword Here"
              className="w-full px-3 py-3 bg-zinc-100 border border-gray-300"
            />
            <button className="w-[76px] h-auto flex items-center justify-center bg-[#FF9F0D]">
              <Image src="/Group (2).svg" alt="search icon" width={24} height={24} />
            </button>
          </div>

          {/* Recent Posts */}
          <div className="border p-4">
            <h1 className="font-bold mb-4">Recent Posts</h1>
            {["Recent post.png", "Recent post (1).png", "Recent post (2).png", "Recent post (3).png"].map((post, index) => (
              <Image
                key={index}
                src={`/${post}`}
                alt="Recent Post"
                width={323}
                height={107}
                className="cursor-pointer mb-4"
              />
            ))}
          </div>

          {/* Filter By Menu */}
          <div className="border p-4">
            <h1 className="font-bold mb-4">Filter By Menu</h1>
            {["Chicken Fry.png", "Chicken Fry (1).png", "Chicken Fry (2).png", "Chicken Fry (3).png", "Chicken Fry (4).png"].map((menu, index) => (
              <Image
                key={index}
                src={`/${menu}`}
                alt="Menu Item"
                width={323}
                height={62}
                className="cursor-pointer mb-4"
              />
            ))}
          </div>

          {/* Popular Tag */}
          <div className="border p-4">
            <h1 className="font-bold mb-4">Popular Tag</h1>
            <Image src="/Popular Tag.png" alt="Popular Tag" width={324} height={167} />
          </div>
        </div>
      </div>
    </div>
  );
}
