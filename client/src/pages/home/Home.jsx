import React from 'react'
import LandingSection from '../../components/home/LandingSection'
import BrandList from '../../components/home/BrandList'
import Products from '../../components/home/Products'

import checkShirt from '../../assets/images/home/clothes/tshirt.png'
import newArrival2 from '../../assets/images/home/clothes/Frame 32.png'
import newArrival3 from '../../assets/images/home/clothes/Frame 33.png'
import newArrival4 from '../../assets/images/home/clothes/Frame 38.png'
import BrowseByStyle from '../../components/home/BrowseByStyle'
import CustomerReviews from '../../components/home/CustomerReviews'
import NewsLetterSubscribe from '../../components/home/NewsLetterSubscribe'

const data = [{
  rating: 4.5,
  price: 260,
  discount: 20,
  url: checkShirt,
  id: "1893y5",
  name: "Checked Shirt"
},
{
  rating: 4.5,
  price: 210,
  
  url: newArrival2,
  id: "1893y6alksdj",
  name: "T-SHIRT WITH TAPE DETAILS"
},
{
  rating: 4.5,
  price: 260,
  discount: 20,
  url: newArrival3,
  id: "alsdkjoiew",
  name: "SKINNY FIT JEANS"
},
{
  rating: 4.5,
  price: 255,
  url: newArrival4,
  id: "laksdjoiej",
  name: "SLEEVE STRIPED T-SHIRT"
},
]

const customerReviews = [
 
  {
    rating: 5,
    userName: "John Doe",
    comment: "I love the quality of the clothes. The delivery was also very fast. I will definitely buy more"
  },
  {
    rating: 4,
    userName: "Santosh Poudel",
    comment: "The clothes are very comfortable. I will definitely buy more. The system is so easy to use"
  },
  {
    rating: 4,
    userName: "Tilak Kandel",
    comment: "The clothes are very comfortable. I will definitely buy more. It was fun shopping here"
  },
 
  
]

  




const Home = () => {
  return (
    <>
   
    <LandingSection/>
    <BrandList/>
    <Products products={data} productCategory="New Arrival"/>
    <Products products={data} productCategory="Top Selling"/>
    <BrowseByStyle/>
    <CustomerReviews customerReviews={customerReviews}/>

    <NewsLetterSubscribe/>



    
    </>
  )
}

export default Home