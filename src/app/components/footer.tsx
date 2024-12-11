import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div>
      <div className="bg-black text-white">
  {/* <!-- Subscription Section --> */}
  <div className="w-full lg:w-[1170px] lg:h-[142px] flex flex-col lg:flex-row items-center justify-between gap-8  lg:gap-20 pt-10 lg:pt-20 px-4 lg:ml-40">
    <div className="flex flex-col text-center lg:text-left">
      <h1 className="logo mb-4 text-3xl lg:text-5xl font-bold">
        <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
      </h1>
      <p>Don&apos;t wait, make a smart & logical quote here. It&apos;s pretty easy.</p>
    </div>
    <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-0 lg:rounded-none">
      <input type="text" placeholder="Enter Your Email" className="bg-[#FF9F0D] h-[56px] w-full sm:w-auto text-white p-4 rounded-md" />
      <button className="text-[#FF9F0D] bg-white px-6 py-3 h-[56px] rounded-md">Subscribe Now</button>
    </div>
  </div>

  {/* <!-- Divider --> */}
  <hr className="border-[#FF9F0D] my-10 lg:my-[100px] mx-4 lg:mx-[18%] w-full lg:w-[60%]" />

  {/* <!-- Main Footer Content --> */}
  <div className="w-full px-4 lg:px-0 lg:ml-24 lg:mr-24">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
      {/* <!-- About Us --> */}
      <div >
        <h3 className="text-xl  lg:text-2xl font-bold mb-4 lg:mb-10">About Us</h3>
        <p className="leading-6 text-sm lg:text-base text-wrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non efficitur mi. Aliquam convallis mi quis blandit risus suscipit ac.
        </p>
        <div className="mt-6 lg:mt-10 flex items-center gap-4">
          <Image src="/Watch.svg" alt="watch" className="w-[48px] lg:w-[78px]" />
          <div>
            <p>Opening Hours</p>
            <p>Mon - Sat (8:00 - 6:00)</p>
            <p>Sunday - Closed</p>
          </div>
        </div>
      </div>

      {/* <!-- Useful Links --> */}
      <div>
        <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-10">Useful Links</h3>
        <ul className="text-sm lg:text-base space-y-3">
          <li><Link href="/About" className="hover:text-[#FF9F0D]">About</Link></li>
          <li><Link href="#" className="hover:text-[#FF9F0D]">News</Link></li>
          <li><Link href="#" className="hover:text-[#FF9F0D]">Partner</Link></li>
          <li><Link href="/team" className="hover:text-[#FF9F0D]">Team</Link></li>
          <li><Link href="/menu" className="hover:text-[#FF9F0D]">Menu</Link></li>
          <li><Link href="#" className="hover:text-[#FF9F0D]">Contacts</Link></li>
        </ul>
      </div>

      {/* <!-- Help --> */}
      <div>
        <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-10">Help?</h3>
        <ul className="text-sm lg:text-base space-y-3">
          <li><Link href="/FAQ" className="hover:text-[#FF9F0D]">FAQ</Link></li>
          <li><Link href="/error" className="hover:text-[#FF9F0D]">Terms and Conditions</Link></li>
          <li><Link href="/error" className="hover:text-[#FF9F0D]">Reporting</Link></li>
          <li><Link href="/error" className="hover:text-[#FF9F0D]">Documentation</Link></li>
          <li><Link href="/error" className="hover:text-[#FF9F0D]">Support Policy</Link></li>
          <li><Link href="/error" className="hover:text-[#FF9F0D]">Privacy</Link></li>
        </ul>
      </div>

      {/* <!-- Recent Posts --> */}
      <div>
        <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-10">Recent Posts</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Image src="/Mask Group.svg" alt="post" className="w-[48px] lg:w-[59px]" />
            <div>
              <p className="text-sm lg:text-base text-gray-400">20 Feb 2024</p>
              <p className="text-sm lg:text-base">Keep Your Business</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/Mask Group (2).svg" alt="post" className="w-[48px] lg:w-[59px]" />
            <div>
              <p className="text-sm lg:text-base text-gray-400">20 Feb 2024</p>
              <p className="text-sm lg:text-base">Keep Your Business</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/unsplash_50KffXbjIOg.svg" alt="post" className="w-[48px] lg:w-[59px]" />
            <div>
              <p className="text-sm lg:text-base text-gray-400">20 Feb 2024</p>
              <p className="text-sm lg:text-base">Keep Your Business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Footer Bottom --> */}
  <div className="bg-[#4F4F4F] w-full mt-10 lg:pl-24 lg:pr-24 lg:mt-20 py-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-4">
    <p className="text-sm lg:text-base text-center">Copyright &copy; 2023 by Ayed, All Rights Reserved</p>
   <Link href="https://www.facebook.com/">
   <Image src="Sociali icon.png" alt="social icons" className="w-[80px] lg:w-[200px]" />
   </Link>
  </div>
</div>

      </div>
    </>
  );
}
