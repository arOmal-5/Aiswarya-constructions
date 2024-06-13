import Image from 'next/image'
import React from 'react'
import btn5 from '../../public/Assets/btn5.png'
import './part1.css'

const Part1 = () => {
  return (
    <>


    <div className=''>

        <div className='nextmove flex mt-10 flex-col gap-4 justify-center items-center'>
        <h1 className='md:text-2xl'>WHAT'S YOUR NEXT MOVE ?</h1>
        <div
        className='btn-1 flex justify-center items-center p-2 '
         style={{backgroundImage:`url(${btn5.src})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', opacity:'09',}}>
           <h1>VIEW OUT FEAUTURED LISTING</h1> 


        </div>

        <ul className='flex flex-col gap-4 md:gap-0  justify-evenly md:flex-row '>
            <li className='li-1'>CONSTRUCTION</li>
            <li className='li-2'>REAL ESTATE</li>
            <li className='li-3'>ESTIMATE</li>   
            <li className='li-4'>BUILDING PLAN</li>
        <li className='li-5'>SITE SURVEY</li>  
        </ul>

  

        
        </div>
    </div>


    </>
  )
}

export default Part1