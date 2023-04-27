import React from 'react'
import './SignIn.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
const SignIn = () => {
  return (
    <div className='main-signContainer'>
      <form action="">
        <input 
        type="text"
        placeholder='Email'
        name='Email'
        />
        <input 
        type="text"
        placeholder='Password'
        name='Password'
        />

        <a href="#">forget Password</a>
        <p>
          <span>by cliking below, I agree to the terms and policy</span>
        </p>

        <button className='submit-btn' type='submit'>sign in</button>
      </form>
        <div
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
          >
          <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

          <div>
            <p style={{width: '70px', textAlign: 'center'}}>Example</p>
         </div>

          <div style={{flex: 1, height: '2px', backgroundColor: 'black'}} />
      </div>
      <div className="social-media">
        <div className="fb-icon">
          <FacebookIcon />
          Facebook
        </div>
        <div className="ggle-icon">
          <GoogleIcon />
          Google
        </div>
      </div>
    </div>
  )
}

export default SignIn