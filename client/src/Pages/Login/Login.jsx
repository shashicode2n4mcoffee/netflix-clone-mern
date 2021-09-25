import React from 'react'
import './Login.scss'
import logo from '../../assets/netflix-logo-reg.svg'
import { useState, useRef } from 'react'

const Registration = () => {
  return (
    <div className='register'>
      <div className='top'>
        <img src={logo} alt='' />
      </div>
      <div className='conatiner'>
        <h1>Sign In</h1>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button> Sign In</button>
        <h4>New to Netflix? Signup now.</h4>
      </div>
    </div>
  )
}

export default Registration
