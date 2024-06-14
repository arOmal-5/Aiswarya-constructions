'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import logo from '../../public/logo.png'
import img from '../../public/Assets/bg.png'
import './main.css'
import {Pacifico} from "next/font/google";
import { TiThMenu } from "react-icons/ti";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400", // Add the weight specification
  
  
});

const Main = () => {

  const [scrolling, setScrolling] = useState(false);

  const [text, setText] = useState('build');

  const [isChecked, setIsChecked] = useState(false);

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



     <div  style={{backgroundImage:`url(${img.src})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', opacity:'0.9' }}>


<div className={scrolling ? 'navbar-scrolled' : 'navbar'}>
<div>
<Image  src={logo} alt="Image" 
      className="w-20rem  drop-shadow-2xl drop" 
     style={{width:'7rem', opacity:'1'}} />
</div>
<button
        className={`md:hidden block w-8 h-8  rounded-full ${isChecked? 'checked' : ''}`}
        id="toggle"
      >
       <TiThMenu className='text-3xl' />
      </button>

<nav className='w-full'>
     
      <ul
        className={`nav-items md:flex flex-col justify-evenly  w-full  items-center md:flex-row ${isChecked? 'phnnav' : 'hidden'}`}
        id="nav-items"
      >
        <li className="li md:w-auto w-full text-center md:text-left">CONSTRUCTION</li>
        <li className="li md:w-auto w-full text-center md:text-left">REAL ESTATE</li>
        <li className="li md:w-auto w-full text-center md:text-left">ESTIMATE</li>
        <li className="li md:w-auto w-full text-center md:text-left">CONSTRUCTION</li>
        <li className="li md:w-auto w-full text-center md:text-left">SITE SURVEY</li>
      </ul>
    </nav>
</div>

<div className="image-container flex ">
<div className=" flex  gap-3 text-white text-3xl md:text-6xl">
      
      <span 
      className='flex gap-4 font-semibold  font-mono'
      >WE  <p
  
      className={`${pacifico.className} animated-text`}>{text}</p> YOUR HOME
      </span>
 
     
 
     </div>
 
   
</div>
  
  </div>
    </>
   
  )
}

export default Main