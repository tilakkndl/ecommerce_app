import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";


const Products = ({products, productCategory}) => {



  return(
    <div className=' flex flex-col justify-center items-center'>
      <div className=' text-5xl font-bold font-satoshi mx-auto flex flex-col flex-wrap justify-center items-center my-9'>
     {productCategory}
      </div>
    <div className=' flex flex-row justify-evenly'>
    {products.map(({price, discount, rating, url, name, id}) => {
      
      const discountedPrice = price - (price * discount / 100);
      const  lowerRating = Math.floor(rating)
      const fractionRating = rating - lowerRating;

      return(

    <div className=' flex flex-col  w-fit' key={id}>
      <div className='w-[295px] h-[298] bg-dark-grey flex items-center justify-center rounded-lg overflow-hidden' >

<img src={url} alt="checked shirt" className=' hover:scale-105 duration-300'/>
      </div>
      <p className=' font-medium text-xl font-satoshi'>{name}</p>
    <div className=' flex flex-row my-1'>
      {Array(lowerRating).fill().map((_, i) => (
        <FaStar key={i} className=' text-yellow-400'/>
      ))}
      
     {fractionRating && <FaRegStarHalfStroke className=' text-yellow-400'/>} 
     <p className=' text-xs ml-3'> {rating}/5</p>

    
    </div>
    <div className='flex flex-row items-center'>
    <p className=' font-bold text-xl font-satoshi'> ${discountedPrice? discountedPrice: price}</p>
    {discount && <div className='flex flex-row items-center'>
    <p className='font-medium text-xl font-satoshi line-through text-gray-500 mx-3'>
      ${price}</p> 
    <p className=' font-bold text-md font-satoshi bg-red-200 px-2 py-1 rounded-lg text-red-600'> -{discount}</p>
      </div>}
    </div>
    
    </div>
      )
    })}

  </div>
  <div className=' overflow-hidden'>

    <button className=' py-3 px-5 rounded-xl border-2 border-solid border-green-100 m-4 hover:scale-105 duration-100 mb-6'>
      View All</button>
      </div>
  </div>
  )

  

 }
  
 
   


export default Products