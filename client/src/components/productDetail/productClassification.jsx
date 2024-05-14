import React from 'react'

import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const productClassification = ({gender, productName}) => {
  return (
   <>
<div className=' flex flex-row justify-start items-center'>
    <Link to='/' className='text-base'>

    <h1 className='  text-base'>Home</h1>
    </Link>
    <IoIosArrowForward className=' ml-2'/>
    <h1 className='  text-base'>Shop</h1>
    <IoIosArrowForward className=' ml-2'/>
    <h1 className='  text-base'>{gender}</h1>
    <IoIosArrowForward className=' ml-2'/>
    <h1 className='  text-base'>{productName}</h1>
</div>
   </>
  )
}

export default productClassification