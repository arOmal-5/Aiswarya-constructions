'use client';

import Image from 'next/image';
import React from 'react';
import btn5 from '../../public/Assets/btn5.png';
import './part1.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";



const Part1 = () => {
  const pathname = usePathname();

  return (
    <div className="container flex flex-col justify-center items-center">
      <div className="nextmove flex flex-col gap-4 justify-center items-center mt-10">
        <h1 className="md:text-2xl">WHAT'S YOUR NEXT MOVE?</h1>
        <Link
          href="/featured-listing"
          className={`btn-1 flex justify-center items-center p-2 ${pathname === '/'? 'link active' : 'link'}`}
          style={{
            backgroundImage: `url(${btn5.src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            opacity: 0.9,
          }}
        >
          <h1>VIEW OUR FEATURED LISTING</h1>
        </Link>

        <ul
        
        className="flex flex-col gap-4 md:gap-0 justify-evenly md:flex-row">
          <motion.li
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 1.1, ease: "easeInOut" }}
          transition={{ type: "spring", stiffness: 100 }}
           className="li-1">CONSTRUCTION</motion.li>


          <motion.li
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 , duration:'0.9'}}
          className="li-2">REAL ESTATE</motion.li>


          <motion.li
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 , duration:'0.9'}}
          className="li-3">ESTIMATE</motion.li>


          <motion.li
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="li-4">BUILDING PLAN</motion.li>


          <motion.li
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="li-5">SITE SURVEY</motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Part1;