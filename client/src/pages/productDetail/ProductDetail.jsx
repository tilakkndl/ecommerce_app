import React from 'react'

import  ProductClassification  from './../../components/productDetail/productClassification'
import Detail from '../../components/productDetail/Detail'

const ProductDetail = () => {
  return (
    <>
    <ProductClassification gender="male" productName="T-shirt"/>
    <Detail price={1000} discount={10} rating={4.5} url="https://www.google.com" name="T-shirt" id={1}/>
    
    </>
  )
}

export default ProductDetail