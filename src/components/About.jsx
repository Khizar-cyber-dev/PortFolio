import React from 'react'
import about from '../assets/about.jpg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id="About">
      <div className='h-[auto] w-[90%] ms-[5%] mt-[5%]'>
          <div className="flex justify-between items-center gap-10 flex-col md:flex-row">
              
                <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:1.5}} viewport={{ once: true }}>
                  <img src={about} alt="" className='h-[300px] rounded-lg' style={{ boxShadow: '0 4px 30px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.5)' }}/>
                </motion.div>
                <motion.div initial={{opacity:0,y: 40}} whileInView={{opacity:1,y: 0}} transition={{duration:1.5}} viewport={{ once: true }} className='w-[auto] md:w-[400px] lg:w-[500px]'>
                  <h1 className='text-center text-3xl font-bold my-10'>About-Me</h1>
                  <div className='border-r-2 border-b-2 border-r-white border-b-white '>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque quaerat possimus mollitia laudantium adipisci facilis esse autem et sequi nulla odio expedita optio voluptate ducimus blanditiis quo commodi ipsa, dolore architecto vel itaque fugit suscipit. Sapiente ullam quaerat voluptatum error a minus rerum voluptas laudantium iste voluptates illo voluptate impedit officia eum aperiam similique, exercitationem dolorem sequi illum mollitia laborum nihil ipsum necessitatibus! Sequi, excepturi? Consectetur aut sequi asperiores tempore impedit sit ducimus reiciendis animi. Ratione ipsum impedit ad?
                  </p>
                  </div>
                </motion.div>
              
          </div>
      </div>
    </div>
  )
}

export default About