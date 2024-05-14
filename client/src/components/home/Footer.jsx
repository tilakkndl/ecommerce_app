import React from 'react'

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";



function Footer() {
  return (
   <>
   <div className=' flex flex-col justify-evenly w-screen bg-footer-color'>
    <div className=' flex flex-row w-full  justify-evenly items-center my-9 '>
        <div className=' w-2/6 space-y-15 flex flex-col'>
        <p className=' font-bold text-3xl mb-5'>
        SHOP.COM
    </p>
    <p className=' mb-5'>We have clothes that suits your style and which you are proud to wear. From women to men.</p>
<div className=' flex flex-row justify-start items-center mb-5'>
<FaTwitter className=' text-5xl mr-3 bg-white p-2 rounded-lg'/>
<FaFacebook className=' text-5xl mr-3  bg-white p-2 rounded-lg'/>
<FaInstagram className=' text-5xl mr-3  bg-white p-2 rounded-lg'/>
<FaGithubSquare className=' text-5xl  bg-white p-2 rounded-lg'/>
</div>
        </div>
        <div className=' flex flex-col items-evenly justify-start'>
            <p className=' mb-5'>COMPANY</p>
            <p className=' mb-5'>About</p>
            <p className=' mb-5'>Features</p>
            <p className=' mb-5'>Works</p>
            <p className=' mb-5'>Career</p>
        </div>

        <div>
            <p className=' mb-5'>HELP</p>
            <p className=' mb-5'>Customer Support</p>
            <p className=' mb-5'>Delivery Details</p>
            <p className=' mb-5'>Terms & Conditions</p>
            <p className=' mb-5'>Privacy Policy</p>
        </div>
        <div>
            <p className=' mb-5'>FAQ</p>
            <p className=' mb-5'>Acoount</p>
            <p className=' mb-5'>Manage Deliveries</p>
            <p className=' mb-5'>Orders</p>
            <p className=' mb-5'>Payements</p>
        </div>
        <div>
            <p className=' mb-5'>RESOURCES</p>
            <p className=' mb-5'>Free eBooks</p>
            <p className=' mb-5'>Development Tutorials</p>
            <p className=' mb-5'>How to - Blog</p>
            <p className=' mb-5'>Youtube Playlist</p>
            </div>
    </div>
    <div className=' flex flex-row justify-between border-t-2 border-solid 
    border-light-grey py-9'>
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className=' flex flex-row justify-start items-center space-x-2'>
<FaTwitter className=' text-3xl mr-4'/>
<FaFacebook className=' text-3xl mr-4'/>
<FaInstagram className=' text-3xl mr-4'/>
<FaGithubSquare className=' text-3xl mr-4'/>

        </div>

    </div>
   </div>
   </>
  )
}

export default Footer