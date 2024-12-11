import Link from "next/link";
import Image from "next/image";

export default function Shop() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Nav bar */}
      <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src="unsplash_4ycv3Ky1ZZU.png"
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">Our Shop</h2>
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
          {/* Sort Div */}
          <div className="flex flex-wrap gap-4 mt-20 items-center justify-center">
            <p>Sort By: &nbsp;</p>
            <input
              type="text"
              className="w-[30%] pl-3 pr-3 py-2 border rounded focus:ring focus:ring-yellow-300 focus:outline-none"
              placeholder="Newest"
            />
            <p>Show: &nbsp;</p>
            <input
              type="text"
              className="w-[30%] pl-3 pr-3 py-2 border rounded focus:ring focus:ring-yellow-300 focus:outline-none"
              placeholder="Default"
            />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Item */}
            {[
              { img: "n11.png", title: "Fresh Lime", price: "$38.00", oldPrice: "$45.00" },
              { img: "n22.png", title: "Chocolate Muffin", price: "$38.00", oldPrice: "$45.00" },
              { img: "Mask Group (1).png", title: "Burger", price: "$38.00", oldPrice: "$45.00" },
              { img: "Mask Group (2).png", title: "Country Burger", price: "$38.00", oldPrice: "$45.00" },
              { img: "Mask Group (3).png", title: "Drinks", price: "$38.00", oldPrice: "$45.00" },
              { img: "Mask Group (4).png", title: "Pizza", price: "$38.00", oldPrice: "$45.00" },
              { img: "Mask Group (5).png", title: "Cheese Butter", price: "$38.00", oldPrice: "$45.00" },
              { img: "Mask Group (6).png", title: "Sandwiches", price: "$38.00", oldPrice: "$45.00" },
              { img: "Mask Group (7).png", title: "Chicken Chup", price: "$38.00", oldPrice: "$45.00" },
            ].map((product, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image src={product.img} alt={product.title} className="w-full h-auto object-cover" />
                <p className="text-2xl text-[#333333] font-bold">{product.title}</p>
                <p className="text-[#FF9F0D]">
                  {product.price} <span><del>{product.oldPrice}</del></span>
                </p>
              </div>
            ))}
          </div>
                    {/* Button */}
  <Link href="/checkout">
  <button className="mt-10 lg:mt-20 mb-2 mx-auto border border-[#FF9F0D] bg-transparent text-black flex justify-center items-center text-center rounded-[36px] w-[150px] h-[50px] lg:w-[190px] lg:h-[60px]">
      Go to Checkout
    </button>
    </Link> 
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[30%] flex flex-col gap-8">
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
              <Image key={index} src={`/${post}`} alt="Recent Post" width={323} height={107} className="cursor-pointer mb-4" />
            ))}
          </div>

          {/* Filter By Menu */}
          <div className="border p-4">
            <h1 className="font-bold mb-4">Filter By Menu</h1>
            {["Chicken Fry.png", "Chicken Fry (1).png", "Chicken Fry (2).png", "Chicken Fry (3).png", "Chicken Fry (4).png"].map((menu, index) => (
              <Image key={index} src={`/${menu}`} alt="Menu Item" width={323} height={62} className="cursor-pointer mb-4" />
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
