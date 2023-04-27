import React from 'react'
import './SingleProduct.css'
import Product from '../../Components/Product/Product'

import Left from '../../Components/Left/Icons'
import Header from '../../Components/Header/Header'
const SingleProduct = () => {
  return (
    <div className='single-product-page'>
     <Header />
      <Product />
    </div>
  )
}

export default SingleProduct
