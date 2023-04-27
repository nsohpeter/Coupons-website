import React, { useState } from 'react'
import './Registration.css'
import SignIn from '../Sign-In/SignIn'
import Signup from '../Signup/Signup'
const Registration = () => {
  const[switchTabs, setSwitchTabs] = useState(true)
   
  return (
    <div className='main-regContainer'>
      <h2>Register or Sign in for great Coupons</h2>
      <div className="tabs-btn">
        <button onClick={() => setSwitchTabs(!switchTabs)}>I have an account</button >
        <button onClick={() => setSwitchTabs(!switchTabs)}>I'm new Costumer</button>
      </div>
       <div className="form-display">
       {switchTabs?(
        <SignIn />
       ):(
         <Signup />
       )}
       </div>
     </div>
  )
}

export default Registration