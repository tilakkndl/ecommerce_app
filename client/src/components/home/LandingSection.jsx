import React from 'react'

import LandingPhoto from '../../assets/images/home/landing.png'


const LandingSection = () => {
  return (
    <>
     <div className='flex w-full box-border overflow-hidden '>
        <div className='flex flex-col justify-start  w-1/2 overflow-hidden ml-[65px]'>
            <div className='flex flex-col justify-start  text-[64px] font-extrabold tracking-tighter leading-[50px] font-integer my-8 mt-16'>
<h1>FIND CLOTHES</h1>
<h1>THAT FITS</h1>
<h1>YOUR STYLE</h1>
            </div>
            <p className=' font-satoshi text-base mb-8'>
                Browse throught our diverse range of meticulously crafted garments, designed to bring out your individulaity and cater your sense style             </p>
            <button className=' bg-black w-[210px] h-[52px] text-white rounded-2xl mb-8'>Shop Now</button>
            <div className=' flex justify-between'>
                <div className=' flex flex-col font-satoshi border-r-2 border-gray-300  pr-7'>
<p className=' font-bold text-4xl '>200+</p>
<p className=' text-base'>International Brands</p>
                </div>

                <div className=' flex flex-col font-satoshi border-r-2 border-gray-300 pr-7' >
<p className=' font-bold text-4xl '>20000000+</p>
<p className=' text-base'>International Brands</p>
                </div>

                <div className=' flex flex-col font-satoshi'>
<p className=' font-bold text-4xl '>200+</p>
<p className=' text-base'>International Brands</p>
                </div>

            </div>
        </div>
     
        <div className='w-1/2 overflow-hidden' >
            <img src={LandingPhoto} alt="Landing" className=' w-full h-full'/>
        </div>
     </div>
    </>
  )
}

export default LandingSection