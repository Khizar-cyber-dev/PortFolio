import {useState} from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiCloseFill, RiMenu3Line } from 'react-icons/ri';
import {Tooltip,Github} from '../components/buttons/icon'
import {motion} from 'framer-motion'

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    } 
  return (
    <motion.nav initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="backdrop-blur-sm bg-white/20 fixed top-0 left-0 right-0 z-50 m-2 rounded-lg">
        <div className='flex justify-between items-center mx-3'>
          <div className="logo">
            <a href="#" className='text-5xl md:text-7xl'>KA</a>
          </div>
          <div className='links hidden md:block'>
            <ul className='flex items-center space-x-8 text-lg'>
              <li>
                <a href="#" className=' hover:text-neutral-500 transition duration-300 ease-in-out'>Home</a>
              </li>
              <li>
                <a href="#" className=' hover:text-neutral-500 transition duration-300 ease-in-out'>About-Me</a>
              </li>
              <li>
                <a href="#" className=' hover:text-neutral-500 transition duration-300 ease-in-out'>Experience</a>
              </li>
              <li>
                <a href="#" className=' hover:text-neutral-500 transition duration-300 ease-in-out'>Projects</a>
              </li>
              <li>
                <a href="#" className=' hover:text-neutral-500 transition duration-300 ease-in-out'>Contact-Me</a>
              </li>
            </ul>
          </div>
          <div className='buttons hidden md:block space-x-4'>
            <button className='rounded-[50%]'><a href="#"><Tooltip /></a></button>
            <button className='rounded-[50%]'><a href="#"><Github /></a></button>
          </div>
          <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-white focus:outline-none' aria-label={isOpen ? "CloseMenu" : "OpenMenu"}>{isOpen ? <RiCloseFill /> : <RiMenu3Line />}</button>
          </div>
        </div>
        {isOpen && (
            <div className='md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-xl mt-2'>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col items-center justify-center space-y-5">
                    <a href="#Hero" className='hover:text-neutral-500 transition duration-300 ease-in-out'>Home</a>
                    <a href="#About" className='hover:text-neutral-500 transition duration-300 ease-in-out'>About-Me</a>
                    <a href="#Experience" className='hover:text-neutral-500 transition duration-300 ease-in-out'>Experience</a>
                    <a href="#Project" className='hover:text-neutral-500 transition duration-300 ease-in-out'>Project</a>
                  </div>
                    <a href="#" className='border border-neutral-700 text-white py-2 px-4 rounded-lg text-center flex justify-center items-center hover:bg-neutral-700 transition'><FaGithub className=' text-2xl hover:text-3xl transition duration-300 ease-in-out'/></a>
                    <a href="#" className='bg-blue-600 text-white py-2 px-4 rounded-lg text-center flex justify-center items-center hover:bg-neutral-700 transition'><FaLinkedin  className=' text-2xl hover:text-3xl transition duration-300 ease-in-out'/></a>
                </div>
            </div>
        )}
    </motion.nav>
  )
}

export default Navbar