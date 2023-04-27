import React from 'react'
import './Cart.css'


import CartList from '../CartList/CartList'
import { ClearCart } from '../../Features/Cart/CartSlice'
import { useDispatch, useSelector } from 'react-redux'


//import { CartItems } from '../../productsData'
//import CartNav from '../CartNav/CartNav'

const Cart = () => {
 const  { amount, CartItems, total } = useSelector((state) => state.Cart)
 
 const dispatch = useDispatch();

 if (amount < 1) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <div className='cart-mainDiv'>
     
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
       <div>
        {CartItems.map((item) => {
          return <div  key={item.id}>
            <CartList  {...item} />
             <hr />
            </div> 
        })}
      </div>
      {/* cart footer */}
  
      <footer>
       
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className=' clear-btn' onClick={() => dispatch(ClearCart()) }>
          clear cart
        </button>
      </footer>
    </section>
    </div>
  )
}

export default Cart
