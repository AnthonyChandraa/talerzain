import React from 'react'

function Navbar() {
  return (
    <div className='d-flex justify-content-between'>
      <div className='m-4 h2 '>
        <p>talerzain.</p>
      </div>
      <div className='nav-btn-sign'>
        <a className='btn-sign bg-white shadow-btn' href="">Sign In</a>
        <a className='btn-sign bg-yellow shadow-btn' href="">Sign Up</a>
      </div>
    </div>
  )
}

export default Navbar