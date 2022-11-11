import React from 'react'
import { useModal } from 'react-hooks-use-modal';
import Register from '../../pages/auth/Register';
import SignIn from '../../pages/auth/SignIn';

function Navbar() {
  const [ModalSignIn, openIn, closeIn, isOpenIn] = useModal('root', {
    preventScroll: true,
    focusTrapOptions: 
    {
      clickOutsideDeactivates: true,
    },
  });

  const [ModalSignUp, openUp, closeUp, isOpenUp] = useModal('root', {
    preventScroll: true,
    focusTrapOptions: 
    {
      clickOutsideDeactivates: true,
    },
  });

  return (
    <>
    <div className='d-flex justify-content-between align-items-center'>
      <div className='m-4 h2'>
        <p>talerzain.</p>
      </div>
      <div className='nav-btn-sign'>
        <button onClick={openIn}className='btn-sign bg-white shadow-btn' >Sign In</button>
        <button onClick={openUp} className='btn-sign bg-yellow shadow-btn' >Sign Up</button>
      </div>
    </div>

    <ModalSignIn>
      <SignIn />
    </ModalSignIn>

    <ModalSignUp>
      <Register />
    </ModalSignUp>
    </>
  )
}

export default Navbar