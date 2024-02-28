import React from 'react'
import Iphone from '../../../assets/Iphone.png';
import Gradient from '../../../assets/Gradient.png';
import { motion } from "framer-motion";


function PhoneComponent() {
  return (
    <div className='md:w-[50vw] static hidden md:flex'>
        {/* <img src={Iphone} alt="iphone" className='absolute z-[90] md:min-w-[200px] md:w-[22%] md:right-44 md:h-[90%]' /> */}
        <motion.img
          className='absolute z-[90] md:min-w-[200px] md:w-[22%] md:right-40 md:top-36 md:h-[90%] sm:w-[60%] sm:right-40 sm:h-[100%] w-[60%]'
          src={Iphone}
          initial={{ y: -10}}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          // 
          // md:min-w-[150px]
        />
        <img src={Gradient} alt="gradient" className='absolute md:w-[18%] md:h-[75%] md:top-48 md:right-40 sm:w-[40%] sm:h-[90%] sm:top-[90%] w-[60%] xs:h-[50%] ' />
    </div>
  )                                                     
}

export default PhoneComponent
