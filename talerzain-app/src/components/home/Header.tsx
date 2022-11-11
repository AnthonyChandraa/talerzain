import React from 'react'
import fotoHome from '../../assets/Assets [Talerzain]/Assets [Talerzain]/Homepage/Painting Easter eggs-cuate.png'

function Header() {
  return (
    <div className='d-flex bg-yellow-op-3 justify-content-between align-items-center'>
        <div className='vh-100'> 
          <img src={fotoHome} alt="no photo" className='w-50 photo'/>
        </div>
        <div className='m-3'>
          <div className='text-home'>
            <p>Amass works of art by the best artists in the world.</p> 
          </div>
          <div className='sub-text-home'>
            <p>“Art is not what you see, but what you make others see.” 
            - Edgar Degas</p>
          </div>
        </div>
      </div>
  )
}

export default Header