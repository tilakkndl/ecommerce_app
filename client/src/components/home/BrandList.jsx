import React from 'react'
import zara from "../../assets/images/home/brands/zara.png"
import calvin from "../../assets/images/home/brands/calvin.png"
import gucci from "../../assets/images/home/brands/gucci.png"
import parada from "../../assets/images/home/brands/parada.png"
import versace from "../../assets/images/home/brands/versace.png"


const BrandList = () => {
    const brands= [zara, calvin, gucci, parada, versace]
  return (
   <>
   <div className=' w-screen h-[100px] bg-black text-white flex justify-evenly'>

    {brands.map((brand, index) =>{
        return(<div key={index} className=' flex flex-col justify-center items-center'>
           <img src={brand} alt="brand" />
        </div>)
    })}

   </div>
   </>
  )
}

export default BrandList