import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <main>
      {/* main pic */}
      <div>
        <Image
          src="/cycle.png"
          height={650}
          width={500}
          alt="cycle"
          className="my-3 ml-14  mr-4 md:h-[450px] md:w-[900px] lg:h-[600px] lg:w-[1300px]  items-center rounded-3xl"
        ></Image> 
        {/* shadow pic */}
       
          <Image
            src="/shadow.png"
            height={12}
            width={1200}
            alt="cycle"
            className=" mb-7 ml-14  mr-4   absolute  top-[200px] md:h-[450px] md:w-[500px] lg:h-[490px] lg:w-[1297px]   rounded-lg inset-0 "
          ></Image>
    

        {/* right text section */}
        <section>
          <div className=" absolute justify-start flex flex-col inset-96 left-24 inset-y-72 hover:translate-y-4 duration-[2s]">
            <p className="text-white text-[30px] hover:text-red-500">
              SALE UP TO 20% OFF
            </p>
            <h1 className="text-white text-[50px] font-bold py-3">
              Apple Watch Ultra 2
            </h1>
            <p className="text-white text-[22px] flex flex-row justify-center pr-[440px] ">
              The most rugged and capable Apple  Watch pushes the limits again.
              Featuring the all-new S9 SiP.
            </p>
            <div className="flex flex-row gap-5 pt-5">
              <button className="bg-orange-500 rounded-3xl h-10 w-36 text-white text-[20px] hover:bg-orange-700  hover:translate-y-4 duration-[2s]">
                Shop now
              </button>
              <button className="bg-white rounded-3xl h-10 w-36 text-black text-[20px] hover:bg-slate-200 hover:translate-y-4 duration-[2s]">
                Learn More
              </button>
            </div>
          </div>
        </section>
        {/* left image section */}
        
          
            <Image
              className="absolute  left-[700px]  justify-end mb-96 top-[115px]  hover:translate-y-4 duration-[2s]"
              src="/watch.png"
              width={400}
              height={450}
              alt="watch"
            ></Image>
            <Image
              className="absolute  left-[1105px] justify-end mb-96 top-[100px]  hover:translate-y-4 duration-[2s]"
              src="/side.png"
              width={250}
              height={250}
              alt="watch"
            ></Image>
      
            
             </div>
              
              {/* first section */}
            <section className="">
            {/* two text line  */}
            <div className="flex gap-[750px] ">
              <p className="text-[30px] font-semibold ml-16  ">
                Trending Categories
              </p>
              <a href="/" className="text-[25px] underline ml-20 hover:text-blue-500 ">
                Show More{" "}
              </a>
            </div>
           
            {/* first grid section 5 col */}

            <div className=" mx-auto grid grid-cols-5 ml-12 bg-[#fffbfb]  pt-8 gap-8">
              <div className="basis-[30%] m-[1.5%] shadow-lg  text-center group ">
                <Image
                  src="/green-mob.webp"
                  height={400}
                  width={400}
                  alt="photo"
                  className="w-[45] h-[40] mx-auto group-hover:scale-[1.1]"
                />
                <h2 className="text-[22px] font-bold py-[15px] group-hover:pt-9  hover:text-blue-600 ">
                  Mobiles
                </h2>
              </div>
              <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[17px] ">
                <Image
                  src="/laptop.webp"
                  height={200}
                  width={200}
                  alt="photo"
                  className=" w-[45] h-[40] mx-auto group-hover:scale-[1.1]"
                />
                <h2 className="text-[22px] font-bold py-[15px]  group-hover:pt-9  hover:text-blue-600 ">
                  Laptops
                </h2>
              </div>
              <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group hover:translate-y-[17px]  ">
                <Image
                  src="/black.jpg"
                  height={200}
                  width={200}
                  alt="photo"
                  className="w-[45] h-[40] mx-auto  group-hover:scale-[1.1]"
                />
                <h2 className="text-[22px] font-bold py-[15px]  group-hover:pt-9  hover:text-blue-600 ">
                  Headphones
                </h2>
              </div>
              <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  group hover:translate-y-[17px] ">
                <Image
                  src="/Tv.webp"
                  height={200}
                  width={200}
                  alt="photo"
                  className="w-[45] h-[40] mx-auto  group-hover:scale-[1.1]"
                />
                <h2 className="text-[22px] font-bold py-[15px] group-hover:pt-9  hover:text-blue-600 ">
                  Monitors & Tvs
                </h2>
              </div>
              <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[17px]">
                <Image
                  src="/lispeak.jpeg"
                  height={200}
                  width={200}
                  alt="photo"
                  className="w-[45] h-[40] mx-auto group-hover:scale-[1.1]"
                />
                <h2 className="text-[22px] font-bold py-[15px] group-hover:pt-9  hover:text-blue-600 ">
                  Speakers
                </h2>
              </div>
            </div>

            {/* second grid section 2-col */}
            {/* shoes g1 */}
            <div className="max-w-[1400px]  mx-auto ">
              <div className="grid grid-cols-2 gap-56 ">
                <div className="bg-[#fffbfb]  basis-[30%] m-[1.5%] shadow-lg  mt-28 text-center group hover:translate-x-[17px] duration-[2.5s] ml-28 ">
                  <h2 className="text-black  font-semibold text-[30px] text-center   hover:text-blue-600 ">
                    Nike, Addidas
                  </h2>
                  <p className="text-black font-semibold text-[18px] text-center  hover:text-red-500">
                    MIN 40% OFF
                  </p>
                  <button className="text-white bg-orange-600 ml-28 text-[15px] rounded-2xl h-8 w-24 hover:bg-orange-700">
                    Shop Now
                  </button>
                  <Image
                    src="/shoes.png"
                    height={400}
                    width={400}
                    alt="pic"
                    className="  mx-auto  "
                  />
                </div>
                {/* playstation g2 */}
                <div className="bg-[#fffbfb]  basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-x-[17px] duration-[2.5s] mt-28">
                  <h2 className="text-black font-semibold text-[30px] text-center  hover:text-blue-600 ">
                    PlayStation 5
                  </h2>
                  <p className="text-black font-semibold text-[18px] text-center  hover:text-red-500">
                    MIN 25% OFF
                  </p>
                  <button className="text-white bg-orange-600  ml-28 text-[15px] shadow-2xl rounded-2xl h-8 w-24  hover:bg-orange-700">
                    Shop Now
                  </button>
                  <Image
                    src="/play.png"
                    height={500}
                    width={500}
                    alt="pic"
                    className=" mx-auto "
                  />
                </div>
              </div>
            </div>
            </section>    

            {/* four grid sections */}
            <section className="">
              <div className="flex gap-[850px] pt-16">
                <p className="text-[30px] font-semibold ml-16 ">
                  Popular Products
                </p>
                <a href="/" className="text-[25px] underline ml-20  hover:text-blue-500">
                  Show More{" "}
                </a>
              </div>

              {/* div for 8section 2 rows */}
              {/* 4 rows */}
              <div className=" mx-auto grid grid-cols-4 ml-12 pt-8 gap-8">
          {/* MOB CASE */}
          
                 <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  bg-[#fffbfb]  group hover:translate-y-[17px] duration-[3s] ">
                  <Image
                    src="/casemob.png"
                    height={160}
                    width={160}
                    alt="photo"
                    className="w-[45] h-[40] mx-auto "
                  />
                    <span className="flex ml-20 gap-3 pt-3">
                  <FaStar className="size-6 fill-yellow-300" />
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStarHalfAlt  className="size-6 fill-yellow-300" />
                 
                  </span>
                  <h2 className="text-[17px] font-bold py-[12px]   hover:text-blue-600 ">
                  Magnetic Case
                  </h2>
                  <div className="flex ml-24 gap-3 items-center mr-5 mt-1">
                  <span className="text-[21px]  font-bold text-orange-500">
                     $13.49
                  </span>
                  <div className="text-[18px] line-through opacity-50  hover:text-green-600 hover:opacity-75">
                    $18.99
                  </div>
                
                </div>
                </div>
          {/*NANO  */}
               
                  <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  bg-[#fffbfb]  group hover:translate-y-[17px] duration-[3s] ">
                  <Image
                    src="/nano.png"
                    height={320}
                    width={320}
                    alt="photo"
                    className="w-[45] h-[40] mx-auto "
                  />
                    <span className="flex ml-20 gap-3  pt-16">
                  <FaStar className="size-6 fill-yellow-300" />
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStarHalfAlt  className="size-6 fill-yellow-300" />
                  <FaRegStar  className="size-6 fill-yellow-300"/>
                  </span>
                  <h2 className="text-[17px] font-bold py-[12px]   hover:text-blue-600 ">
                  UCOMX Nano 3 in 1
                  </h2>
                  <div className="flex ml-24 gap-3 items-center mr-5 mt-1">
                  <span className="text-[21px]  font-bold text-orange-500">
                     $39.99
                  </span>
                  <div className="text-[18px] line-through opacity-50  hover:text-green-600 hover:opacity-75">
                    $49.99
                  </div>
                
                </div>
                </div>
           {/* SHOES */}
                

                 <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  bg-[#fffbfb]  group hover:translate-y-[17px] duration-[3s] ">
                  <Image
                    src="/grshoe.png"
                    height={180}
                    width={180}
                    alt="photo"
                    className="w-[45] h-[40] mx-auto "
                  />
                    <span className="flex ml-20 gap-3 pt-3">
                  <FaStar className="size-6 fill-yellow-300" />
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStarHalfAlt  className="size-6 fill-yellow-300" />
                  <FaRegStar  className="size-6 fill-yellow-300"/>
                  </span>
                  <h2 className="text-[17px] font-bold py-[12px]   hover:text-blue-600 ">
                  NB Fresh Foam
                  </h2>
                  <div className="flex ml-24 gap-3 items-center mr-5 mt-1">
                  <span className="text-[21px]  font-bold text-orange-500">
                     $71.99
                  </span>
                  <div className="text-[18px] line-through opacity-50  hover:text-green-600 hover:opacity-75">
                    $81.99
                  </div>
                
                </div>
                </div>
          {/*HEAD PHONE  */}
              
                  <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  bg-[#fffbfb]  group hover:translate-y-[17px] duration-[3s] ">
                  <Image
                    src="/phones.png"
                    height={120}
                    width={120}
                    alt="photo"
                    className="w-[45] h-[40] mx-auto "
                  />
                    <span className="flex ml-20 gap-3 pt-3">
                  <FaStar className="size-6 fill-yellow-300" />
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStarHalfAlt  className="size-6 fill-yellow-300" />
                  <FaRegStar  className="size-6 fill-yellow-300"/>
                  </span>
                  <h2 className="text-[17px] font-bold py-[12px]   hover:text-blue-600 ">
                  Bose QuietComfort
                  </h2>
                  <div className="flex ml-24 gap-3 items-center mr-5 mt-1">
                  <span className="text-[21px]  font-bold text-orange-500">
                     $379.9
                  </span>
                  <div className="text-[18px] line-through opacity-50  hover:text-green-600 hover:opacity-75">
                    $429.00
                  </div>
                
                </div>
                </div>

           {/* METAL BOX */}
                <div className="basis-[30%] m-[1.5%] shadow-lg  py-[20px]  text-center  bg-[#fffbfb]  group hover:translate-y-[17px]  duration-[3s]">
                  <Image
                    src="/metal.png"
                    height={200}
                    width={200}
                    alt="photo"
                    className="w-[45] h-[40] mx-auto"
                  />
                   <span className="flex ml-20 gap-3 pt-3">
                  <FaStar className="size-6 fill-yellow-300" />
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStarHalfAlt  className="size-6 fill-yellow-300" />
                  <FaRegStar  className="size-6 fill-yellow-300"/>
                  </span>
                  <h2 className="text-[17px] font-bold py-[15px]  mt-5 hover:text-blue-600 ">
                    BUGANI BT Speaker
                  </h2>
                  <div className="flex ml-24 gap-3 items-center mr-5 mt-1">
                  <span className="text-[21px]  font-bold text-orange-500">
                     $59.93
                  </span>
                  <div className="text-[18px] line-through opacity-50  hover:text-green-600 hover:opacity-75">
                    $129.98
                  </div>
                  </div>
                </div>
           {/* TABLET */}
                <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center bg-[#fffbfb]  group hover:translate-y-[17px]  duration-[3s] ">
                  <Image
                    src="/tab.png"
                    height={120}
                    width={120}
                    alt="photo"
                    className=" w-[45] h-[40] mx-auto"
                  />
                   <span className="flex ml-20 gap-3 pt-3">
                  <FaStar className="size-6 fill-yellow-300" />
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStar className="size-6 fill-yellow-300"/>
                 <FaRegStar  className="size-6 fill-yellow-300"/>
                  </span>
                  <h2 className="text-[17px] font-bold py-[15px]  mt-5 ml-3  hover:text-blue-600 ">
                    Galaxy Tab A9+
                  </h2>
                  <div className="flex ml-24 gap-3 items-center mr-5 mt-1">
                  <span className="text-[21px]  font-bold text-orange-500">
                     $169.99
                  </span>
                  <div className="text-[18px] line-through opacity-50 hover:text-green-600 hover:opacity-75">
                    $219.99
                  </div>
                  </div>
                </div>

            {/* LAPTOP */}
                <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  bg-[#fffbfb]  group hover:translate-y-[17px]  duration-[3s]  ">
                  <Image
                    src="/lap.png"
                    height={200}
                    width={200}
                    alt="photo"
                    className="w-[45] h-[40] mx-auto pt-10 "
                  />
                   <span className="flex ml-20 gap-3 pt-2">
                  <FaStar className="size-6 fill-yellow-300" />
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaRegStar  className="size-6 fill-yellow-300"/>
                  </span>
                  <h2 className="text-[17px] font-bold py-[9px]  mt-12  hover:text-blue-600 ">
                    Acer Aspire 1
                  </h2>
                  <div className="flex ml-24 gap-3 items-center mr-5 mt-1">
                  <span className="text-[21px]  font-bold text-orange-500">
                     $228.27
                  </span>
                  <div className="text-[18px] line-through opacity-50  hover:text-green-600 hover:opacity-75">
                    $300.00
                  </div>
                  </div>
                   </div>

             {/* MOUSE */}
                <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center  bg-[#fffbfb] group hover:translate-y-[17px] duration-[3s] ">
                  <Image
                    src="/mousee.png"
                    height={120}
                    width={120}
                    alt="photo"
                    className="w-[45] h-[40] mx-auto "
                  />
                    <span className="flex ml-20 gap-3 pt-3">
                  <FaStar className="size-6 fill-yellow-300" />
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStar className="size-6 fill-yellow-300"/>
                  <FaStarHalfAlt  className="size-6 fill-yellow-300" />
                  <FaRegStar  className="size-6 fill-yellow-300"/>
                  </span>
                  <h2 className="text-[17px] font-bold py-[12px]   hover:text-blue-600 ">
                    Redragon M810
                  </h2>
                  <div className="flex ml-24 gap-3 items-center mr-5 mt-1">
                  <span className="text-[21px]  font-bold text-orange-500">
                     $32.99
                  </span>
                  <div className="text-[18px] line-through opacity-50  hover:text-green-600 hover:opacity-75">
                    $39.99
                  </div>
                
                </div>
                </div>
              </div>

              {/* div for cover phone img */}
              <div className=" bg-[#eeeeee]  hover:text- duration-[1s] w-full mt-14 mb-12 h-[500px] shadow-2xl outline-doubl flex-col">
                <div className="max-w-[1320px] mx-auto">
                  <div className="flex md:flex-row flex-col">
                    <div className="basis-[55%]  ml-14 md:order-1 order-2">
                      <h3 className="text-[25px] font-normal mt-48">
                        GALAXY SALE IS LIVE NOW
                      </h3>
                      <h2 className="text-[75px] font-extrabold text-black">
                        Galaxy S24 | S24 +
                      </h2>
                      <p className="text-[18px]">
                        Get up to $1,000 in trade-in credit from participating
                        carriers. Terms apply.
                      </p>
                    </div>
                    <div className="basis-[45%]  rounded-lg pb-80 md:order-2 order-1  group">
                      <Image
                        className=" rounded-xl border-black ml-36 hover:translate-x-9 duration-[4s]"
                        src="/2phone.png"
                        height={300}
                        width={300}
                        alt="phone"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
           
            {/* blog section */}
            <div className="flex gap-[950px] ">
              <p className="text-[30px] font-semibold ml-16  ">Our Blogs</p>
              <a href="/" className="text-[25px] underline ml-20 hover:text-blue-500 ">
                Show More{" "}
              </a>
            </div>
            <div className=" mx-auto grid grid-cols-3 ml-12 pt-8 mb-16 gap-16 justify-evenly">
              <div className="basis-[30%] m-[1.5%] shadow-lg  py-[20px] text-center group hover:translate-y-[17px]  duration-[3s]   ">
                <Image
                  src="/stuff.png"
                  height={300}
                  width={300}
                  alt="photo"
                  className="w-[45] h-[40] mx-auto "
                />
                <h2 className="text-[17px] font-bold py-[15px]   hover:text-blue-600  ">
                  Accessorize Like a Pro
                </h2>
                <div className="flex gap-40 pt-3">
              <h2 className="ml-3">10th January 2024</h2>
              <a href="/"  className= "hover:text-green-500 ">Read More</a>
            </div>
              </div>
              <div className="basis-[30%] m-[1.5%] shadow-lg  py-[20px] text-center group hover:translate-y-[17px]  duration-[3s]   ">
                <Image
                  src="/cloth.png"
                  height={300}
                  width={300}
                  alt="photo"
                  className="w-[45] h-[40] mx-auto "
                />
                <h2 className="text-[17px] font-bold py-[15px]   hover:text-blue-600  ">
                  10 Timeless Wardrobe Staples
                </h2>
                <div className="flex gap-40 pt-3">
              <h2 className="ml-3"> 3rd February 2024</h2>
              <a href="/"  className= "hover:text-green-500 ">Read More</a>
          </div>
              </div>
              <div className="basis-[30%] m-[1.5%] shadow-lg  py-[20px] text-center group hover:translate-y-[17px]  duration-[3s]   ">
                <Image
                  src="/recycle.png"
                  height={300}
                  width={300}
                  alt="photo"
                  className="w-[45] h-[40] mx-auto "
                />
                <h2 className="text-[17px] font-bold py-[15px]   hover:text-blue-600  ">
                  The Art of Sustainable Fashion
                </h2>
                <div className="flex gap-40 pt-3">
              <h2 className="ml-3"> 1st March 2024</h2>
              <a href="/" className= "hover:text-green-500 ">ReadMore</a>
         
          </div>
              </div>
            </div>
        
           
         
        
    

  </main>
  
);
}
