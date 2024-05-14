import React from 'react'

import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    const navBar =  ["Shop", "On Sale", "New Arrivals",'Brands']
  return (

  <>
  <div className='h-[60px] flex items-center justify-evenly  w-screen bg-dark-grey  '>
  <div className=' flex justify-center'>
    <p className=' font-bold text-3xl'>
        SHOP.COM
    </p>
    </div>
    <div className="flex justify-center items-center w-2/5 ">
        <ul className=' flex justify-between items-center w-full'>
            {navBar.map((item, index) => (

                <li key={index}><button className=' text-black hover:scale-105 duration-300 '>{item}</button></li>
            ))}
         
        </ul>
    </div>
    <div className=' flex justify-between items-center relative'>
        <input type="text" placeholder="Search for products..." className='border-dark-grey border-solid rounded-lg h-7 bg-white'/>
        <IoIosSearch className=' absolute right-0  text-2xl ' />
        
        </div>

        <div className=' flex justify-between items-center'>
            <IoCartOutline className=' text-3xl'/>
            <FaRegUser className=' text-3xl ml-2'/>

            </div>

  </div>

  </>
  )
}

export default Navbar