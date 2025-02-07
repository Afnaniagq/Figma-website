import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      {/* main pic */}
      <div className="relative">
        <Image
          src="/cycle.png"
          height={650}
          width={500}
          alt="cycle"
          className="my-3md:h-[450px] md:w-[900px] lg:h-[600px] lg:w-[1300px] rounded-3xl mx-auto"
        />

        {/* shadow pic */}
        {/* <Image
          src="/shadow.png"
          height={12}
          width={1200}
          alt="cycle"
          className="absolute top-[200px] left-0 right-0 mx-auto mb-7 rounded-lg md:h-[450px] md:w-[500px] lg:h-[490px] lg:w-[1297px]"
        /> */}

        {/* right text section */}
        <section className="relative flex flex-col justify-center items-start ml-4 md:left-24 md:top-1/3 lg:left-32 lg:top-1/2">
  <p className="text-white text-[30px] hover:text-red-500 mb-3">
    SALE UP TO 20% OFF
  </p>
  <h1 className="text-white text-[30px] md:text-[50px] font-bold mb-3">
    Apple Watch Ultra 2
  </h1>
  <p className="text-white text-[18px] md:text-[22px] lg:text-[24px] text-center md:text-left pr-8 mb-5">
    The most rugged and capable Apple Watch pushes the limits again. Featuring the all-new S9 SiP.
  </p>
  <div className="flex flex-col md:flex-row gap-4 pt-5">
    <button className="bg-orange-500 rounded-3xl h-10 w-36 text-white text-[20px] hover:bg-orange-700 transition duration-300">
      Shop now
    </button>
    <button className="bg-white rounded-3xl h-10 w-36 text-black text-[20px] hover:bg-slate-200 transition duration-300">
      Learn More
    </button>
  </div>
</section>

{/* Left image section */}
{/* <div className="absolute top-[115px] left-1/2 transform -translate-x-1/2 md:left-[700px] md:top-[120px] lg:left-[1000px]">
  <Image
    className="hover:translate-y-4 transition duration-300"
    src="/watch.png"
    width={400}
    height={450}
    alt="watch"
  />
  <Image
    className="absolute top-[100px] left-[80%] transform -translate-x-1/2 hover:translate-y-4 transition duration-300"
    src="/side.png"
    width={250}
    height={250}
    alt="watch"
  />
</div> */}
</div>

      {/* first section */}
      <section className="pt-8 px-4">
        {/* two text line */}
        <div className="flex justify-between items-center">
          <p className="text-[30px] font-semibold">Trending Categories</p>
          <a href="/" className="text-[25px] underline hover:text-blue-500">
            Show More
          </a>
        </div>

        {/* first grid section 5 col */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-6">
          <div className="group text-center shadow-lg p-4">
            <Image
              src="/green-mob.webp"
              height={400}
              width={400}
              alt="photo"
              className="mx-auto w-full h-auto group-hover:scale-110 transition duration-300"
            />
            <h2 className="text-[22px] font-bold py-4 group-hover:text-blue-600">Mobiles</h2>
          </div>
          <div className="group text-center shadow-lg p-4">
            <Image
              src="/laptop.webp"
              height={200}
              width={200}
              alt="photo"
              className="mx-auto w-full h-auto group-hover:scale-110 transition duration-300"
            />
            <h2 className="text-[22px] font-bold py-4 group-hover:text-blue-600">Laptops</h2>
          </div>
       
        </div>
        </section>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
   Headphones 
  <div className="group shadow-lg py-4 text-center hover:translate-y-4 transition duration-300">
    <Image
      src="/black.jpg"
      height={200}
      width={200}
      alt="Headphones"
      className="w-full h-auto mx-auto group-hover:scale-110 transition duration-300"
    />
    <h2 className="text-[20px] sm:text-[22px] font-bold py-4 group-hover:pt-9 hover:text-blue-600">
      Headphones
    </h2>
  </div>

   Monitors & Tvs 
  <div className="group shadow-lg py-4 text-center hover:translate-y-4 transition duration-300">
    <Image
      src="/Tv.webp"
      height={200}
      width={200}
      alt="Monitors & Tvs"
      className="w-full h-auto mx-auto group-hover:scale-110 transition duration-300"
    />
    <h2 className="text-[20px] sm:text-[22px] font-bold py-4 group-hover:pt-9 hover:text-blue-600">
      Monitors & Tvs
    </h2>
  </div>

   Speakers 
  <div className="group shadow-lg py-4 text-center hover:translate-y-4 transition duration-300">
    <Image
      src="/lispeak.jpeg"
      height={200}
      width={200}
      alt="Speakers"
      className="w-full h-auto mx-auto group-hover:scale-110 transition duration-300"
    />
    <h2 className="text-[20px] sm:text-[22px] font-bold py-4 group-hover:pt-9 hover:text-blue-600">
      Speakers
    </h2>
  </div>
</div>

      {/* second grid section 2-col */}
<div className="max-w-[1400px] mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-56 p-4">
    {/* shoes g1 */}
    <div className="bg-[#fffbfb] shadow-lg mt-8 text-center group hover:translate-x-[17px] duration-[2.5s]">
      <h2 className="text-black font-semibold text-[22px] sm:text-[30px] text-center hover:text-blue-600">
        Nike, Adidas
      </h2>
      <p className="text-black font-semibold text-[16px] sm:text-[18px] text-center hover:text-red-500">
        MIN 40% OFF
      </p>
      <button className="text-white bg-orange-600 mx-auto text-[14px] sm:text-[15px] rounded-2xl h-8 w-24 hover:bg-orange-700">
        Shop Now
      </button>
      <Image
        src="/shoes.png"
        height={400}
        width={400}
        alt="shoes"
        className="mx-auto"
      />
    </div>

    {/* playstation g2 */}
    <div className="bg-[#fffbfb] shadow-lg py-8 sm:py-[20px] text-center group hover:translate-x-[17px] duration-[2.5s]">
      <h2 className="text-black font-semibold text-[22px] sm:text-[30px] text-center hover:text-blue-600">
        PlayStation 5
      </h2>
      <p className="text-black font-semibold text-[16px] sm:text-[18px] text-center hover:text-red-500">
        MIN 25% OFF
      </p>
      <button className="text-white bg-orange-600 mx-auto text-[14px] sm:text-[15px] shadow-2xl rounded-2xl h-8 w-24 hover:bg-orange-700">
        Shop Now
      </button>
      <Image
        src="/play.png"
        height={500}
        width={500}
        alt="PlayStation"
        className="mx-auto"
      />
    </div>
  </div>
</div>

{/* four grid sections */}
<section>
  <div className="flex justify-between items-center pt-16 px-4">
    <p className="text-[25px] sm:text-[30px] font-semibold">Popular Products</p>
    <a href="/" className="text-[20px] sm:text-[25px] underline hover:text-blue-500">
      Show More
    </a>
  </div>

  {/* div for 8section 2 rows */}
  {/* 4 rows */}
  <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 px-4">
    {/* MOB CASE */}
    <div className="bg-[#fffbfb] shadow-lg py-8 text-center group hover:translate-y-[17px] duration-[3s]">
      <Image
        src="/casemob.png"
        height={160}
        width={160}
        alt="Magnetic Case"
        className="mx-auto"
      />
      <div className="flex justify-center gap-2 pt-3">
        <FaStar className="text-yellow-300" />
        <FaStar className="text-yellow-300" />
        <FaStar className="text-yellow-300" />
        <FaStar className="text-yellow-300" />
        <FaStarHalfAlt className="text-yellow-300" />
      </div>
      <h2 className="text-[17px] sm:text-[18px] font-bold py-[12px] hover:text-blue-600">
        Magnetic Case
      </h2>
      <div className="flex justify-center gap-3 items-center mt-1">
        <span className="text-[18px] sm:text-[21px] font-bold text-orange-500">
          $13.49
        </span>
        <div className="text-[16px] sm:text-[18px] line-through opacity-50 hover:text-green-600 hover:opacity-75">
          $18.99
        </div>
      </div>
    </div>

    {/* Repeat similar structure for other items */}
    {/* Item 2, 3, 4 */}
    {/* Add other products here with similar layout */}
  </div>
</section>

         {/* NANO */}
<div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
  {/* NANO Product */}
  <div className="bg-[#fffbfb] shadow-lg py-[20px] text-center group hover:translate-y-[17px] duration-[3s]">
    <Image
      src="/nano.png"
      height={320}
      width={320}
      alt="photo"
      className="w-full h-[200px] sm:h-[250px] md:h-[320px] mx-auto object-contain"
    />
    <span className="flex justify-center gap-3 pt-3">
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStarHalfAlt className="text-yellow-300" />
      <FaRegStar className="text-yellow-300" />
    </span>
    <h2 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold py-[12px] hover:text-blue-600">
      UCOMX Nano 3 in 1
    </h2>
    <div className="flex justify-center gap-3 items-center mt-1">
      <span className="text-[18px] sm:text-[21px] font-bold text-orange-500">
        $39.99
      </span>
      <div className="text-[16px] sm:text-[18px] line-through opacity-50 hover:text-green-600 hover:opacity-75">
        $49.99
      </div>
    </div>
  </div>

  {/* SHOES */}
  <div className="bg-[#fffbfb] shadow-lg py-[20px] text-center group hover:translate-y-[17px] duration-[3s]">
    <Image
      src="/grshoe.png"
      height={180}
      width={180}
      alt="photo"
      className="w-full h-[150px] sm:h-[180px] md:h-[200px] mx-auto object-contain"
    />
    <span className="flex justify-center gap-3 pt-3">
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStarHalfAlt className="text-yellow-300" />
      <FaRegStar className="text-yellow-300" />
    </span>
    <h2 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold py-[12px] hover:text-blue-600">
      NB Fresh Foam
    </h2>
    <div className="flex justify-center gap-3 items-center mt-1">
      <span className="text-[18px] sm:text-[21px] font-bold text-orange-500">
        $71.99
      </span>
      <div className="text-[16px] sm:text-[18px] line-through opacity-50 hover:text-green-600 hover:opacity-75">
        $81.99
      </div>
    </div>
  </div>

  {/* HEAD PHONE */}
  <div className="bg-[#fffbfb] shadow-lg py-[20px] text-center group hover:translate-y-[17px] duration-[3s]">
    <Image
      src="/phones.png"
      height={120}
      width={120}
      alt="photo"
      className="w-full h-[120px] sm:h-[150px] md:h-[180px] mx-auto object-contain"
    />
    <span className="flex justify-center gap-3 pt-3">
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStarHalfAlt className="text-yellow-300" />
      <FaRegStar className="text-yellow-300" />
    </span>
    <h2 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold py-[12px] hover:text-blue-600">
      Bose QuietComfort
    </h2>
    <div className="flex justify-center gap-3 items-center mt-1">
      <span className="text-[18px] sm:text-[21px] font-bold text-orange-500">
        $379.99
      </span>
      <div className="text-[16px] sm:text-[18px] line-through opacity-50 hover:text-green-600 hover:opacity-75">
        $429.00
      </div>
    </div>
  </div>
</div>

      {/* METAL BOX */}
<div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
  {/* METAL BOX Product */}
  <div className="bg-[#fffbfb] shadow-lg py-[20px] text-center group hover:translate-y-[17px] duration-[3s]">
    <Image
      src="/metal.png"
      height={200}
      width={200}
      alt="photo"
      className="w-full h-[200px] sm:h-[250px] md:h-[300px] mx-auto object-contain"
    />
    <span className="flex justify-center gap-3 pt-3">
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStarHalfAlt className="text-yellow-300" />
      <FaRegStar className="text-yellow-300" />
    </span>
    <h2 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold py-[15px] mt-5 hover:text-blue-600">
      BUGANI BT Speaker
    </h2>
    <div className="flex justify-center gap-3 items-center mt-1">
      <span className="text-[18px] sm:text-[21px] font-bold text-orange-500">
        $59.93
      </span>
      <div className="text-[16px] sm:text-[18px] line-through opacity-50 hover:text-green-600 hover:opacity-75">
        $129.98
      </div>
    </div>
  </div>

  {/* TABLET */}
  <div className="bg-[#fffbfb] shadow-lg py-[20px] text-center group hover:translate-y-[17px] duration-[3s]">
    <Image
      src="/tab.png"
      height={120}
      width={120}
      alt="photo"
      className="w-full h-[120px] sm:h-[150px] md:h-[180px] mx-auto object-contain"
    />
    <span className="flex justify-center gap-3 pt-3">
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaRegStar className="text-yellow-300" />
    </span>
    <h2 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold py-[15px] mt-5 hover:text-blue-600">
      Galaxy Tab A9+
    </h2>
    <div className="flex justify-center gap-3 items-center mt-1">
      <span className="text-[18px] sm:text-[21px] font-bold text-orange-500">
        $169.99
      </span>
      <div className="text-[16px] sm:text-[18px] line-through opacity-50 hover:text-green-600 hover:opacity-75">
        $219.99
      </div>
    </div>
  </div>

  {/* LAPTOP */}
  <div className="bg-[#fffbfb] shadow-lg py-[20px] text-center group hover:translate-y-[17px] duration-[3s]">
    <Image
      src="/lap.png"
      height={200}
      width={200}
      alt="photo"
      className="w-full h-[200px] sm:h-[250px] md:h-[300px] mx-auto object-contain pt-10"
    />
    <span className="flex justify-center gap-3 pt-3">
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaRegStar className="text-yellow-300" />
    </span>
    <h2 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold py-[9px] mt-12 hover:text-blue-600">
      Acer Aspire 1
    </h2>
    <div className="flex justify-center gap-3 items-center mt-1">
      <span className="text-[18px] sm:text-[21px] font-bold text-orange-500">
        $228.27
      </span>
      <div className="text-[16px] sm:text-[18px] line-through opacity-50 hover:text-green-600 hover:opacity-75">
        $300.00
      </div>
    </div>
  </div>

  {/* MOUSE */}
  <div className="bg-[#fffbfb] shadow-lg py-[20px] text-center group hover:translate-y-[17px] duration-[3s]">
    <Image
      src="/mousee.png"
      height={120}
      width={120}
      alt="photo"
      className="w-full h-[120px] sm:h-[150px] md:h-[180px] mx-auto object-contain"
    />
    <span className="flex justify-center gap-3 pt-3">
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStar className="text-yellow-300" />
      <FaStarHalfAlt className="text-yellow-300" />
      <FaRegStar className="text-yellow-300" />
    </span>
    <h2 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold py-[12px] hover:text-blue-600">
      Redragon M810
    </h2>
    <div className="flex justify-center gap-3 items-center mt-1">
      <span className="text-[18px] sm:text-[21px] font-bold text-orange-500">
        $32.99
      </span>
      <div className="text-[16px] sm:text-[18px] line-through opacity-50 hover:text-green-600 hover:opacity-75">
        $39.99
      </div>
    </div>
  </div>
</div>

{/* div for cover phone img */}
<div className="bg-[#eeeeee] w-full mt-14 mb-12 h-[500px] shadow-2xl outline-double flex flex-col">
  <div className="max-w-[1320px] mx-auto">
    <div className="flex flex-col md:flex-row">
      <div className="basis-[55%] ml-14 md:order-1 order-2">
        <h3 className="text-[20px] sm:text-[25px] font-normal mt-48">
          GALAXY SALE IS LIVE NOW
        </h3>
        <h2 className="text-[40px] sm:text-[60px] md:text-[75px] font-extrabold text-black">
          Galaxy S24 | S24 +
        </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[20px]">
          Get up to $1,000 in trade-in credit from participating carriers. Terms apply.
        </p>
      </div>
      <div className="basis-[45%] rounded-lg pb-80 md:order-2 order-1 group">
        <Image
          className="rounded-xl border-black ml-36 hover:translate-x-9 duration-[4s]"
          src="/2phone.png"
          height={300}
          width={300}
          alt="phone"
        />
      </div>
    </div>
  </div>
</div>

           {/* blog section */}
<div className="px-4 sm:px-8 md:px-16">
  <div className="flex flex-col sm:flex-row justify-between items-center">
    <p className="text-[24px] sm:text-[30px] font-semibold ml-0 sm:ml-16 mb-4 sm:mb-0">
      Our Blogs
    </p>
    <a href="/" className="text-[18px] sm:text-[25px] underline hover:text-blue-500">
      Show More
    </a>
  </div>

  <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 pt-8 mb-16">
    {/* Blog 1 */}
    <div className="shadow-lg py-[20px] text-center group hover:translate-y-[17px] duration-[3s]">
      <Image
        src="/stuff.png"
        height={300}
        width={300}
        alt="photo"
        className="w-full h-auto mx-auto object-contain"
      />
      <h2 className="text-[17px] sm:text-[18px] font-bold py-[15px] hover:text-blue-600">
        Accessorize Like a Pro
      </h2>
      <div className="flex justify-between items-center gap-4 pt-3 px-4">
        <h2 className="text-[14px] sm:text-[16px]">10th January 2024</h2>
        <a href="/" className="text-[14px] sm:text-[16px] hover:text-green-500">
          Read More
        </a>
      </div>
    </div>

    {/* Blog 2 */}
    <div className="shadow-lg py-[20px] text-center group hover:translate-y-[17px] duration-[3s]">
      <Image
        src="/cloth.png"
        height={300}
        width={300}
        alt="photo"
        className="w-full h-auto mx-auto object-contain"
      />
      <h2 className="text-[17px] sm:text-[18px] font-bold py-[15px] hover:text-blue-600">
        10 Timeless Wardrobe Staples
      </h2>
      <div className="flex justify-between items-center gap-4 pt-3 px-4">
        <h2 className="text-[14px] sm:text-[16px]">3rd February 2024</h2>
        <a href="/" className="text-[14px] sm:text-[16px] hover:text-green-500">
          Read More
        </a>
      </div>
    </div>

    {/* Blog 3 */}
    <div className="shadow-lg py-[20px] text-center group hover:translate-y-[17px] duration-[3s]">
      <Image
        src="/recycle.png"
        height={300}
        width={300}
        alt="photo"
        className="w-full h-auto mx-auto object-contain"
      />
      <h2 className="text-[17px] sm:text-[18px] font-bold py-[15px] hover:text-blue-600">
        The Art of Sustainable Fashion
      </h2>
      <div className="flex justify-between items-center gap-4 pt-3 px-4">
        <h2 className="text-[14px] sm:text-[16px]">1st March 2024</h2>
        <a href="/" className="text-[14px] sm:text-[16px] hover:text-green-500">
          Read More
        </a>
         </div>
    
       </div>
       </div>
      </div>
   </main>
  
);
}
