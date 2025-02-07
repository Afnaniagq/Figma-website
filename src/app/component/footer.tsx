import { ImTwitter } from "react-icons/im";
import { TfiFacebook } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import { GoCircle } from "react-icons/go";

export default function Footer() {
  return (
    <footer className="bg-white w-full outline-black outline-double">
      {/* Main footer section */}
      <div className="flex flex-col md:flex-row p-6">
        {/* Logo Section */}
        <div className="basis-full md:basis-[55%] ml-14 md:ml-0 mb-8 md:mb-0 md:order-1 order-2">
          <h3 className="text-[30px] font-extrabold">SHOP VERSE</h3>
          <p className="text-[18px] mt-4 hover:translate-x-3 duration-[2s]">
            @ 2024 Shopverse All Rights Reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 pt-10">
            <GoCircle className="text-[30px]" />
            <GoCircle className="text-[30px]" />
            <GoCircle className="text-[30px]" />
          </div>

          <div className="flex gap-4 pt-3">
            <TfiFacebook className="text-[30px] hover:translate-y-3 hover:fill-blue-600" />
            <GrInstagram className="text-[30px] hover:translate-y-3 hover:fill-purple-800" />
            <ImTwitter className="text-[30px] hover:translate-y-3 hover:fill-blue-600" />
          </div>
        </div>

        {/* Options Section */}
        <div className="basis-full md:basis-[45%] ml-0 md:ml-12 rounded-lg pb-40 md:pb-0 md:order-2 order-1">
          <div className="flex flex-col md:flex-row gap-8 mt-8 md:mt-12">
            {/* Download Section */}
            <ul className="flex-1">
              <li className="font-bold text-[18px]">Download</li>
              <li className="ml-2 pt-4">Windows</li>
              <li className="ml-4 pt-4">Mac OS</li>
              <li className="ml-5 pt-4">Android</li>
              <li className="ml-[53px] pt-4">iOS</li>
            </ul>

            {/* Resources Section */}
            <ul className="flex-1">
              <li className="font-bold text-[18px]">Resources</li>
              <li className="ml-5 pt-4">About</li>
              <li className="ml-7 pt-4">Shop</li>
              <li className="ml-0 pt-4">Categories</li>
              <li className="ml-9 pt-4">Help</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

