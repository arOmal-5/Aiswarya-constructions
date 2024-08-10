'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import img from '../../public/Assets/mainbg1.jpg'
import './main.css'
import {Pacifico} from "next/font/google";

import { useSpring, animated } from '@react-spring/web'
import { FloatingWhatsApp } from 'react-floating-whatsapp';


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
     className=' sm:h-screen bg-cover bg-center bg-no-repeat h-96' style={{backgroundImage:`url(${img.src})` }}>





<div className="image-container flex ">
<div className=" flex  gap-10 text-white text-3xl md:text-6xl  -mt-24 ">
      
      <span 
      className='flex gap-4 font-semibold'
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


<div >
<FloatingWhatsApp
        phoneNumber="+9196339 85683"
        accountName="Aiswarya constructions"
        allowEsc
        notification
        notificationSound
        statusMessage="online"
        chatMessage="Hello welcome ! how can i help you ?"
        avatar='https://t4.ftcdn.net/jpg/03/37/70/29/360_F_337702919_7HwBkriEpaiCzWUNnGCVKZhJJFKo7gh4.jpg'
        
      />
</div>

  
  </div>
    </>
   
  )
}

export default Main