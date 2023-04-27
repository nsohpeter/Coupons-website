import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './index.css';

import Home from './Pages/Home/Home'
import SignIn from './Pages/SignIn/SignIn'
import Signup from './Pages/Signup/Signup'
import Products from './Pages/Products/Products'
import SingleProduct from './Pages/SingleProduct/SingleProduct'
import NewProduct from './Pages/New/NewProduct'
import CartPage from './Pages/Cart/CartPage';

import { CalculateTotals } from './Features/Cart/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Components/Modal/Modal';
import CouponPage from './Pages/CouponPage/CouponPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {

   const {CartItems} = useSelector((state) => state.Cart)
   
  const dispatch = useDispatch();
  useEffect(()=>{ 
    dispatch(CalculateTotals())
  }, [CartItems])

  return (
    <div className="App">
      <Router>
       <Header />
          <Routes>
            <Route path='/'>
             <Route index element = {<Home/>}/> 
             <Route path='login' element = {<SignIn/>}/> 
             <Route path='register' element = {<Signup/>}/> 
             <Route path='cart' element ={<CartPage/>}/>
             <Route path='coupons' element ={<CouponPage/>}/>
            </Route>
            <Route path='products'>
             <Route index element = {<Products/>}/> 
             <Route path=':productId' element = {<SingleProduct/>}/> 
             <Route path='new' element = {<NewProduct/>}/> 
            </Route>
             
          </Routes>
     
        <Footer /> 
       </Router>
    </div>
  )
}

export default App
