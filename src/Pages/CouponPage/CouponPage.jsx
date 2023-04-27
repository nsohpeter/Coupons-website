import React from 'react'
import './CouponPage.css'
//import Header from '../../Components/Header/Header'
import Left from '../../Components/Left/Icons'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import Footer from '../../Components/Footer/Footer'
import Coupons from '../../Components/Coupons/Coupons'

const CouponPage = () => {
  return (
    <div className='couponPage'>
      <div className='couponPage-content'>
       <Coupons />
      </div>

    </div>
  )
}

export default CouponPage