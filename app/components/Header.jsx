'use client';


import React, { useEffect, useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import logo from '../../public/logo.png'
import Image from 'next/image';
import  './header.css'
import { FaHome } from "react-icons/fa";
import { motion, useScroll } from "framer-motion"


 

const Header = () => {

  const [showModal, setShowModal] = useState(false)

  const [isChecked, setIsChecked] = useState(false);

  const [scrolling, setScrolling] = useState(false);


  const { scrollYProgress } = useScroll();

 


    useEffect(() => {
    const toggleButton = document.getElementById('toggle');
    toggleButton.addEventListener('click', () => {
      setIsChecked(!isChecked);
    });
  }, [isChecked]);



    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleModalShow =() => {
    setShowModal(!showModal)
  }

  const handleModalClose =() => {
    setShowModal(false)
  }


  return (
        
    
    <>

<div className='sticky top-0 z-10' >

  





  <div className= 'navbar'>
<div className='sm:flex flex  w-full justify-between px-10 items-center'>

<button
onClick={handleModalShow}
className='signupinbtn gap-5 justify-center items-center hidden sm:flex'>
<FaHome/> 
      <p> SIGN IN / SIGN UP</p>
     </button>
{
  showModal && (
    

<div id="authentication-modal" tabindex="-1" aria-hidden="true" className="overflow-hidden signup-modal overflow-y-auto overflow-x-hidden fixed right-0 left-72 z-50 flex justify-center items-center w-full md:inset-0">
    <div class="relative w-full max-w-md max-h-full">
      
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className='w-full flex'>
        <button
                onClick={handleModalClose}
                type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 ms-auto inline-flex justify-end w-6 pe-2 items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
    
                </button>
        </div>
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between px-3 border-b rounded-t dark:border-gray-600">
                <h6 class="textarea text-center font-semibold text-gray-900 dark:text-white">
                REGISTER FOR AN ACCOUNT TO CREATE A PERSONALIZED SEARCH PROFILE.
                SAVE YOUR SEARCHES, RECEIVE PERSONALIZED RECOMMENDATIONS, AND MORE
                </h6>
               
            </div>
            {/* <!-- Modal body --> */}
           
           <div className='w-full flex px-2 '>

          <div className='w-1/2 flex flex-col items-center '>
          <h6>LOGIN</h6>
          <div class="p-1 md:p-2 flex flex-col justify-between gap-4">
                <form class="space-y-4" action="#">
                    <div>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div class="flex justify-between">
                       
                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SIGN IN</button>
                  
                </form>
                <button type="button" class="py-2.5 w-full px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADMIN PANEL</button>
            </div>

            

          </div>

          <div className='w-1/2 flex flex-col items-center justify-center'>
          <h6>REGISTER</h6>
          <div class="p-4 md:p-2">
                <form class="space-y-4" action="#">
                    <div className='flex flex-col gap-1'>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="email" required />
                        <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="firstname" required />
                        <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="lastname" required />
                        <input type="password" name="password" id="password" placeholder="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        <input type="password" name="password" id="password" placeholder="confirm password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="how much is 2+3 ?" required />
                    </div>

                 
                    <div class="flex justify-between">
                      
                     
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SIGN UP</button>
                   
                </form>
            </div>
          </div>


           </div>
        </div>
    </div>
</div> 

  )
}




<Image  src={logo} alt="Image" 
      className="w-20rem  drop-shadow-2xl drop p-4" 
     style={{width:'7rem', opacity:'1'}} />

     <div className='gap-5 hidden sm:flex'>
      <p>ABOUT</p>
      <p>BLOG</p>
     </div>

<button
        className={`md:hidden block w-8 h-3   rounded-full ${isChecked? 'checked' : ''}`}
        id="toggle"
      >
       <TiThMenu className='text-3xl' />
      </button>
</div>


<nav className='w-full'>
     
      <ul
        className={`nav-items md:flex  justify-around  w-full p-0 my-3 sm:my-0 sm:p-4 items-center md:flex-row  ${isChecked? 'phnnav' : 'hidden'}`}
        id="nav-items"
      >
        <li className="li md:w-auto w-full text-center md:text-left ">CONSTRUCTION</li>
        <li className="li md:w-auto w-full text-center md:text-left">REAL ESTATE</li>
        <li className="li md:w-auto w-full text-center md:text-left">ESTIMATE</li>
        <li className="li md:w-auto w-full text-center md:text-left">CONSTRUCTION</li>
        <li className="li md:w-auto w-full text-center md:text-left">SITE SURVEY</li>
      </ul>
    </nav>
</div>

    </div>


    </>
  )
}

export default Header