'use client';

import Image from 'next/image';
import React from 'react';
import btn5 from '../../public/Assets/btn5.png';
import './part1.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


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

        <ul className="flex flex-col gap-4 md:gap-0 justify-evenly md:flex-row">
          <li className="li-1">CONSTRUCTION</li>
          <li className="li-2">REAL ESTATE</li>
          <li className="li-3">ESTIMATE</li>
          <li className="li-4">BUILDING PLAN</li>
          <li className="li-5">SITE SURVEY</li>
        </ul>
      </div>
    </div>
  );
};

export default Part1;