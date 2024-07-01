'use client';


import React, { useEffect, useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import logo from '../../public/logo.png'
import Image from 'next/image';
import  './header.css'
 

const Header = () => {


  const [isChecked, setIsChecked] = useState(false);

  const [scrolling, setScrolling] = useState(false);


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


  return (
        
    
    <>

<div className='sticky top-0 z-10' >


  <div className= 'navbar'>
<div className='sm:flex-col flex w-full justify-evenly items-center'>
<Image  src={logo} alt="Image" 
      className="w-20rem  drop-shadow-2xl drop p-4" 
     style={{width:'7rem', opacity:'1'}} />

<button
        className={`md:hidden block w-8 h-3   rounded-full ${isChecked? 'checked' : ''}`}
        id="toggle"
      >
       <TiThMenu className='text-3xl' />
      </button>
</div>


<nav className='w-full'>
     
      <ul
        className={`nav-items md:flex  justify-evenly  w-full p-0 my-3 sm:my-0 sm:p-4 items-center md:flex-row  ${isChecked? 'phnnav' : 'hidden'}`}
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