import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-contaier'>
       <ul className='links'>
       
        <li>get the coupons app</li>
        <li>my wishlist</li>
        <li>Help</li>
        <Link to= "/register">
        <li>sign up</li>
        </Link>
       </ul>
    </div>
  )
}

export default Navbar
