import React, { useState, useEffect } from 'react';
import image from '../assets/image.jpg'
import Button from './buttons/Button'
import { motion } from 'framer-motion'

const Hero = () => {

    const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const messages = ["I'm Khizar Asim!", "Welcome to my portfolio.","I am a Front-End Developer.","Let's build something awesome!"];

  useEffect(() => {
    let typingTimeout;

    const handleTyping = () => {
      const currentMessage = messages[loopNum % messages.length];
      const fullText = currentMessage;

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {

        typingTimeout = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {

        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      typingTimeout = setTimeout(handleTyping, typingSpeed);
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const blinkingCursorStyle = {
    fontWeight: '100',
    fontSize: '32px',
    color: 'white',
    animation: 'blink 1s step-end infinite',
  };


  const keyframes = `
    @keyframes blink {
      from, to { color: transparent; }
      50% { color: white; }
    }
  `;


  return (
    <div className='h-[auto] md:h-[600px] w-full flex justify-start items-center' id="Hero">
  <div className='h-[auto] md:h-[300px] w-[90%] ml-[5%] flex flex-col-reverse md:flex-row '>
    
    <div className='w-full flex flex-col-reverse md:flex-row'>
      
      {/* Text section (Content div) */}
      <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:-0}} transition={{duration:1}} viewport={{ once: true }} className='p-5 w-full md:w-1/2 h-[auto]'>
        <h1 className='text-7xl'>Hi,</h1>
        <br />
        <h1 className="text-3xl font-bold text-wrap text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-300">
          {text}
          <span style={blinkingCursorStyle}>|</span>
        </h1>
        <p className='mt-5 mb-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt molestiae ullam expedita amet tempore quo deserunt accusamus minus, eaque consectetur voluptates eos exercitationem assumenda adipisci magni, necessitatibus iure ipsum vero?
        </p>
        <Button className="mt-3"/>
      </motion.div>

      {/* Image section */}
      <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{ once: true }} className='w-full md:w-1/2 flex justify-center md:justify-center items-center pt-[70px] border-0 md:border-0'>
        <img src={image} alt="" className='profile-image h-[200px] rounded-lg md:h-[300px]'/>
      </motion.div>
      
    </div>

  </div>
</div>



  )
}

export default Hero