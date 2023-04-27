import React, { useState } from 'react'
import './ProductList.css'
//import { productData } from '../../productsData'
import Modal from '../Modal/Modal';
import {Link} from 'react-router-dom'

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { addToCart } from '../../Features/Cart/CartSlice';
import { openModal } from '../../Features/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';


const ProductList = () => {
const [readMore, setReadMore] = useState(false);
const {productList} = useSelector((state) =>state.Sidebar)

const {isModalOpen} = useSelector((store) => store.Sidebar)
 const [selectedProduct, setSelectedProduct] = useState(null);
   
 const dispatch = useDispatch()

const handleAdd = (item) =>{
   const cartItem = {
      id: item.id,
      img: item.img,
      title:item.title,
      price: item.price,
      amount: 1,
    };
  
  dispatch(addToCart(cartItem))
}

const handleProductClick = (item) => {
    setSelectedProduct(item);
    dispatch(openModal());
  };


function getStarIcons(rating) {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;
    
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }
    
    for (let i = 0; i < halfStars; i++) {
      stars.push(<FaStarHalfAlt key={fullStars + i} />);
    }
    
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={fullStars + halfStars + i} />);
    }
    
    return stars;
  }

  return (
    <div className='main-section'>
    
    <div className='product-center'>

      {productList && productList.map((item) =>(
        <div className='product-list-item' key={item.id}>
         <div className="image-container">
            <img src={item.img} alt={item.title}  className='product-img'/>
               <button className='view-code' onClick={() => handleProductClick(item)}>view coupon code</button>
             <button className="add-to-cart" onClick={  ()=> handleAdd(item)}>
                     {/*  <i class="fa fa-shopping-cart fa-1X"></i> */}
                        add to cart
            </button>
         </div>
         <h4>{item.title}</h4>

          <p className='disc'>{readMore? item.disc: `${item.disc.substring(0, 25)}...`}
           <Link to = {`products/${item.id}`}>
             <button >
              {readMore? 'show less': 'read more'}
              </button>
            </Link>
          </p>
         <div className="coupons-item">
            <span style={{textDecoration:"line-through"}}> Gh{item.old_price}</span>
            <span> Gh{item.price}</span>
            <span>%{item.percentage_off} 0ff</span>
         </div>
         <div className="rating-review">
            <span>{getStarIcons(item.rating)}</span>
               <p>{item.reviews} reviews</p>
         </div>
        </div>
      ))}
    </div>
    {isModalOpen && (
      <Modal 
      product = {selectedProduct}
      />
    )}
    </div>
  )
}

export default ProductList
