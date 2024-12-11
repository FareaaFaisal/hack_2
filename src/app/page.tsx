import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>
      <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
    rel="stylesheet"
  />
</Head>

<div className="overflow-x-hidden">
      <div>                   {/*  page main div */}
        {/* ----------------    Section - 1 ------------------ */}
        <div
          //  section 1 div bg image
          className="pt-[800px] h-fit relative w-full lg:h-[900px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/div1-bg.svg')",
          }}
        >
          <div className="pt-[20px] absolute inset-0 bg-[#0D0D0D] bg-opacity-95 pl-[20px] lg:pt-[120px] pr-[20px]">
            {/* section 1 sub-div */}
            <div className="mt-[390px] lg:mt-[200px] flex justify-center flex-row  ml-10 mr-5 ">
            <div className="flex flex-col gap-4 items-center mt-[-40px] mr-10">
            <hr className="w-[2px] h-36 bg-white"></hr>
            <div className="flex flex-col gap-10">
              <Image src="/icon-1.svg" alt="icon1" width={25} height={25}/>
              <Image src="/icon-2.svg" alt="icon2" width={25} height={25}/>
              <Image src="/icon-3.svg" alt="icon3" width={25} height={25}/>
            </div>
            <hr className="w-[2px] h-36 bg-white"></hr>
            </div>
              <div className="w-[472px] h-[356px] text-white flex-col">
                {/* div-1 content */}
               <Image src="/Its Quick & Amusing!.svg" alt="heading" className="h-10"/>
               
               <h1 className="logo mb-4 lg:text-6xl ml-6 text-xl mt-6  text-white font-bold"><span className="text-[#FF9F0D]">Th</span>e Art of Speed food Quality</h1>
              <p className="mt-16 w-[218px] lg:flex-nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue</p>
<Link href="/menu"><button className="mt-10 bg-[#FF9F0D] text-center rounded-[36px] w-[190px] h-[45px] lg:h-[60px]">See Menu</button></Link>
              </div>
              <div>
                <Image
                  src="/Image.svg"
                  alt="sec1-image"
                  height={400}
                  width={800}
                  className="md:w-[100%] md:h-[100%]  mt-[-70px] float-right"
                />
              </div>
              {/* section 1 div inside image */}
              
            </div>
          
            
          </div>
        </div>

        {/* ----------------    Section - 2 ------------------ */}
   
<div className="bg-black bg-opacity-97 w-full h-screen md:h-fit pt-20 pb-20 px-4 lg:pl-28 lg:pr-28">
  {/* Section 2 outer div */}
  <div className="max-w-screen-xl flex flex-col lg:flex-row lg:gap-20 md:flex-row items-center md:items-start h-fit mx-auto">
    {/* Section 2 inner div */}
    <div className="w-full md:w-[600px] lg:w-[40%] mb-8 md:mb-0">
      {/* Section 2 content */}
      <div className="text-white">
        <Image src="/abth.svg" className="h-10" alt="About Icon" />

        <h1 className="logo mb-4 text-3xl md:text-5xl mt-4 font-bold">
          <span className="text-[#FF9F0D]">We</span> create the best foody product
        </h1>

        <p className="mt-4 md:mt-8 text-sm md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed tempore illum ratione. Quibusdam temporibus mollitia animi repellat quod Lorem ipsum dolor sit amet consectetur.
        </p>

        <div className="mt-6 flex gap-4 items-start">
          <Image src="/check.svg" className="mt-1 w-5 h-5" alt="Check Icon" />
          <p className="text-sm md:text-lg">Lacus nisi, et ac dapibus sit eu velit consequat.</p>
        </div>
        <div className="mt-4 flex gap-4 items-start">
          <Image src="/check.svg" className="mt-1 w-5 h-5" alt="Check Icon" />
          <p className="text-sm md:text-lg">Quisque diam pellentesque bibendum non dui volutpat fringilla.</p>
        </div>
        <div className="mt-4 flex gap-4 items-start">
          <Image src="/check.svg" className="mt-1 w-5 h-5" alt="Check Icon" />
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        
<Link href="/menu">
<button className="mt-10 bg-[#FF9F0D] text-center rounded-[36px] w-[190px] h-[45px] lg:h-[60px]">
  Read More
  </button>
</Link>
      </div>
    </div>

    {/* Section 2 images */}
    <div className="flex flex-col lg:w-[660px] gap-4 w-full md:w-[562px]">
      <div>
        <Image
          src="/sec-2(img3).svg"
          alt="Main Section Image"
          className="w-full h-auto max-w-[660px] mx-auto"
        />
      </div>
      <div className="flex flex-wrap flex-row md:flex-nowrap gap-4 justify-center md:justify-start">
        <Image
          src="/sec-2(img1).svg"
          alt="Image 1"
          className="w-[48%] md:w-[322px] h-auto"
        />
        <Image
          src="/sec-2(img2).svg"
          alt="Image 2"
          className="w-[48%] md:w-[322px] h-auto"
        />
      </div>
    </div>
  </div>
</div>

                                   {/* section - 2 outer div close*/}
        
     {/* ---------------- Section - 3 ------------------ */}
{/* ---------------- Section - 3 ------------------ */}
<div className="w-full lg:h-[1550px] h-fit bg-black bg-opacity-97 p-4 mr-5 pt-[500px] lg:pt-20 md:pt-6">
  {/* Outer container */}
  <div className="relative flex flex-col items-center">
    {/* Background image */}
    <div
      className=" absolute top-[280px] right-[-40px] w-full md:w-1/4 lg:w-1/4 h-[900px] md:h-3/4 lg:h-3/4 bg-cover bg-center"
      style={{ backgroundImage: "url('/sec-3-bg.svg')" }}
    ></div>

    {/* Header content */}
    <Image src="/Food Category.svg" className="h-10" alt="Food Category" />
    <h1 className="logo mb-4 text-4xl md:text-5xl lg:text-5xl mt-4 text-white font-bold">
      <span className="text-[#FF9F0D]">Ch</span>oose Food Item
    </h1>

    {/* Food items */}
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 lg:mt-20">
      <Image src="/sec-3-img1.png" alt="food-pic" className="w-1/2 sm:w-1/4 md:w-1/5 h-auto" />
      <Image src="/sec-3-img2.svg" alt="food-pic" className="w-1/2 sm:w-1/4 md:w-1/5 h-auto" />
      <Image src="/sec-3-img3.svg" alt="food-pic" className="w-1/2 sm:w-1/4 md:w-1/5 h-auto" />
      <Image src="/sec-4-img4.svg" alt="food-pic" className="w-1/2 sm:w-1/4 md:w-1/5 h-auto" />
    </div>

    {/* Section 2 content */}
    <div className="w-full h-auto flex gap-6 md:gap-10 lg:gap-28 ml-0 md:ml-[48px] mt-14 md:mt-36 justify-center">
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Images */}
        <div className="flex flex-row gap-4 sm:gap-6 flex-wrap md:flex-nowrap">
          <Image src="/choose-us-img1.svg" alt="food-pic" className="w-full sm:w-1/2 md:w-[362px] h-auto" />
          <Image src="/choose-us-img2.svg" alt="food-pic" className="w-full sm:w-1/2 md:w-[281px] h-auto mt-[60px] sm:mt-0" />
        </div>

        <div className="flex flex-row gap-4 sm:gap-6 flex-wrap md:flex-nowrap">
          <Image src="/choose-us-img3.svg" alt="food-pic" className="w-full sm:w-1/2 md:w-[244px] h-auto" />
          <Image src="/choose-us-img4.svg" alt="food-pic" className="w-full sm:w-1/2 md:w-[221px] h-auto" />
          <div className="flex flex-col gap-4 sm:gap-6">
            <Image src="/choose-us-img5.svg" alt="food-pic" className="w-[161px] h-[168px]" />
            <Image src="/choose-us-img6.svg" alt="food-pic" className="w-[161px] h-[166px]" />
          </div>
        </div>
      </div>

      {/* Content div */}
      <div className="w-full sm:w-[400px] h-fit md:w-[562px] lg:w-[600px] flex flex-col text-white">
        <Image src="/ch.svg" className="h-10" alt="ch-logo" />
        <h1 className="logo mb-4 text-4xl md:text-5xl lg:text-5xl mt-4 text-white font-bold">
          <span className="text-[#FF9F0D]">Ex</span>tra ordinary taste And Experienced
        </h1>
        <p className="mt-8 sm:w-full md:w-[526px] lg:w-[526px] mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed tempore illum ratione.
        </p>

        {/* Icons */}
        <div className="flex gap-4 sm:gap-6 md:gap-8">
          <div className="bg-[#FF9F0D] w-[102px] h-[100px] p-4 rounded-lg">
            <div className="flex flex-col items-center">
              <Image src="/Hamburger.png" alt="Hamburger pic" className="h-[56px] w-[56px]" />
              <p className="mt-10">Fast Food</p>
            </div>
          </div>

          <div className="bg-[#FF9F0D] w-[102px] h-[100px] p-4 rounded-lg">
            <div className="flex flex-col items-center">
              <Image src="/Cookie.svg" alt="Cookie pic" className="h-[56px] w-[56px]" />
              <p className="mt-10">Dinner</p>
            </div>
          </div>

          <div className="bg-[#FF9F0D] w-[102px] h-[100px] p-4 rounded-lg">
            <div className="flex flex-col items-center">
              <Image src="/Wine.svg" alt="Wine pic" className="h-[56px] w-[56px]" />
              <p className="mt-10">Lunch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



       {/* ----------------    Section - 4 ------------------ */}
       <Image src="/banner1.svg" alt="bannner" layout="responsive" 
  width={1920} height={469} className="bg-black bg-opacity-97 pb-10"/>

       {/* ----------------    Section - 5 ------------------ */}
       <div className="w-full h-[1700px] lg:h-[900px] bg-black bg-opacity-97 p-4 mr-5">  
       <div className="flex flex-col items-center">
<Image src="/Choose & pick.svg" alt="-" className="h-10 mt-16"/>
               
               <h1 className="logo mb-16 text-5xl mt-4  text-white font-bold"><span className="text-[#FF9F0D]">Fr</span>om Our Menu</h1>
        </div>
               <div className="flex flex-col">        {/*inner div*/}
{/*  nav bar div */}

        {/* Navigation Links */}
        <nav className="flex lg:flex-row flex-col gap-2  mb-20 justify-center lg:gap-20">
          <Link href="/" className="text-white hover:text-[#FF9F0D] ">
           Breakfast
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] items-center"></span>

          </Link>
          <Link href="/lunch" className="text-white hover:text-[#FF9F0D] ">
           Lunch
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] items-center "></span>

          </Link>
          <Link href="/dinner" className="text-white hover:text-[#FF9F0D] ">
            Dinner
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] items-center l"></span>

          </Link>
          <Link href="/desert" className="text-white hover:text-[#FF9F0D]">
            Desert
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] items-center"></span>
          </Link>

          <Link href="/drink" className="text-white hover:text-[#FF9F0D]">
            Drink
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] items-center"></span>
          </Link>
         
          <Link href="/snack" className="text-white hover:text-[#FF9F0D]">
            Snack
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] items-center"></span>
          </Link>
          
         
        
          <Link href="/soup" className="text-white hover:text-[#FF9F0D]">
            Soups
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px]group-hover:w-2 items-center"></span>
          </Link>
         

          
        
          
        </nav>
<div className="flex flex-row gap-2 lg:gap-16 justify-center">
        <div className="pt-[10px] ml-[20px] relative flex flex-row items-center lg:mt-16">     {/* left div*/}
  {/* Background Image */}
  <Image src="/sec5-imgbg.png" alt="bg" className="lg:h-[406px] h-[200px] w-[200px] lg:w-[515px] mt-[-40px]" />
  
  {/* Front Image */}
  <Image 
    src="/sec5-imgfront.svg" 
    alt="heading"
    className="absolute h-[366px] w-[362px]" 
    style={{ top: "50%", transform: "translateY(-50%)" }} 
  />
</div>
<div className="flex flex-col lg:flex-row gap-2 ml-[-100px] mt-[80px] lg:gap-8 flex-wrap">     {/*right div*/}
<div className="flex flex-col gap-8"> {/*col 1 div*/}
<div className="flex flex-row gap-2">     {/*food 1 div*/}
  <Image src="/unsplash_OFismyezPnY.svg" alt="Lettuce Leaf" width={80} height={70}/>
  <div className="flex flex-col">
  <p className=" text-white"><b>Lettuce Leaf</b></p>
  <p className="text-sm text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
  <p className="text-lg text-[#FF9F0D]">12.5$</p>
  </div>
</div>    {/*food 3 close*/}
<div className="flex flex-row gap-2">     {/*food 3 div*/}
  <Image src="/unsplash_-GFCYhoRe48.svg" alt="food pic" width={80} height={70}/>
  <div className="flex flex-col">
  <p className=" text-white"><b>Fresh Breakfast</b></p>
  <p className="text-sm text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
  <p className="text-lg text-[#FF9F0D]">14.5$</p>
  </div>
</div>    {/*food 3 close*/}
<div className="flex flex-row gap-2">     {/*food 3 div*/}
  <Image src="/unsplash_Yr4n8O_3UPc.svg" alt="Milk Butter" width={80} height={70}/>
  <div className="flex flex-col">
  <p className=" text-white"><b>Milk Butter</b></p>
  <p className="text-sm text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
  <p className="text-lg text-[#FF9F0D]">12.5$</p>
  </div>
</div>    {/*food 4 close*/}
<div className="flex flex-row gap-2">     {/*food 4 div*/}
  <Image src="/unsplash_W9OKrxBqiZA.svg" alt="Fresh Bread" width={80} height={70}/>
  <div className="flex flex-col">
  <p className=" text-white"><b>Fresh Bread</b></p>
  <p className="text-sm text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
  <p className="text-lg text-[#FF9F0D]">12.5$</p>
  </div>
</div>    {/*food 4 close*/}
</div>


{/* //---------------------- */}
<div className="flex flex-col gap-8"> {/*col 2 div*/}
<div className="flex flex-row gap-2">     {/*food 5 div*/}
  <Image src="/unsplash_ZqREbckCRQA.svg" alt="food 5" width={80} height={70}/>
  <div className="flex flex-col">
  <p className=" text-white"><b>Glow Cheese</b></p>
  <p className="text-sm text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
  <p className="text-lg text-[#FF9F0D]">12.5$</p>
  </div>
</div>    {/*food 5 close*/}
<div className="flex flex-row gap-2">     {/*food 6 div*/}
  <Image src="/unsplash_cLpdEA23Z44.svg" alt="food 6" width={80} height={70}/>
  <div className="flex flex-col">
  <p className=" text-white"><b>Italian Pizza</b></p>
  <p className="text-sm text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
  <p className="text-lg text-[#FF9F0D]">14.5$</p>
  </div>
</div>    {/*food 6 close*/}
<div className="flex flex-row gap-2">     {/*food 7 div*/}
  <Image src="/unsplash_mAQZ3X_8_l0.svg" alt="food 7" width={80} height={70}/>
  <div className="flex flex-col">
  <p className=" text-white"><b>Slice Beef</b></p>
  <p className="text-sm text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
  <p className="text-lg text-[#FF9F0D]">12.5$</p>
  </div>
</div>    {/*food 7 close*/}
<div className="flex flex-row gap-2">     {/*food 8 div*/}
  <Image src="/unsplash_dphM2U1xq0U.svg" alt="food 8" width={80} height={70}/>
  <div className="flex flex-col">
  <p className=" text-white"><b>Mushroom Pizza</b></p>
  <p className="text-sm text-white">Lacus nisi, et ac dapibus velit in consequat.</p>
  <p className="text-lg text-[#FF9F0D]">12.5$</p>
  </div>
</div>    {/*food 8 close*/}
</div>
<div> {/*col 2 div*/}
</div>
</div>
</div> 
      </div>        
</div>
       
      {/* ---------------- Section - 6 ------------------ */}
<div className="w-full h-fit lg:h-[800px] bg-black bg-opacity-97 p-4 lg:pt-[96px]">
  {/* Outer container */}
  <div className="relative flex flex-col items-center">
    {/* Background image */}
    <div
      className="absolute top-[200px] left-[-40px] w-full h-[300px] lg:w-1/4 lg:h-3/4 bg-cover bg-center"
      style={{ backgroundImage: "url('/unsplash_INjdgkCwHp0.svg')" }}
    ></div>

    {/* Header content */}
    <Image src="/Chefs.svg" className="h-10" alt="Chefs logo" />
    <h1 className="logo mb-4 text-4xl lg:text-5xl mt-4 text-white font-bold">
      <span className="text-[#FF9F0D]">Me</span>et Our Chef
    </h1>

    {/* Chef Cards */}
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-10 lg:mt-20">
      <Image src="/Chef card.svg" alt="Chef 1" className="w-full md:w-1/2 lg:w-1/5 h-auto" />
      <Image src="/Card 2.svg" alt="Chef 2" className="w-full md:w-1/2 lg:w-1/5 h-auto" />
      <Image src="/Card 3.svg" alt="Chef 3" className="w-full md:w-1/2 lg:w-1/5 h-auto" />
      <Image src="/Card 2.svg" alt="Chef 4" className="w-full md:w-1/2 lg:w-1/5 h-auto" />
    </div>

    {/* Button */}
  <Link href="/team">
  <button className="mt-10 lg:mt-20 mb-2 border border-[#FF9F0D] bg-transparent text-white text-center rounded-[36px] w-[150px] h-[50px] lg:w-[190px] lg:h-[60px]">
      See More
    </button>
    </Link> 
  </div>
</div>


     {/* ---------------- Section - 7 ------------------ */}
<div className="w-full lg:h-[920px] bg-black bg-opacity-97 p-4">
  {/* Header Section */}
  <div className="relative flex flex-col lg:ml-40 lg:w-[770px] text-center lg:text-left">
  <Image src="/Group 1000002250.svg" alt="heading" className="lg:ml-[-320px]  h-10"/>
    <h1 className="logo mb-4 text-3xl lg:text-5xl mt-4 text-white font-bold">
      <span className="text-[#FF9F0D]">Wh</span>at our client are saying
    </h1>
  </div>

  {/* Review Div */}
  <div className="w-full lg:w-[868px] md:w-[500px] lg:h-[461px] bg-white flex flex-col items-center justify-center mt-16 lg:mt-36 mx-auto shadow-lg shadow-gray-500/40 p-6 lg:p-10">
    {/* Client Image */}
    <Image
      src="Ellipse 6.svg"
      alt="pfp"
      className="w-28 h-28 lg:w-auto lg:h-auto rounded-full mt-[-80px] lg:mt-[-120px] mb-8"
    />
    <Image src="Quotes.svg" alt="quotes pic" className="w-8 lg:w-auto" />
    {/* Review Text */}
    <p className="text-sm lg:text-base text-center mt-8 mb-10 px-2 lg:px-10 leading-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur alias
      soluta sit quasi rem eveniet nisi autem ipsa voluptatum corporis! Aut,
      voluptatum quas ipsum molestiae at nobis! Quas, cum. Maiores. Adipisci
      sapiente accusamus, ipsum alias blanditiis in obcaecati, quam, ut totam
      enim sequi nostrum.
    </p>
    {/* Rating */}
    <Image src="star.svg" alt="Ratings pic" className="w-32 lg:w-auto" />
    {/* Client Name */}
    <p className="mt-6 mb-2 font-arial text-xl lg:text-3xl font-bold text-center">
      Alamin Hassan
    </p>
    {/* Client Role */}
    <p className="text-sm lg:text-base text-center">Food Socialist</p>
  </div>
</div>


       {/* ----------------    Section - 8 ------------------ */}
       <Image src="/banner2.svg" alt="bannner" layout="responsive" 
  width={1920} height={558} className="bg-black bg-opacity-97 pb-10 h-fit"/>             
        
       {/* ----------------    Section - 9 ------------------ */}
       <div className="pt-10 w-full h-[1750px] md:h-fit bg-black bg-opacity-97 px-4 lg:pr-5">
  <div className="flex flex-col items-center  w-full lg:w-[770px] mx-auto">
    <Image src="/Blog Post.svg" className="h-8 sm:h-10" alt="Blog Icon" />
    <h1 className="logo mb-6 sm:mb-10 text-3xl sm:text-4xl lg:text-5xl mt-4 text-white font-bold text-center">
      <span className="text-[#FF9F0D]">La</span>test News & Blogs
    </h1>
    {/* Blog cards */}
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4">
      {/* Card 1 */}
      <div className="border-2 border-white bg-transparent w-full sm:w-[300px] md:w-[360px] lg:w-[423px] h-[480px] md:h-[569px]">
        <Image src="/Image Placeholder.svg" className="w-full" alt="Blog 1" />
        <div className="p-4">
          <p className="text-[#FF9F0D] mt-4 text-sm sm:text-base">10 February 2022</p>
          <p className="text-white text-lg sm:text-xl lg:text-2xl mt-2 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className="text-white mt-4 text-sm sm:text-base">Learn More</p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="border-2 border-white bg-transparent w-full sm:w-[300px] md:w-[360px] lg:w-[423px] h-[480px] md:h-[569px]">
        <Image src="/Image Placeholder (1).svg" className="w-full" alt="Blog 2" />
        <div className="p-4">
          <p className="text-[#FF9F0D] mt-4 text-sm sm:text-base">10 February 2022</p>
          <p className="text-white text-lg sm:text-xl lg:text-2xl mt-2 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className="text-white mt-4 text-sm sm:text-base">Learn More</p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="border-2 border-white bg-transparent w-full sm:w-[300px] md:w-[360px] lg:w-[423px] h-[480px] md:h-[569px]">
        <Image src="/Image Placeholder (2).svg" className="w-full" alt="Blog 3" />
        <div className="p-4">
          <p className="text-[#FF9F0D] mt-4 text-sm sm:text-base">10 February 2022</p>
          <p className="text-white text-lg sm:text-xl lg:text-2xl mt-2 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className="text-white mt-4 text-sm sm:text-base">Learn More</p>
        </div>
      </div>
    </div>
  </div>
</div>




















</div>


      </div>
   </div>

  </>
  );
}
