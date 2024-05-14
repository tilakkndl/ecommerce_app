import React from 'react'

const NewsLetterSubscribe = () => {
  return (
   <>
   <div className='  bg-black text-white flex flex-row justify-center items-center'>
    <div className=' w-3/5 font-integer h-24 text-3xl flex flex-col items-start justify-center font-bold'>
<p className=' '>STAY UPTO DATE ABOUT </p> 
<p> OUR LATEST OFFERS
    </p> 
    </div>
    <div className=' flex flex-col justify-center items-center'>
        <input type="text" placeholder=' Enter your mail'  className=' h-10 w-80 rounded-lg mb-2'/>
        <button className='h-10 w-80 rounded-lg bg-white text-black font-bold'> Subscribe to Newsletter</button>
        </div>

   </div>
   </>
  )
}

export default NewsLetterSubscribe