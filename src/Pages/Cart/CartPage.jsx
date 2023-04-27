import React from 'react'
import './CartPage.css'

import CartNav from '../../Components/CartNav/CartNav'
import Footer from '../../Components/Footer/Footer'
import Cart from '../../Components/Cart/Cart'


const CartPage = () => {

  return (
    <div className='cart-page'>
     
        <Cart />
       
    </div>
  )
}

export default CartPage;