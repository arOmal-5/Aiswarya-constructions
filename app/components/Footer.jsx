import React from 'react'
import './footer.css'
import watspicon from '../../public/Assets/whatsappicon.svg'
import instagramicon from '../../public/Assets/instagram.svg'
import Image from 'next/image'
import logo from '../../public/logo.png'


const Footer = () => {

  const whatsAppNumber = '9633985683'; // Replace with your WhatsApp number in international format
  const message1 = 'Hello, I would like to chat with you on WhatsApp!'; // Replace with your desired message


  const instagramHandle = 'aiswarya_constructions' //insta id
  const message2 = 'Hello, I would like to chat with you on Instagram!'; // Replace with your desired message

  const instagramLink = `https://instagram.com/${instagramHandle}/?utm_medium=copy_link&text=${encodeURIComponent(message2)}`;

  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message1)}`;
  return (
    <>

      <div className='w-full mt-20 flex flex-col justify-center items-center'>
        
     <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-11/12"></hr>

      <div className='w-full md:flex flex flex-col md:flex-row  gap-10 md:gap-0'>
        
      <div className='address md:w-2/6 text-center'>
      
          <div className='flex flex-col justify-between items-center gap-6 '>
          <Image  src={logo} alt="Image" 
      className="w-20rem  drop-shadow-2xl drop" 
     style={{width:'7rem', opacity:'1'}} />
          <div>
          <p>sathram junction </p>
          <p>nedumangad ,trivandrum</p>
          <p>opposite nedumangad police station</p>
          <p> 695541</p>
          <p>9633985683
          ,9447439742</p>
          </div>
          </div>
        </div>

        <div className='contact md:w-2/6 flex flex-col justify-center items-center'>
          <p>Contact us through</p>

   <div className='flex justify-center items-center'>
   <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
      <button className="text-white font-bold py-2 px-4 rounded">
        <Image src={watspicon}/>
       
      </button>
    </a>

    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
      <button className="text-white font-bold py-2 px-4 rounded">
      <Image src={instagramicon} className='w-8'/>
      </button>
    </a>
   </div>

    
       
        </div>

        <div className=' md:w-2/6 px-4 md:px-0'>
       

        <div class="form bg-white text-xs md:w-5/6 ">
       <p className='py-2'> Have Questions? We'd love to help!</p>
  <form>
    <div className='flex gap-4'>
    <div class="flex flex-col mb-4">
      <label class="mb-2 uppercase font-bold text-base text-grey-darkest" for="first_name"> Name *</label>
      <input class="border py-2 px-3 text-grey-darkest" type="text" name="first_name" id="first_name" required />
    </div>
    <div class="flex flex-col mb-4" >
      <label class="mb-2 uppercase font-bold text-base text-grey-darkest" for="number">Contact no*</label>
      <input class="border py-2 px-3 text-grey-darkest" type="number" name="email" id="email" required />
    </div>
    </div>
   
    <div class="flex flex-col mb-4 ">
      <label class="mb-2 uppercase font-bold text-base text-grey-darkest" for="message">Message *</label>
      <textarea class="border py-2 px-3 text-grey-darkest" name="message" id="message" required></textarea>
    </div>
    <button class="letstalkbtn" type="submit">Let's Talk</button>
  </form>
</div>

        <input type="text" />
        </div>
      </div>

  <div className='copyright text-center'>
  <p>
      © 2024 Aiswarya constructions, Privacy policy, Terms & Conditions
      </p>
    <p>Construction Website Design by Aromal</p>
  </div>
      </div>

    



    </>
  )
}

export default Footer