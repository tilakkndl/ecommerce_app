import React from 'react'

import { FaStar } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const CustomerReviews = ({customerReviews}) => {
  return (
    <>
    <p className=' font-medium text-4xl mx-0 my-4 '>OUR HAPPY CUSTOMERS</p>
    

    <div className=' flex flex-row justify-evenly items-center flex-wrap'>
    {customerReviews.map(({rating, userName, comment}) => (
        <>
        <div className=' flex flex-col border-1 border-solid border-gray-600 w-[400px] h-[200px] justify-center  bg-gray-100 rounded-xl p-4 mb-3'>
           <div className=' flex flex-row justify-start mb-2'>
          {Array(rating).fill().map((_, i) => (
               <FaStar key={i} className=' text-yellow-400 mr-2'/>
          ))}
   </div>
   <div className=' flex justify-start items-center mb-4'>

   <p className=' font-bold text-lg mr-2'>{userName}</p>
   <RiVerifiedBadgeFill className=' text-green-600'/>
   </div>
   <p className=' font-medium text-base'>{comment.substring(0,160)}</p>

   </div>
     
   </>
    ))}
    </div>
 

    </>
  )
}

export default CustomerReviews