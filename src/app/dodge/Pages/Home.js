"use client"
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';
import { Ruslan_Display,Cinzel,Spectral_SC } from 'next/font/google';
const n = Ruslan_Display({weight : ["400"],display:"swap",subsets:['latin']});
const s = Spectral_SC({ weight :["600"] ,display:"swap",subsets:['latin']});
const c = Cinzel({weight :["500"],display:"swap",subsets:['latin']});
function Home() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='w-screen h-screen'>
      <section id='home' className='w-full h-full bg-black overflow-hidden'>
         <motion.h1 initial={{opacity:0}} whileInView={{opacity:1,y:90}} transition={{duration:1}} className={`${n.className} text-center text-2xl sm:text-4xl lg:text-5xl bg-gradient-to-t from-red-600 via-red-700 to-red-600 bg-clip-text text-transparent uppercase lg:pt-5`}>Unleash the Beast</motion.h1>
         <div className='h-4/5 mt-7 lg:flex lg:h-full'>
          <div className='h-1/2 lg:h-full lg:w-3/5'>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1,x:90,y:60}} transition={{duration:1}}>
            <Image src="/dodge.png" width={1024} height={1024} priority alt='SRT' className='object-contain mx-auto -ml-20 sm:ml-5 md:ml-20 w-96 sm:w-[400px] md:w-[480px] md:-mt-10 lg:w-7xl 2xl:w-5xl lg:-ml-20 lg:mt-20 xl:mt-10 2xl:-mt-10 2xl:ml-3.5'/>
           </motion.p>
          </div> 
          <div className='h-1/2 lg:h-full lg:w-2/5 bg-slate-00 text-center text-white'>
           <Image src="/hell.png" width={512} height={512} priority alt='' className='mx-auto object-cover w-52 h-auto xl:w-72 md:pt-14 lg:pt-52'/>
           <motion.h2 initial={{opacity:0}} whileInView={{opacity:1,y:-40}} transition={{duration:1}} className={`${s.className} text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl pt-12 lg:pt-14`}>Drive The Dodge Challenger</motion.h2>
            <motion.h2 initial={{opacity:0}} whileInView={{opacity:1,x:-95}} transition={{duration:2}} className={`${s.className} text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl -mt-5 -mr-48 xl:pt-4`}>Experience The Thrill</motion.h2>
             <button onClick={()=>{scrollTo("form")}} className={`${c.className} text-white cursor-pointer bg-red-700 w-40 h-10 xl:h-12 text-xl xl:text-2xl rounded-2xl hover:bg-red-600 hover:scale-110 transition-all animate-bounce mt-14`}>Drive Now</button>
          </div> 
         </div>
      </section>
    </div>
  )
}

export default Home