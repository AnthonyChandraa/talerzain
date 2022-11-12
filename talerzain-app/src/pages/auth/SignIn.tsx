import React from 'react'
import fotoSignIn from '../../assets/Assets [Talerzain]/Assets [Talerzain]/Signup Signin/Artist.gif'
import facebook from '../../assets/Assets [Talerzain]/Assets [Talerzain]/Signup Signin/icons8-facebook-144.png'
import google from '../../assets/Assets [Talerzain]/Assets [Talerzain]/Signup Signin/icons8-google-128.png'
import twitter from '../../assets/Assets [Talerzain]/Assets [Talerzain]/Signup Signin/icons8-twitter-240.png'


function SignIn() {
  return (
    <div className='sign-in'>
      <div className='d-flex justify-content-center align-items-center ps-4 pe-4' style={{width: "282px", height:"282px"}}>
        <img src={fotoSignIn} alt="no photo" className='photo rounded-5' style={{width: "280px"}}/>
      </div>
      <div className='bg-yellow-op-5 sign-in-right'>
          <div className='d-flex justify-content-start w-75'>
            <p className='m-4 h4'>Sign In</p>
          </div>
          <div className='d-flex flex-column mb-3'>
            <label className='mini-links' htmlFor="form-username">Username</label>
            <input className='form-input shadow-btn ' type="text" id='form-username' placeholder='insert username'/>
          </div>
          <div className='d-flex flex-column'>
            <label className='mini-links' htmlFor="form-password">Password</label>
            <input className='form-input shadow-btn' type="password" id='form-password' placeholder='insert password'/>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <button className='rounded-4 btn-sign bg-red shadow-btn in-button'>Log In</button>
            <a className='mini-links m-2' href="">Need an account?</a>
          </div>
          <div className='align-items-center d-flex flex-column' style={{gap: "10px"}}>
            <p className='mini-links'> ─── &nbsp; or sign in with &nbsp; ─── </p>
            <div className='d-flex align-items-center flex-row' style={{gap: "20px"}}>
              <img src={facebook} alt="no photo" className='logo-img'/>
              <img src={google} alt="no photo" className='logo-img'/>
              <img src={twitter} alt="no photo" className='logo-img'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SignIn