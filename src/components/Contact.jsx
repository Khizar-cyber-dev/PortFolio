import React from 'react'
import { FaArrowDown } from 'react-icons/fa';
import { IoIosPhonePortrait } from 'react-icons/io';
import { IoIosMailUnread } from "react-icons/io";
import Button from '../components/buttons/contactButton';
import { motion } from 'framer-motion';  

const Contact = () => {
  return (
    <div className='w-full '>
      <div>
        <motion.h1 initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:1}} viewport={{ once: true }} className='text-center text-3xl md:text-6xl mb-10'>GET IN TOUCH</motion.h1>
        <motion.p initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:1}} viewport={{ once: true }} className='text-center mb-5'>Do you have a project in your mind, contact me here</motion.p>
      </div>
      <div className='flex flex-col justify-center items-center gap-10 md:flex-row md:justify-around'>
         {/* First Section */}
  <div className='contact border-2 flex flex-col items-center justify-center h-[300px] w-[350px] md:w-[500px] md:h-[330px] rounded-lg gap-10 container'>
    <h1 className='text-center text-5xl'>
      Contact Me <FaArrowDown className='inline' />
    </h1>
    <div className=''>
      <div>
      <IoIosPhonePortrait className="inline" />:
      <span className='ms-3'>0321-0654466</span>
      </div>
      <br />
      <div>
      <IoIosMailUnread className='inline' />:
      <span className='ms-3'>khizarasim33@gmail.com</span>
      </div>
    </div>
    <div className='overlay'>

    </div>
  </div>

  {/* Form Section */}
  <div className='flex flex-col justify-center items-center h-[400px] w-[350px] md:w-[500px] md:h-[350px] rounded-lg  mt-20 md:mt-20' id="Contact">
    <form action="https://formspree.io/f/xpwavwrn" method="POST"  className='Form flex flex-col w-full'>
      <div className='flex flex-col  mb-2 md:flex-row space-y-4 md:space-x-6 md:space-y-0 my-8 w-full md:mb-3 mt-0'>
        <input type="text" name="firstname" placeholder='Enter your name:' className='bg-transparent border-2 border-white rounded-lg p-3 w-full' required/>
        <input type="email" name="email" placeholder='Enter your email:' className='bg-transparent border-2 border-white rounded-lg p-3 w-full' required/>
      </div>
      <textarea 
        name="message" className='bg-transparent border-2 border-white rounded-lg p-3 w-full mb-5'
        rows="10" placeholder='Write a Message For ME!' required>
      </textarea>
      <Button />
    </form>
  </div>
      </div>
    </div>
  )
}

export default Contact