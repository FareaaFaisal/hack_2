"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* Main Header div */}
      <div className="absolute lg:top-[45px] w-full h-fit lg:h-[87px] bg-transparent flex lg:items-center justify-between px-6 z-10 lg:flex-col flex-row mb-[100px]">
        {/* Logo */}
        <div >
          <Link href="/"><h1 className="logo mb-5 text-2xl text-white font-bold "><span className="text-[#FF9F0D]">Food</span>tuck</h1></Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          <Link href="/" className="text-white  group relative">
            Home
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>

          </Link>
          <Link href="/menu" className="text-white group relative">
            Menu
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>

          </Link>
          <Link href="/blog" className="text-white group relative">
            Blog
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>

          </Link>
          <Link href="/pages" className="text-white group relative">
            Pages
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>
          </Link>
         
          <Link href="/About" className="text-white group relative">
            About
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>
          </Link>
          <Image src="/Project Status.svg" width={12} height={12} alt="about-dropdown" className="ml-[-35px] mt-[-15px]"/>
         
        
          <Link href="/checkout" className="text-white group relative">
            Shop
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>
          </Link>
          <Link href="/signup" className="text-white group relative">
            Sign Up
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>
          </Link>

          {/* Search Section */}
          <div className="relative">
            {/* Search input field */}
            <input
              type="text"
              placeholder="Search..."
              className="lg:ml-40 lg:mr-[-25px] lg:mt-[-5px] ml-[-100px] pl-10 pr-4 py-2 w-[250px] lg:w-[310px] border rounded-3xl text-white border-[#FF9F0D] bg-transparent"
            />
            
            {/* Search icon image */}
            <Image
              src="/searchicon.svg"  
              alt="Search Icon"
              width={12} height={12}
              className="w-5 h-5 absolute right-3 mt-[-35px]"  // Test with a simple size
            />
            </div>

          {/* Handbag Icon */}
          <Link href={"/order"}>
          <Image
            src="/Handbag.svg"  
            alt="Handbag Icon"
            width={24}
            height={24}
          />
          </Link>
          
        </nav>
      </div>
    </>
  );
}
