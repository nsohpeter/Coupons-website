import React from 'react'
import './Header.css';
import Navbar from '../Navbar/Navbar';
import Left from '../Left/Icons'
//import Right from '../Right/Category'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import Small from '../SmallScreen/Small';
import Sidebar from '../Sidebar/Sidebar';

import { Link } from 'react-router-dom';
import Category from '../Right/Category';

const Header = () => {
  
  return (
    <div className='header'>
      <Sidebar />
      <div className="small-screen">
        <Small />
      </div>
      <div className ="top-nav">
     <Navbar  />
      </div>
     <div className="sub-links">
        <div className="search">
          <input type="text" placeholder='Search Coupon' />
          <SearchOutlinedIcon />
        </div>
       <Left /> 
     </div>
        <div className='sub-nav-contaier'>
          <ul className='sub-menus'>
            <Category />
              <Link to= "/coupons">
                <li>top Coupons</li>
              </Link>
               
          </ul>
    </div>
     
    </div>
  )
}

export default Header
