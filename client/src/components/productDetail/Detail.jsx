import React, {useState} from 'react'

import { FaStar } from "react-icons/fa6";   
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";


const frontTshirt = require("../../assets/images/productDetail/front_tshirt.png")
const backTshirt = require("../../assets/images/productDetail/back_tshirt.png")
const fullTshirt = require("../../assets/images/productDetail/full_tshirt.png")

const Detail = ({price, discount, rating, url, name, id}) => {
    const [selectedValue, setSelectedValue] = useState('green');
    const [selectedSize, setSelectedSize] = useState('small');
    const [quantity, setQuantity] = useState(1);


    const discountedPrice = price - (price * discount / 100);
    const  lowerRating = Math.floor(rating)
    const fractionRating = rating - lowerRating;

    // console.log(selectedValue)
    console.log(selectedSize)

    const gettingSelectedSize = (e)=>{
        setSelectedSize(e.target.value)
      console.log(selectedSize)
    }


    const gettingSelectedValue = (e)=>{
        setSelectedValue(e.target.value)
      console.log(selectedValue)
    }

  return (
<>
<div className=' flex flex-row justify-start items-center ml-10'>
    <div className=' flex flex-col overflow-hidden'>
        <img src={frontTshirt} alt="front tshirt" className='w-[152px] h-[167px] m-5'/>
        <img src={backTshirt} alt="back tshirt" className=' w-[152px] h-[167px] m-5'/>
    </div>
    <div className=' flex flex-col overflow-hidden' >
        <img src={fullTshirt} alt="full tshirt"  className=' w-[444px] h-[530px]'/>
        </div>
        <div className=' flex flex-col w-1/2 ml-8 gap-5'>
        <p className=' font-medium text-xl font-satoshi'>{name}</p>
        <div className=' flex flex-col justify-start'>

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
    <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
    <p>Select Colour</p>
    <div className=' flex flex-row justify-start items-center text-white'>
    <label>
  <input type="radio" name="color" value="green" hidden defaultChecked onClick={gettingSelectedValue} className=''/>
  <FaCheck className=' bg-green-500 rounded-xl text-2xl '/>
</label>
<label>
  <input type="radio" name="color" value="red" hidden onClick={gettingSelectedValue}/>
  <FaCheck className=' bg-red-500 rounded-xl text-2xl ml-5'/>
</label>
<label>
  <input type="radio" name="color" value="blue" hidden onClick={gettingSelectedValue}/>
  <FaCheck className=' bg-blue-500 rounded-xl text-2xl ml-5'/>
</label>

    </div>
    <p>Select Size</p>

    <div className=' flex flex-row justify-start items-center text-white font-black'>
    <label>
  <input type="radio" name="size" value="small" hidden defaultChecked onClick={gettingSelectedSize}/>
  <div className={"p-2 text-base rounded-2xl mr-5 bg-" + (selectedSize === "small" ? "black" : "light-grey")}>Small</div>
</label>
<label>
  <input type="radio" name="size" value="medium" hidden onClick={gettingSelectedSize}/>
  <div className={"p-2 text-base rounded-2xl mr-5 bg-" + (selectedSize === "medium" ? "black" : "light-grey")}>Medium</div>
</label>
<label>
  <input type="radio" name="size" value="large" hidden onClick={gettingSelectedSize}/>
  <div className={"p-2 text-base rounded-2xl mr-5 bg-" + (selectedSize === "large" ? "black" : "light-grey")}>Large</div>
</label>

<label>
  <input type="radio" name="size" value="xlarge" hidden onClick={gettingSelectedSize}/>
  <div className={"p-2 text-base rounded-2xl mr-5 bg-" + (selectedSize === "xlarge" ? "black" : "light-grey")}>X-Large</div>
</label>

    </div>

    <div className=' flex flex-row justify-evenly'>
        <div className=' flex flex-row bg-dark-grey'>
<FaPlus className=' text-2xl  text-black p-2 rounded-xl' onClick={(prev)=>setQuantity(prev+1)}/>
<input type="text"  value={quantity}  />
<FaMinus className=' text-2xl  text-black p-2 rounded-xl' onClick={(prev)=>setQuantity(prev-1)}/>
        </div>

    </div>

    </div>
   </div>

</div>
</>
)
}

export default Detail