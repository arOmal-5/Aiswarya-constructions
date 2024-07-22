"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {


  const router = useRouter();
  
  return (
    <>




<div className='flex flex-col justify-center items-center'>
<h1 className='my-5'>WELCOME TO ADMIN PANEL</h1>

{/*enquiry messages */}
<div>



<button
onClick={() => router.push('/admin-panel/Messages')}
type="button" class="px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg class="w-4 h-4 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
</svg>
Enquiry Messages
</button>

</div>



</div>




    </>
  )
}

export default page