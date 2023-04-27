import React, {useState} from 'react'
import './Modal.css'

import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { closeModal } from '../../Features/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';

const Modal = ({product}) => {
  
   const {isModalOpen} = useSelector((store) => store.Sidebar)
  
   const dispatch = useDispatch();
 const [couponCode, setCouponCode] = useState(product.coupon_code);
 console.log(couponCode)

   const handleCopy = () => {
    navigator.clipboard.writeText(couponCode)
      .then(() => {
        alert('Coupon code copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy coupon code: ', error);
      });
  };
  return (
     <div className={`${isModalOpen ? 'modal show' :'modal'}`}>
        <div  className='modal-content'>
            <a href="#" className="close" onClick={()=>dispatch(closeModal())} >
               <button className='close-btn'>
                  <CloseIcon />
               </button>
            </a>

           <div className="top">
            <img src={product. img} alt={product.title} />
             <h2>{product.title}</h2>

           </div>

            <p>{product.type}</p>

            <div className="codeCopy-container">
              <div className="copy">
               <span>
                  <ContentCopyOutlinedIcon />
               </span>
                <p>{product.coupon_code}</p>
              </div>
              <button onClick={handleCopy}>Copy & Apply</button>
            </div>
          <footer>
            <div className="text">
               <h1>never struggle for coupons again!</h1>
               <p>
                our website brings to all coupons to your door step.
                </p>
            </div>
             <img src="./images/couponFooter-2.svg" alt="" />
          </footer>
           
        </div>
    </div>
  )
}

export default Modal
