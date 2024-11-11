import { ImTwitter } from "react-icons/im";
import { TfiFacebook } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import { GoCircle } from "react-icons/go";

export default function footer() {
  return (
    <footer className="">
      {/* main */}
      <div className=" bg-white w-full outline-black outline-double flex flex-col md:flex-row  ">
        {/* logo */}
        <div className="basis-[55%]  ml-14 md:order-1 order-2">
          <h3 className="text-[30px] mt-12 font-extrabold">SHOP VERSE</h3>
          <p className="text-[18px] mt-12 hover:translate-x-3 duration-[2s]">
            @ 2024 Shopverse All Rights Reserved
          </p>
             <div className="flex gap-4 pt-10">
             <GoCircle className="size-[30px]"/>
             <GoCircle className="size-[30px]"/>
             <GoCircle className="size-[30px]"/>
             </div>
             <div className="flex gap-4 pt-3">
          < TfiFacebook className="size-[30px] hover:translate-y-3 hover:fill-blue-600"/>
          <GrInstagram className="size-[30px]  hover:translate-y-3 hover:fill-purple-800"/>
          <ImTwitter className="size-[30px]  hover:translate-y-3 hover:fill-blue-600"/>
          </div>
        </div>

        {/* options */}
        <div className="basis-[45%] ml-96 rounded-lg pb-40 md:order-2 order-1  group">
          <div className="flex gap-28  mt-12 ">
            <ul>
              <li className="font-bold pt-[6px] text-[18px]">Download</li>
              <li  className="ml-2 pt-4">Windows</li>
              <li className="ml-4 pt-4"> Mac OS</li>
              <li  className="ml-5 pt-4">  Android</li>
              <li  className="ml-[53px] pt-4">      iOS</li>
            </ul>

            <ul>
              <li className="font-bold text-[18px]">Resources</li>
              <li  className="ml-5  pt-4">About</li>
              <li  className="ml-7  pt-4"> Shop</li>
              <li  className="ml-0  pt-4"> Categories</li>
              <li  className="ml-9  pt-4"> Help</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
