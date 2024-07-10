 "use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png'
import watspicon from '../../public/Assets/whatsappicon.svg'
import { AnimatePresence, motion } from 'framer-motion';

const Part2 = () => {


  const [showToast, setShowToast] = useState(false);


  const whatsAppNumber = '9633985683'; // Replace with your WhatsApp number in international format
  const message1 = 'Hello, I would like to chat with you on WhatsApp!'; // Replace with your desired message

  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message1)}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  return (
    <>
    <AnimatePresence></AnimatePresence>
    
{
  showToast && (    
  <div 
  style={{
    position: 'fixed',
    top: '12rem',
    marginLeft: '1rem',
    zIndex: 1,
    opacity: showToast? 1 : 0, // toggle opacity
    transform: showToast? 'translateY(0)' : 'translateY(-10px)', // toggle translate
    transition: 'opacity 0.5s, transform 0.5s' // transition effect
  }}
  id="toast-notification" className={`w-full  top-0 max-w-xs p-2 text-white bg-black rounded-lg shadow dark:bg-gray-950 dark:text-gray-300 ${showToast? 'how' : ''}`} role="alert">
    <div class="flex items-center mb-3">
        <span class="mb-1 text-sm font-semibold text-white dark:text-white">New notification</span>
        <button
        onClick={() => setShowToast(false)}
         type="button" class="ms-auto -mx-1 -my-1.5  justify-center items-center flex-shrink-0 text-white hover:text-red-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>
    <div class="flex ">
        <div class="relative inline-block shrink-0">
            <Image src={logo} className='w-10'/>
           
        
        </div>
        <div class="ms-3 text-sm font-normal">
          
            <div class="text-sm font-normal">Your dream project is ready 
              <br />
              Sounds good right !</div> 
            <span class="text-xs font-medium flex justify-center items-center text-blue-600 dark:text-blue-500">
              Just ping us
              <a href={whatsAppLink}
             target="_blank" rel="noopener noreferrer">
      <button className="text-white font-bold py-2 px-4 rounded">
        <Image src={watspicon} className='w-6'/>
       
      </button>
    </a>
              </span>   
        </div>
    </div>
</div>)
}
    
    
    </>
  );
}

export default Part2;
