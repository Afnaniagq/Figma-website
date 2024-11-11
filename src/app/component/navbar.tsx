"use client"
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { LuHeart } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";

export default function Navbar(){
    const  [isClick, setisClick]= useState(false);
     
    const toggleNavbar = ():void =>{
        setisClick(!isClick)
    }
    return(
    
        <nav className="bg-white p-2">
        <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div   className="flex items-center justify-between h-16">
                <div  className="flex items-center">
                   <div className="flex-shrink-0">
                   <a href="/" className="text-black
                    text-2xl font-bold font-sans text-[25px]">ShopVerse</a>
           </div>
           </div>
           <div className="hidden md:block items-center">
            <div className="ml-4 flex items-center justify-items-center text-[20px] justify-around space-x-4">
                <a href="/" className="text-black hover:bg-black hover:text-white rounded-lg p-2">Home</a>
                <a href="/" className="text-black hover:bg-black hover:text-white rounded-lg p-2">About</a>
                <a href="/" className="text-black hover:bg-black hover:text-white rounded-lg p-2">Categories</a>
                <a href="/" className="text-black hover:bg-black hover:text-white rounded-lg p-2">Shop</a>

                
                <form className="max-w-60 m-auto ">
                            <div className="relative">
                                <input type="search" placeholder="Search for 'Phones'" className="w-full p-4 text-[11px] outline-double rounded-full text-black" />
                                <button className="absolute right-1 top-1/2 -translate-y-1/2 translate-x-4 p-4  rounded-s-full">
                                <AiOutlineSearch />
                                </button>
                                <button className="absolute right-1 top-1/2  -translate-y-2 w-[20px] translate-x-7 p-4 pl-[40px] mt-0 pt-0 rounded-s-full">
                                <LuHeart />
                                </button>
                                <button className="absolute right-1 top-1/2 -translate-y-2 translate-x-12 p-4 pl-[40px] mt-0 pt-0 rounded-s-full w-6">
                                <LuShoppingBag />
                                </button>
                            </div>
                        </form>
            </div>
           </div>
           <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white " onClick={toggleNavbar}>
            {isClick ? (
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentcolor" stroke-width="1.5" stroke="currentColor" className="size-6 bg-black rounded-md">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentcolor" stroke-width="1.5" stroke="currentColor" className="size-6 icon bg-black rounded-md">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
            </button>
           </div>
           </div>
           </div>
           {isClick && (
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/" className="text-black block hover:bg-white  hover:text-black rounded-lg p-2">Home</a>
                <a href="/" className="text-black block hover:bg-white  hover:text-black rounded-lg p-2">About</a>
                <a href="/" className="text-black block hover:bg-white  hover:text-black rounded-lg p-2">Categories</a>
                <a href="/" className="text-black block hover:bg-white hover:text-black rounded-lg p-2">Shop</a>

                  
                <form className="max-w-60 m-auto ">
                            <div className="relative">
                                <input type="search" placeholder="Search for 'Phones'" className="w-full p-4 text-[11px]  rounded-full text-black outline-double" />
                                <button className="absolute right-1 top-1/2 -translate-y-1/2 translate-x-4 p-5  rounded-s-full">
                                <AiOutlineSearch />
                                </button>
                               
                            </div>
                        </form>
                </div>
            </div>
           )}
           </nav>

             )
            }



{/* <header className="bg-green-600 p-2">
<div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div   className="flex items-center justify-between h-16">
        <div  className="flex items-center">
           <div className="flex-shrink-0">
           <a href="/logo.webp" className="text-white
            text-lg font-bold font-sans text-[25px]">ShopVerse</a>
   </div>
   </div>
           <div  className="relative ml-4 flex  sm:justify-items-center lg:justify-center  space-x-4">
                    <Link href="/" className="text-white round-lg p-2">About</Link>
                    <Link href="/about" className="text-white round-lg p-2">Shop</Link>
                    <Link href="/contact" className="text-white round-lg p-2">Categories</Link>
                  

                    <form className="max-w-60 m-auto ">
                            <div className="relative">
                                <input type="search" placeholder="Search for 'Phones'" className="w-full p-4 text-[11px]  rounded-full text-black" />
                                <button className="absolute right-1 top-1/2 -translate-y-1/2 translate-x-4 p-4  rounded-s-full">
                                <AiOutlineSearch />
                                </button>
                                <button className="absolute right-1 top-1/2  -translate-y-2 w-[20px] translate-x-7 p-4 pl-[40px] mt-0 pt-0 rounded-s-full">
                                <LuHeart />
                                </button>
                                <button className="absolute right-1 top-1/2 -translate-y-2 translate-x-12 p-4 pl-[40px] mt-0 pt-0 rounded-s-full w-6">
                                <LuShoppingBag />
                                </button>
                            </div>
                        </form>
   </div>

   
 
 </div>
 </div>
</header> */}
  