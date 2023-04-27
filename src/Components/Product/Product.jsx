import React from 'react'
import './Product.css';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
//import { productData } from '../../productsData';
import { addToCart } from '../../Features/Cart/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
 let {productList} = useSelector((state) =>state.Sidebar)
 const dispatch = useDispatch()

 const {productId} = useParams();
    const id = Number(productId)
    const product = productList.find((item) => item.id === id)

const handleAdd = (product) =>{
   const cartItem = {
      id: product.id,
      img: product.img,
      title:product.title,
      price: product.price,
      amount: 1,
    };
  
  dispatch(addToCart(cartItem))
}
   
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
  if(!product){
    return(
     <div>loading....</div>
    );
  }
  return (
    <div className='single-product'>
      <div className="product-image-container">
        <img src={product.img} alt={product.title}  className='product-image'/>
         <button className=" single-add-to-cart" onClick={()=> handleAdd(product)}>
            <ShoppingCartIcon />
            add to cart
            </button>
      </div>
     <div className="left-side">
        <h1 className='title'>{product.title}</h1>
        <p>{product.disc}</p>

        <div className='percentage-off'>
            <span style={{textDecoration:"line-through"}}>Gh{product.old_price}</span>
            <span>Gh{product.price}</span>
            <span>%{product.percentage_off} off</span>
        </div>
        <div className="reviews">
            <span>{getStarIcons(product.rating)}</span>
            <span>{product.reviews} reviews</span>
        </div>

        <button className='add-cart' onClick={()=> handleAdd(product)}>add to cart</button>
     </div>

    </div>
  )
}

export default Product
