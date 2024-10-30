import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Tooltip,Github } from './buttons/icon';

const Footer = () => {
  return (
    <div className='mt-[100px] w-full bg-neutral-700'>
        <div className='flex justify-center flex-col items-center'>
            <h1 className='text-center text-3xl md:text-6xl text-bold mt-5'>Khizar Asim</h1>
            <div className='mt-10 '>
            <ul className='flex gap-3 flex-wrap justify-center items-center space-x-4 text-lg md:space-x-8'>
              <li>
                <a href="#" className='text-white hover:text-neutral-500 transition duration-300 ease-in-out'>Home</a>
              </li>
              <li>
                <a href="#" className='text-white hover:text-neutral-500 transition duration-300 ease-in-out'>About-Me</a>
              </li>
              <li>
                <a href="#" className='text-white hover:text-neutral-500 transition duration-300 ease-in-out'>Experience</a>
              </li>
              <li>
                <a href="#" className='text-white hover:text-neutral-500 transition duration-300 ease-in-out'>Projects</a>
              </li>
              <li>
                <a href="#" className='text-white hover:text-neutral-500 transition duration-300 ease-in-out'>Contact-Me</a>
              </li>
            </ul>
            </div>
            <div className='buttons  md:block mt-8 space-x-3'>
            <button className='rounded-[50%]'><a href="#"><Github /></a></button>
            <button className='rounded-[50%]'><a href="#"><Tooltip /></a></button>
          </div>
          <p className='my-8'>Copyright © <span className='text-neutral-400 mr-0 italic'>Khizar</span> - All rights are reserved.</p>
        </div>
    </div>
  )
}

export default Footer