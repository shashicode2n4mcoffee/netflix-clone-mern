import './Navbar.scss'
import React from 'react'
import logo from '../../assets/netflix-logo.png'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import yash from '../../assets/yash.png'
import { useState } from 'react'

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false)

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img src={logo} alt='' />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>Homepage</span>
        </div>
        <div className='right'>
          <Search className='icons' />
          <span>KID</span>
          <Notifications className='icons' />
          <img src={yash} alt='' />
          <div className='profile'>
            <ArrowDropDown className='icons' />
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
