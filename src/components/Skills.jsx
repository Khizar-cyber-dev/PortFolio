import React from 'react'
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    <div className='my-20 w-[80%] ms-[10%]' id="Skill">
        <motion.h1 initial={{opacity:0,y: 40}} whileInView={{opacity:1,y: 0}} transition={{duration:1}} viewport={{ once: true }} className='text-center text-3xl md:text-6xl '>My Skills</motion.h1>
        <motion.div initial={{opacity:0,y: 40}} whileInView={{opacity:1,y: 0}} transition={{duration:1}} viewport={{ once: true }} className='flex flex-wrap justify-center items-center gap-8 mt-8'>
            <div className='skils flex flex-col gap-6 justify-center items-center h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-xl border border-white hover:shadow-custom-hover'>
                <h1 className='text-center text-bold text-xl'>HTML</h1>
                <IoLogoHtml5 className='text-8xl'/>
            </div>
            <div className='skils flex flex-col gap-6 justify-center items-center h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-xl border border-white hover:shadow-custom-hover'>
                <h1 className='text-center text-bold text-xl'>CSS</h1>
                <FaCss3Alt className='text-8xl'/>
            </div>
            <div className='skils flex flex-col gap-6 justify-center items-center h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-xl border border-white hover:shadow-custom-hover'>
                <h1 className='text-center text-bold text-xl'>JS</h1>
                <FaJs className='text-8xl'/>
            </div>
            <div className='skils flex flex-col gap-6 justify-center items-center h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-xl border border-white hover:shadow-custom-hover'>
                <h1 className='text-center text-bold text-xl'>Bootstrap</h1>
                <FaBootstrap className='text-8xl'/>
            </div>
            <div className='skils flex flex-col gap-6 justify-center items-center h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-xl border border-white hover:shadow-custom-hover'>
                <h1 className='text-center text-bold text-xl'>Tailwind css</h1>
                <RiTailwindCssFill className='text-8xl'/>
            </div>
            <div className='skils flex flex-col gap-6 justify-center items-center h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-xl border border-white hover:shadow-custom-hover'>
                <h1 className='text-center text-bold text-xl'>JQuery</h1>
                <DiJqueryLogo className='text-8xl'/>
            </div>
            <div className='skils flex flex-col gap-6 justify-center items-center h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-xl border border-white hover:shadow-custom-hover'>
                <h1 className='text-center text-bold text-xl'>React.js</h1>
                <RiReactjsFill className='text-8xl'/>
            </div>
        </motion.div>
    </div>
  )
}

export default Skills