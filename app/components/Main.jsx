'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import img from '../../public/Assets/bg.png'
import './main.css'
import {Pacifico} from "next/font/google";

import { useSpring, animated } from '@react-spring/web'

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400", // Add the weight specification
  
  
});

const Main = () => {

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  })



  const [text, setText] = useState('build');



  useEffect(() => {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.classList.add('loaded');
  }, []);



  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (text) {
        case 'build':
          setText('sell');
          break;
        case 'sell':
          setText('rennovate');
          break;
        case 'rennovate':
          setText('buy');
          break;
        case 'buy':
          setText('build');
          break;
        default:
          setText('build');
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [text]);






  

 

  return (
    <>



     <div 
     className='bg-cover' style={{backgroundImage:`url(${img.src})`, backgroundRepeat:'no-repeat', opacity:'0.9' }}>





<div className="image-container flex ">
<div className=" flex  gap-3 text-white text-3xl md:text-6xl">
      
      <span 
      className='flex gap-4 font-semibold  font-mono'
      >WE  <p
  
      className={`${pacifico.className} animated-text`}>{text}</p> YOUR HOME
      </span>
 
     
 
     </div>
     {/* <animated.div
  style={{
    width: 100,
    height: 80,
    borderRadius: 8,

    color:'white',
    ...springs,
  }}
>
  <p>since 2000</p>
</animated.div> */}
 
   
</div>
  
  </div>
    </>
   
  )
}

export default Main