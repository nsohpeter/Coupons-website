import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ProductList from '../../Components/ProductList/ProductList'
import Footer from '../../Components/Footer/Footer'
//import Slider from '../../Components/Slider/Slider'

// import { useSelector } from 'react-redux';
// import Modal from '../../Components/Modal/Modal'

const Home = () => {

  //const {isModalOpen} = useSelector((store) => store.Sidebar)
  
  return (
    <div className='main-home'>
  
     <div className="home-body">
       <h3 style={{textAlign:"center"}}>Trending coupons ....</h3>
      <ProductList />
     </div>
    </div>
  )
}

export default Home