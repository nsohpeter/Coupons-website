import React from 'react'
import './Footer.css'

const Footer = () => {
  const date = new Date();
  return (
    <div className='footer'>
  
      <p>Made by group 14: &copy; {date.getFullYear()} - all rights reserved</p>
    </div>
  )
}

export default Footer
