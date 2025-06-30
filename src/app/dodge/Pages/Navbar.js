"use client"
import Image from 'next/image'
import React from 'react'
import {Cinzel} from 'next/font/google';
const f = Cinzel({ weight :["600"],display:"swap",subsets:['latin'] });
function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='w-full bg-black fixed top-0 flex justify-between items-center h-20 overflow-hidden'>
        <Image src="/log.png" width={512} height={512} priority alt='Logo' className='object-contain w-24 h-24 2xl:ml-6'/>
        <nav className={`${f.className} text-white text-sm md:text-lg 2xl:text-xl space-x-2 sm:space-x-7 md:space-x-10 pr-3 sm:pr-7 2xl:pr-10`}>
            <button onClick={()=>{scrollTo("home")}} className='hover:text-red-600 cursor-pointer'>Dodge</button>
            <button onClick={()=>{scrollTo("feature")}} className='hover:text-red-600 cursor-pointer'>Features</button>
            <button onClick={()=>{scrollTo("form")}} className='bg-red-700 hover:bg-red-600 hover:text-black h-7 md:h-9 px-2 sm:px-4 2xl:px-8 rounded-lg cursor-pointer'>Book</button>
        </nav>
    </div>
  )
}

export default Navbar