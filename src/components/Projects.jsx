import React from 'react'
import Button from '../components/buttons/sidebutton'
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <div className='w-[90%] ms-[5%] my-20'>
        <div>
            <motion.h1 initial={{opacity:0,y:40}} whileInView={{ opacity: 1,y:0 }} transition={{ duration: 1 }} viewport={{once:true}} className='text-3xl text-center md:text-6xl'>My Projects</motion.h1>
            <div className='flex flex-wrap justify-center items-center gap-10 mt-8'>
                <motion.div initial={{opacity:0,y:40}} whileInView={{ opacity: 1,y:0 }} transition={{ duration: 1 }} viewport={{once:true}} className='h-[300px] w-[300px] flex flex-col justify-center items-center gap-5 border border-white rounded-lg hover:shadow-custom-hover'>
                    <h1 className='text-center pt-2'>Ecommerce Website</h1>
                    <p className='p-3 text-center'>I built an online store using Bootstrap, JavaScript, and HTML, integrating APIs to dynamically display products. This project helped me refine my skills in working with data and creating a seamless shopping experience.</p>
                    <a href="#"><Button /></a>
                </motion.div>
                <motion.div initial={{opacity:0,y:40}} whileInView={{ opacity: 1,y:0 }} transition={{ duration: 1 }} viewport={{once:true}} className='h-[300px] w-[300px] flex flex-col justify-center items-center gap-5 border border-white rounded-lg hover:shadow-custom-hover'>
                    <h1 className='text-center '>Dashboard WebPage</h1>
                    <p className='p-3 text-center'>I built an online store using Bootstrap, JavaScript, and HTML, integrating APIs to dynamically display products. This project helped me refine my skills in working with data and creating a seamless shopping experience.</p>
                    <a href="#"><Button /></a>
                </motion.div>
                <motion.div initial={{opacity:0,y:40}} whileInView={{ opacity: 1,y:0 }} transition={{ duration: 1 }} viewport={{once:true}} className='h-[300px] w-[300px] flex flex-col justify-center items-center gap-5 border border-white rounded-lg hover:shadow-custom-hover'>
                    <h1 className='text-center '>UI/UX Design</h1>
                    <p className='p-3 text-center'>I built an online store using Bootstrap, JavaScript, and HTML, integrating APIs to dynamically display products. This project helped me refine my skills in working with data and creating a seamless shopping experience.</p>
                    <a href="#"><Button /></a>
                </motion.div>
                <motion.div initial={{opacity:0,y:40}} whileInView={{ opacity: 1,y:0 }} transition={{ duration: 1 }} viewport={{once:true}} className='h-[300px] w-[300px] flex flex-col justify-center items-center gap-5 border border-white rounded-lg hover:shadow-custom-hover'>
                    <h1 className='text-center '>Weather App</h1>
                    <p className='p-3 text-center'>I built an online store using Bootstrap, JavaScript, and HTML, integrating APIs to dynamically display products. This project helped me refine my skills in working with data and creating a seamless shopping experience.</p>
                    <a href="#"><Button /></a>
                </motion.div>
                <motion.div initial={{opacity:0,y:40}} whileInView={{ opacity: 1,y:0 }} transition={{ duration: 1 }} viewport={{once:true}} className='h-[300px] w-[300px] flex flex-col justify-center items-center gap-5 border border-white rounded-lg hover:shadow-custom-hover'>
                    <h1 className='text-center '>To Do List</h1>
                    <p className='p-3 text-center'>I built an online store using Bootstrap, JavaScript, and HTML, integrating APIs to dynamically display products. This project helped me refine my skills in working with data and creating a seamless shopping experience.</p>
                    <a href="#"><Button /></a>
                </motion.div>
                <motion.div initial={{opacity:0,y:40}} whileInView={{ opacity: 1,y:0 }} transition={{ duration: 1 }} viewport={{once:true}} className='h-[300px] w-[300px] flex flex-col justify-center items-center gap-5 border border-white rounded-lg hover:shadow-custom-hover'>
                    <h1 className='text-center '>Tic Tac Toe</h1>
                    <p className='p-3 text-center'>I built an online store using Bootstrap, JavaScript, and HTML, integrating APIs to dynamically display products. This project helped me refine my skills in working with data and creating a seamless shopping experience.</p>
                    <a href="#"><Button /></a>
                </motion.div>
                <motion.div initial={{opacity:0,y:40}} whileInView={{ opacity: 1,y:0 }} transition={{ duration: 1 }} viewport={{once:true}} className='h-[300px] w-[300px] flex flex-col justify-center items-center gap-5 border border-white rounded-lg hover:shadow-custom-hover'>
                    <h1 className='text-center '>Snake Game</h1>
                    <p className='p-3 text-center'>I built an online store using Bootstrap, JavaScript, and HTML, integrating APIs to dynamically display products. This project helped me refine my skills in working with data and creating a seamless shopping experience.</p>
                    <a href="#"><Button /></a>
                </motion.div>
                {/* <motion.div initial={{opacity:0,y:40}} whileInView={{ opacity: 1,y:0 }} transition={{ duration: 1 }} viewport={{once:true}} className='h-[300px] w-[300px] flex flex-col justify-center items-center gap-5 border border-white rounded-lg hover:shadow-custom-hover'>
                    <h1 className='text-center '>AI Image Generator</h1>
                    <p className='p-3 text-center'>I built an online store using Bootstrap, JavaScript, and HTML, integrating APIs to dynamically display products. This project helped me refine my skills in working with data and creating a seamless shopping experience.</p>
                    <a href="#"><Button /></a>
                </motion.div> */}
            </div>
        </div>
    </div>
  )
}

export default Projects