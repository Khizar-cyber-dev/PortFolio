import React from 'react'
import { GiStarMedal } from "react-icons/gi";
import {motion} from 'framer-motion'

const Experience = () => {
  return (
    <div className='h-auto w-full mt-20'>
      <motion.h1 initial={{opacity:0,y:40}} whileInView={{ opacity: 1,y:0 }} transition={{ duration: 1 }} viewport={{once: true}} className='text-center text-3xl mb-8 md:text-6xl'>Experience</motion.h1>
        <div className="flex flex-col md:flex-row justify-around items-center">
            <motion.div initial={{opacity:0,y:60}} whileInView={{ opacity: 1,y:0 }} transition={{ duration: 1 }} viewport={{once: true}} className='w-[80%] rounded-xl flex flex-col items-center justify-center gap-10 p-5 text-center  md:text-start border border-white hover:shadow-custom-hover'>
                <GiStarMedal className='text-5xl mb-3'/>
                
                <div className="flex flex-col gap-10">
                <h1 className='text-center'>I have developed a range of projects that showcase my skills in frontend development:</h1>
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <div className="md:w-1/4">
                      <h1 className="text-center md:text-left">Ecommerce-Website<span className="hidden md:inline">:</span></h1>
                    </div>
                    <div className="md:w-3/4">
                      I built an online store using Bootstrap, JavaScript, and HTML, integrating APIs to dynamically display products. This project helped me refine my skills in working with data and creating a seamless shopping experience.
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/4">
                    <h1 className="text-center md:text-left">Tic-Tac-Toe Game<span className="hidden md:inline">:</span></h1>
                  </div>
                  <div className="md:w-3/4">
                    Using React.js, I developed a fun and interactive Tic-Tac-Toe game, which strengthened my understanding of component-based architecture and state management.
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/4">
                    <h1 className="text-center md:text-left">Weather App<span className="hidden md:inline">:</span></h1>
                  </div>
                  <div className="md:w-3/4">
                    I built a weather application using JavaScript and CSS, allowing users to fetch and display real-time weather data based on their location.
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/4">
                    <h1 className="text-center md:text-left">To-Do List App<span className="hidden md:inline">:</span></h1>
                  </div>
                  <div className="md:w-3/4">
                    In this project, I utilized JavaScript, Bootstrap, CSS, and local storage to create a functional to-do list, enabling users to manage their tasks effectively.
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/4">
                    <h1 className="text-center md:text-left">Modern SaaS Website<span className="hidden md:inline">:</span></h1>
                  </div>
                  <div className="md:w-3/4">
                    I developed a sleek SaaS website using React, Tailwind, and Framer Motion, focusing on performance and user engagement.
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/4">
                    <h1 className="text-center md:text-left">VirtualR Build Tools<span className="hidden md:inline">:</span></h1>
                  </div>
                  <div className="md:w-3/4">
                    I created build tools for developers using React.js and Tailwind CSS, enhancing their workflow and productivity.
                  </div>
                </div>
              <p>These projects have provided me with a solid foundation in frontend technologies and a deep understanding of user-centered design.</p>
              </div>

            </motion.div>
        </div>
    </div>
  )
}

export default Experience