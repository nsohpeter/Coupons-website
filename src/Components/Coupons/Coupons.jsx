import React from 'react'
import './Coupons.css'
import { coupons } from '../../productsData'

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

import { openModal } from '../../Features/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Coupons = () => {

const {isModalOpen} = useSelector((store) => store.Sidebar)
const dispatch = useDispatch()
 const [selectedCoupon, setSelectedCoupon] = useState(null);


const handleAdd = (item) =>{
//    const cartItem = {
//       id: item.id,
//       img: item.img,
//       title:item.title,
//       price: item.price,
//       amount: 1,
//     };
  
}

const handleProductClick = (item) => {
    setSelectedCoupon(item);
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
         <div className="card-container">
          {coupons.map((item, index) => {
            const {id,  img, title,  number_used,  rating, coupons, type} = item
            return <div className="card"  key={id}>
              <img src={ img} alt= {title} onClick={() =>handleProductClick(item)} />
               <div className="card-content">
                <h3>{title}</h3>
                <p> used {number_used} times a day</p>
               </div>
                <div className="rating-review">
                  <span>{getStarIcons(rating)}</span>
                   <p>{coupons} coupons</p>
              </div>
               <p className='type'  onClick={() =>handleProductClick(item)}>{type}</p>
            </div>
          })}

          {isModalOpen && (
      <Modal 
      product = {selectedCoupon}
      />
    )}
        </div>
  )
}

export default Coupons