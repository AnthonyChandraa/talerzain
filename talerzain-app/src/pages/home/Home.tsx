import {useState, useEffect} from 'react'
import fotoHome from '../../assets/Assets [Talerzain]/Assets [Talerzain]/Homepage/Painting Easter eggs-cuate.png'
import artCollectibles from '../../assets/Assets [Talerzain]/Assets [Talerzain]/Homepage/icons8-art-64.png'
import creativeServices from '../../assets/Assets [Talerzain]/Assets [Talerzain]/Homepage/icons8-creative-64.png'
import handcraft from '../../assets/Assets [Talerzain]/Assets [Talerzain]/Homepage/icons8-wool-64.png'

function Home() {

  return (
    <div>
      {/* header */}
      <div className='d-flex justify-content-between'>
          <div className='m-4 h2 '>
            <p>talerzain.</p>
          </div>
          <div className='nav-btn-sign'>
            <a className='btn-sign bg-white shadow-btn' href="">Sign In</a>
            <a className='btn-sign bg-yellow shadow-btn' href="">Sign Up</a>
          </div>
      </div>
      {/* content */}
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
      {/* content down */}
      <div className='grid-home'>
        <a href="" className='navigation1'>
          <img src={artCollectibles} alt="no photo" width={80}/>
          <p className='m-2'>Art & Collectibles</p>
        </a>
        <a href="" className='navigation1'>
          <img src={handcraft} alt="no photo" width={80}/>
          <p className='m-2'>Handcrafts</p>
        </a>
        <a href="" className='navigation1'>
          <img src={creativeServices} alt="no photo" width={80}/>
          <p className='m-2'>Creative Services</p>
        </a>
      </div>
    </div>
  )
}

 

export default Home