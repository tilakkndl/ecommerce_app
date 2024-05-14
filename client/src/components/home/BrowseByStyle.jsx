import React from 'react'

import casualImg from '../../assets/images/home/styleCategory/Frame 61.png'
import formalImg from '../../assets/images/home/styleCategory/Frame 62.png'
import GYMImg from '../../assets/images/home/styleCategory/Frame 63.png'
import PartysImg from '../../assets/images/home/styleCategory/Frame 64.png'  

const BrowseByStyle = () => {
  return (
    <>
    <div className=' flex flex-col justify-center items-center my-7 bg-dark-grey'>
        <p className=' text-4xl font-bold font-integer my-12'>BROWSE BY dress STYLE</p>
        <div className=' grid grid-cols-3 ml-20 gap-3'>
            <div >
                <img src={casualImg} alt="casual style" className=' hover:scale-105 overflow-hidden duration-300'/>
            </div>
           
            <div className=' col-span-2' >
                <img src={formalImg} alt="formal style" className='hover:scale-105 overflow-hidden duration-300'/>
            </div>
            <div></div>
        </div>


        <div className=' grid grid-cols-3 ml-20 gap-3'>
            <div >
                <img src={GYMImg} alt="GYM style" className=' hover:scale-105 overflow-hidden duration-300 '/>
            </div>
      
            
            <div className=' col-span-2'>
                <img src={PartysImg} alt="Party style" className='hover:scale-105 overflow-hidden duration-300'/>
                
            </div>
            <div></div>

        </div>
    </div>
    </>
  )
}

export default BrowseByStyle