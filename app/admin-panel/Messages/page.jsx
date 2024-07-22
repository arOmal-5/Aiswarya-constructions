"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import avatarImg from '../../../public/Assets/avatar.png'

const Page = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="flex w-full justify-center items-center p-4">
      <div className="w-full max-w-md">
        <h1 className="my-5 text-xl font-bold text-center">WELCOME TO ADMIN PANEL</h1>
        {messages.length > 0 ? (
          <div className="flex overflow-x-auto w-full">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              {messages.map((message) => (
                <div>
                        <li key={message.id} className="py-3 sm:py-4">
                  <div className="flex items-center w-full">
                    <div className="flex mb-4  md:mb-0">
                      <Image
                        className="w-16 h-16 rounded-full"
                        src={avatarImg}
                        width={64}
                        height={64}
                        alt="Avatar"
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{message.name}</p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">{message.contactNo}</p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">{message.message}</p>
                    </div>
                  </div>
                </li>
                </div>
                
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-center text-gray-500">No messages available.</p>
        )}
      </div>
    </div>
  )
}

export default Page;
