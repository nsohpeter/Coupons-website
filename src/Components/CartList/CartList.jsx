import React from 'react'
import './CartList.css'
import { removeItem,increase, decrease } from '../../Features/Cart/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

const CartList = ({id, title, price, img,amount}) => {
  

  //console.log(useSelector((state) => state.Cart))  
  const dispatch = useDispatch();
  
  return (
   <div className='cart-item'>
      <img src={img} alt={title} />
      <div className='menu'>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => dispatch(increase({id}))} >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => {
           if(amount === 1){
             dispatch(removeItem(id))
             return
            }
              dispatch(decrease({id}))
      
          }}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </div>
  )
  
}

export default CartList
