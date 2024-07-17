"use client"

import React, { useState } from 'react'
import './Part3.css'
import Image from 'next/image';
import img1 from '../../public/projects/project-1.jpg'
import img2 from '../../public/projects/project-2.jpg'
import img3 from '../../public/projects/project-3.jpg'
import img4 from '../../public/projects/project-4.jpg'
import img5 from '../../public/projects/project-5.jpg'
import img9 from '../../public/projects/project-9.jpg'
import img7 from '../../public/projects/project-7.jpg'
import img10 from '../../public/projects/project-10.jpg'
import img11 from '../../public/projects/project-11.jpg'

import prjct21 from '../../public/projects/project-2.1.jpg'
import prjct22 from '../../public/projects/project-2.2.jpg'
import prjct23 from '../../public/projects/project-2.3.jpg'
import prjct24 from '../../public/projects/project-2.4.jpg'
import prjct25 from '../../public/projects/project-2.5.jpg'
import prjct26 from '../../public/projects/project-2.6.jpg'




const Part3 = () => {


    const [mainImage, setMainImage] = useState(prjct24);


  return (
    <div className='w-full flex-col justify-center items-center mt-5'>

    
{/* 
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <Image src={img1} alt="" className="h-auto max-w-full rounded-lg" />
        </div>
        <div>
          <Image src={img9} alt="" className="h-auto max-w-full rounded-lg" />
        </div>
        <div>
          <Image src={img9} alt="" className="h-auto max-w-full rounded-lg" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image src={img9} alt="" className="h-auto max-w-full rounded-lg" />
        </div>
        <div>
          <Image src={img5} alt="" className="h-auto max-w-full rounded-lg" />
        </div>
        <div>
          <Image src={img9} alt="" className="h-auto max-w-full rounded-lg" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image src={img7} alt="" className="h-auto max-w-full rounded-lg" />
        </div>
        <div>
          <Image src={img10} alt="" className="h-auto max-w-full rounded-lg" />
        </div>
        <div>
          <Image src={img11} alt="" className="h-auto max-w-full rounded-lg" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image src={img1} alt="" className="h-auto max-w-full rounded-lg" />
        </div>
        <div>
          <Image src={img1} alt="" className="h-auto max-w-full rounded-lg" />
        </div>
        <div>
          <Image src={img1} alt="" className="h-auto max-w-full rounded-lg" />
        </div>
      </div>
    </div> */}



    
        

  <div className='md:w-3/4 mx-2 flex flex-col justify-center items-center md:mx-auto gap-4'>

  <h6 className='heading'>OUR LATEST VENTURES</h6>
  <div className="grid gap-4 w-full">
      <div>
        <Image src={mainImage} alt="" className="h-auto max-w-full rounded-lg transition duration-500 ease-in-out" />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div>
          <Image src={prjct22}
          onClick={() => setMainImage(prjct22)}
          alt="" className="h-auto max-w-full rounded-lg cursor-pointer" />
        </div>
        <div>
          <Image src={prjct23}
          onClick={() => setMainImage(prjct23)}
          alt="" className="h-auto max-w-full rounded-lg cursor-pointer" />
        </div>
        <div>
          <Image src={prjct24}
          onClick={() => setMainImage(prjct21)}
          alt="" className="h-auto max-w-full rounded-lg cursor-pointer" />
        </div>
        <div>
          <Image src={prjct25}
          onClick={() => setMainImage(prjct25)}
          alt="" className="h-auto max-w-full rounded-lg cursor-pointer" />
        </div>
        <div>
          <Image src={prjct26} 
          onClick={() => setMainImage(prjct26)}
          alt="" className="h-auto max-w-full rounded-lg cursor-pointer" />
        </div>
      </div>
    </div>
  </div>



    </div>
  )
}

export default Part3