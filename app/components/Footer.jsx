"use client"

import React, { useState } from 'react'
import './footer.css'
import watspicon from '../../public/Assets/whatsappicon.svg'
import instagramicon from '../../public/Assets/instagram.svg'
import Image from 'next/image'
import logo from '../../public/logo.png'
import axios from 'axios'




const Footer = () => {

  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    message: ''
  });


  const SERVER_REMOTE ="https://aiswarya-server-node.onrender.com"
  const SERVER_LOCAL ="http://localhost:3001"

  const whatsAppNumber = '9633985683'; // Replace with your WhatsApp number in international format
  const message1 = 'Hello, I would like to chat with you on WhatsApp!'; // Replace with your desired message


  const instagramHandle = 'aiswarya_constructions' //insta id
  const message2 = 'Hello, I would like to chat with you on Instagram!'; // Replace with your desired message

  const instagramLink = `https://instagram.com/${instagramHandle}/?utm_medium=copy_link&text=${encodeURIComponent(message2)}`;

  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message1)}`;


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post(`${SERVER_REMOTE}/api/messages`, formData);

      if (response.status === 201) {
        // Handle success
        alert('Form submitted successfully');
        // Optionally, clear the form
        setFormData({ name: '', contactNo: '', message: '' });
      } else {
        // Handle error
        console.log({message:'Error submitting form',response});
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };
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

   <div className='flex justify-center gap-2 items-center'>
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

   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.10818040469906!2d77.00219136809264!3d8.60891508614461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b8068ee6acc3%3A0x59f20d40587b3890!2sAiswarya%20Constructions!5e0!3m2!1sen!2sin!4v1718369697369!5m2!1sen!2sin"
    width="350" 
    height="150"
     allowfullscreen="" 
  className='border rounded-2xl'
     loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    
       
        </div>


        <div className=' md:w-2/6 px-4 md:px-0'>
       

        <div class="form bg-white text-xs md:w-5/6 ">
       <p className='py-2'> Have Questions? We'd love to help!</p>
       <form onSubmit={handleSubmit}>
      <div className='flex gap-2'>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Martin"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="contactNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
          <input
            type="number"
            id="contactNo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+91 6238739229"
            required
            value={formData.contactNo}
            onChange={handleChange}
          />
        </div>
      </div>
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a comment..."
        value={formData.message}
        onChange={handleChange}
      />
      <button className="letstalkbtn" type="submit">Let's Talk</button>
    </form>
</div>

      
        </div>
      </div>

  <div className='copyright text-center'>
  <p>
      © 2024 Aiswarya constructions, Privacy policy, Terms & Conditions
      </p>
    {/* <p>Construction Website Design by Aromal</p> */}
  </div>
      </div>

    



    </>
  )
}

export default Footer