import React from 'react'
import './Registration.scss'
import logo from '../../assets/netflix-logo-reg.svg'
import { useState, useRef } from 'react'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleEmail = () => {
    setEmail(emailRef.current.value)
  }

  const handlePassword = () => {
    setEmail(passwordRef.current.value)
  }

  return (
    <div className='register'>
      <div className='top'>
        <img src={logo} alt='' />
        <button> Sign In</button>
      </div>
      <div className='container'>
        <h1>Unlimited movies, Tv shows, and more</h1>
        <h3>Watch anymore. Cancel anytime</h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
      </div>
      {!email ? (
        <div className='input'>
          <input type='email' placeholder='email address' ref={emailRef} />
          <button className='registerButton' onClick={handleEmail}>
            Get Started
          </button>
        </div>
      ) : (
        <div className='input'>
          <input type='password' placeholder=' password' ref={passwordRef} />
          <button className='registerButton' onClick={handlePassword}>
            Start
          </button>
        </div>
      )}
    </div>
  )
}

export default Registration
