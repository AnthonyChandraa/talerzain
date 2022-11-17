import React from 'react'
import artCollectibles from '../../assets/Assets [Talerzain]/Assets [Talerzain]/Homepage/icons8-art-64.png'
import creativeServices from '../../assets/Assets [Talerzain]/Assets [Talerzain]/Homepage/icons8-creative-64.png'
import handcraft from '../../assets/Assets [Talerzain]/Assets [Talerzain]/Homepage/icons8-wool-64.png'
import { Link } from 'react-router-dom'


function Content() {
  return (
    <div className='grid-home'>
        <Link to="src\pages\submenus\artcollection.tsx" className='navigation1'>
          <img src={artCollectibles} alt="no photo" width={80}/>
          <p className='m-2'>Art & Collectibles</p>
        </Link>
        <a href="" className='navigation1'>
          <img src={handcraft} alt="no photo" width={80}/>
          <p className='m-2'>Handcrafts</p>
        </a>
        <a href="" className='navigation1'>
          <img src={creativeServices} alt="no photo" width={80}/>
          <p className='m-2'>Creative Services</p>
        </a>
      </div>
  )
}

export default Content