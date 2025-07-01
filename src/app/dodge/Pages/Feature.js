"use client"
import React from 'react'
import { motion } from 'framer-motion'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Encode_Sans_SC, Ruslan_Display ,Spectral_SC,DM_Serif_Text, Libre_Bodoni } from 'next/font/google';
const n = Ruslan_Display({weight : ["400"],display:"swap",subsets:['latin'],preload:false});
const e = Encode_Sans_SC({weight :["500"],display:"swap",subsets:['latin'],preload:false});
const s = Spectral_SC({weight:["500"],display:"swap",subsets:['latin'],preload:false});
const l = Libre_Bodoni({weight:["400"],display:"swap",subsets:['latin'],preload:false});
const d =DM_Serif_Text({weight:["400"],display:"swap",subsets:['latin'],preload:false});
import Image from 'next/image'
function Feature() {
   const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
   });
  return (
    <div className='w-screen h-screen'>
      <section id='feature' className='w-full h-full bg-black'>
        <motion.h2 whileInView={{y:80}} transition={{duration:1}} className={`${n.className} text-red-600 text-center text-2xl lg:text-5xl lg:pt-3`}>Why Choose This Car?</motion.h2>
        <div className='h-3/4 lg:flex mt-10 lg:mt-0 lg:pt-4'>
          <div className='h-3/5 lg:w-2/5 lg:h-full flex-col justify-items-center pt-12 lg:pt-24 overflow-hidden'>
              <motion.div className='text-center border-2 border-lime-400 shadow-[0px_1px_10px_3px_rgba(65,255,1)] w-72 lg:w-80 2xl:w-[350px] h-36 lg:h-40 2xl:h-44 rounded-2xl'>
                <h3 className={`${e.className} text-slate-200 text-lg lg:text-xl pt-2`}>Design</h3>
                <div className={`${s.className} text-sm lg:text-lg text-slate-200 text-nowrap pt-2 space-y-2`}>
                   <p className=''>Body Type<span className='pl-2 text-red-600'>" Widebody Coupe "</span></p>
                   <p className=''>Headlights<span className='pl-2 text-red-600'>" Air-Catcher Led "</span></p>
                   <p className=''>Wheels<span className='pl-2 text-red-600'>" Forged Alloy "</span></p>
                  </div>
              </motion.div>
              <motion.div initial={{opacity:0}} whileInView={{opacity:1,x:90}} transition={{duration:2}} className='text-center border-2 border-lime-400 shadow-[0px_1px_10px_3px_rgba(65,255,1)] w-72 lg:w-80 2xl:w-[350px] h-36 lg:h-40 2xl:h-44 rounded-2xl mt-6 -ml-44 md:ml-9 lg:mt-10 lg:-ml-32 2xl:ml-11'>
                <h3 className={`${e.className} text-slate-200 text-lg lg:text-xl pt-2`}>Technology</h3>
                  <div className={`${s.className} text-sm lg:text-lg text-slate-200 text-nowrap space-y-2 pt-2`}>
                   <p>Driving Assist<span className='pl-2 text-red-600'>" AI Guidance "</span></p>
                   <p>Infotainment<span className='pl-2 text-red-600'>" Touchscreen "</span></p>
                   <p>CoolingSystem<span className='pl-2 lg:pl-0 text-red-600'>" Power Chiller "</span></p>
                  </div>
              </motion.div>    
          </div>
          <div className='h-2/5 lg:w-3/5 lg:h-full overflow-hidden'>
             <p className={`${e.className} text-lime-400 text-xl lg:text-3xl text-center pt-3 lg:pt-24`}>Price<span className={`${l.className} text-red-600 pl-4`}>$ 32,800</span></p>
             <motion.div initial={{opacity:0}} whileInView={{opacity:1,x:-120}} transition={{duration:1.7}}>
             <Image src="/gree.png" alt='' width={800} height={800} priority className='object-contain w-3xs sm:w-72 lg:w-3xl mx-auto -mr-20 sm:mr-14 md:mr-24 lg:-mr-28 lg:-mt-10 xl:-mt-20 2xl:mr-3'/> 
             </motion.div>
          </div>
          </div>
            <p className={`${e.className} text-center text-xl lg:text-2xl 2xl:text-3xl text-white -mt-8 sm:-mt-5 lg:-mt-24 2xl:-mt-32 `}>Performance</p>
            <div className={`${s.className} h-24 lg:h-28 2xl:h-36 flex justify-evenly text-center text-white text-md lg:text-xl 2xl:text-2xl pt-5 lg:pt-8`}>
              <div ref={ref} className='w-36 md:w-44 2xl:w-60 lg:border-4 lg:border-t-0 lg:border-b-0 lg:border-red-600 space-y-3 pt-2 2xl:pt-5'>
                <p>Topspeed</p>
                {inView &&(
                <p className={`${d.className} text-red-600 text-lg 2xl:text-2xl`}><CountUp end={320} duration={3} suffix=' KM/H'/></p>)}
              </div>
              <div className='w-36 md:w-44 2xl:w-60 border-2 border-red-600 border-t-0 border-b-0 lg:border-4 lg:border-t-0 lg:border-b-0 lg:border-red-600 space-y-3 pt-2 2xl:pt-5'>
                <p>Horsepower</p>
                {inView &&(
                <p className={`${d.className} text-red-600 text-lg 2xl:text-2xl`}><CountUp end={717} duration={4} suffix=' HP'/></p>)}
              </div>
              <div className='w-36 md:w-44 2xl:w-60 lg:border-4 lg:border-t-0 lg:border-b-0 lg:border-red-600 space-y-3 pt-2 2xl:pt-5'>
                <p>0-100 km/h</p>
                <p className={`${d.className} text-red-600 text-lg 2xl:text-2xl`}>3.6 seconds</p>
              </div>
        </div>
      </section>
    </div>
  )
}

export default Feature