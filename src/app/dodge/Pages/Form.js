"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { FaAddressCard } from "react-icons/fa6";
import { Cinzel,Ruslan_Display,Shippori_Mincho } from 'next/font/google';
const c = Cinzel({weight :["500"],display:"swap",subsets:['latin']});
const n = Ruslan_Display({weight : ["400"],display:"swap",subsets:['latin']});
const f = Shippori_Mincho({weight : ["700"],display:"swap",subsets:['latin']});

function Form() {
  const [loading, setLoading] = useState(false); 
  const [flip,setFlip] = useState(false);
      const [name,setName] = useState("");
      const [email,setEmail] = useState("");
      const [phone,setPhone] = useState("");

      const [nameError, setNameError] = useState("");
      const [emailError, setEmailError] = useState("");
      const [phoneError, setPhoneError] = useState("");
      useEffect(()=>{
        if(!flip){
          setName("");
          setEmail("");
          setPhone("");
        }
      },[flip])
      let uName=/^[A-Za-z]+ [A-Za-z]+$/; 
      let eFormat = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/
      let pFormat = /^[0-9]{10}$/
    const handleSubmit = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("*Fill this Field");
      isValid = false;
    }
    else if(!uName.test(name)){
      setNameError("*Enter Full Name")
      isValid = false;
    }
    if (!email.trim()) {
      setEmailError("*Fill this Field");
      isValid = false;
    }
    else if(!eFormat.test(email)){
      setEmailError("*Enter Valid Email")
      isValid = false;
    }
    if (!phone.trim()) {
      setPhoneError("*Fill this Field");
      isValid = false;
    } else if(!pFormat.test(phone)){
      setPhoneError("*Enter 10 Digit Number");
      isValid = false
    }

    if (isValid) {
      setLoading(true);
      setTimeout(()=>{
        setFlip(true)
        setLoading(false) 
      },1000)
    }
  };

  return (
   <div className='w-screen h-screen'>
         <section id='form' className='w-full h-full bg-black pt-12'>
              <motion.form animate={{ rotateY: flip ? 180 : 0 }} style={{ transformStyle: "preserve-3d" }} initial={{opacity:0}} whileInView={{opacity:1,y:140}} transition={{duration:0.8}} className='border-4 border-red-600 shadow-[0px_1px_16px_10px_rgba(255,_0,_0,_0.65)] w-3xs sm:w-80 lg:w-96 xl:w-[440px] 2xl:w-[530px] h-1/2 rounded-2xl mx-auto'>
              {!flip && 
                  <div className='backface-hidden'>
                  <p className={`${n.className} text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl pt-12 text-red-600 text-center`}>Experience the Beast</p>
                  <div className={`${f.className} text-center text-white text-sm lg:text-md mt-7`}>
                  <input id='user' type='text' value={name} onChange={(e)=>{setName(e.target.value); 
                     if(uName.test(e.target.value)){
                         setNameError("");
                     }
                  }} className='w-3/4 xl:w-3/5 h-8 2xl:h-10 bg-transparent rounded-lg border-2 border-lime-400 outline-none pl-4 focus:shadow-[0px_1px_10px_2px_rgba(65,255,1)]' placeholder='Enter Name'/>
                  <br/>{nameError && <span className='text-xs'>{nameError}</span>}<br/>
                  <input id='mail' type='text' value={email} onChange={(e)=>{setEmail(e.target.value);
                     if(eFormat.test(e.target.value)){
                        setEmailError("")
                     }
                  }} className='w-3/4 xl:w-3/5 h-8 2xl:h-10 bg-transparent rounded-lg border-2 border-lime-400 outline-none pl-4 focus:shadow-[0px_1px_10px_2px_rgba(65,255,1)] mt-1 xl:mt-2' placeholder='Enter Email'/>
                  <br/>{emailError && <span className='text-xs'>{emailError}</span>}<br/>
                  <input id='num' value={phone} onChange={(e)=>{setPhone(e.target.value);
                     if(pFormat.test(e.target.value)){
                         setPhoneError("")
                     }
                  }} className='w-3/4 xl:w-3/5 h-8 2xl:h-10 bg-transparent rounded-lg border-2 border-lime-400 outline-none pl-4 focus:shadow-[0px_1px_10px_2px_rgba(65,255,1)] mt-1 xl:mt-2' placeholder='Enter Phone'/>
                  <br/>{phoneError && <span className='text-xs'>{phoneError}</span>}<br/>
                  {loading ? ( <button type='button' className={`${c.className} w-28 lg:w-36 2xl:w-40 h-8 2xl:h-10 rounded-lg sm:text-lg 2xl:text-xl animate-pulse bg-red-500 mt-2`}>Booking <span className="loading loading-dots loading-lg"></span></button>):(<button className={`${c.className} bg-red-700 hover:bg-red-600 hover:text-black w-28 lg:w-36 2xl:w-40 h-8 2xl:h-10 rounded-lg sm:text-lg 2xl:text-xl cursor-pointer mt-4`} type='button' onClick={handleSubmit}>Book Now </button>)}
                  </div> 
                  </div>
               }
                {flip &&
                  <div className='text-center pt-28 backface-hidden rotate-y-180'>
                     <h1 className={`${n.className} text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl text-red-600`}>Booking Confirmed</h1>
                     <div className='border-2 bg-slate-900 border-lime-400 w-40 md:w-44 lg:w-48 2xl:w-52 h-8 2xl:h-10 rounded-s-full mx-auto mt-2 flex items-center overflow-hidden shadow-[0px_1px_8px_0px_rgba(65,255,1)]'>
                       <FaAddressCard className='text-lime-600 w-auto h-auto pl-3' />
                       <p className={`${c.className} text-white uppercase text-xs pl-1 mx-auto`}>{name}</p>
                     </div>
                     <h2 className={`${c.className} text-white text-xs xl:text-sm pt-4 xl:pt-5 text-pretty`}>Thank you for your interest. We'll contact you soon!</h2>
                     <button type='button' className={`${c.className} bg-red-700 text-xs lg:text-lg mt-8 h-8 xl:h-10 px-3 xl:px-6 rounded-xl text-white cursor-pointer hover:bg-red-600 hover:text-black`} onClick={()=>{setFlip(false)}}>Go Back</button>
                  </div>
                   } 
              </motion.form>
         </section>
       </div>
  )
}

export default Form