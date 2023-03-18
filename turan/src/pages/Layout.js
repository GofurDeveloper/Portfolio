import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../css/Header.css'


function Layout() {
  return (
    <>
      <div className='header'>
        <div className='header__logo'>
        <img
            className='header__logoImg'
            src='../photo_2023-01-11_08-43-11.jpg'
            alt='404'
          />
        </div>
        <div className='header__links'>
          <Link to='/'>Abaut us</Link>

          <Link to='/Features'> Features</Link>

          <Link to='/Team'> Team</Link>

          <Link to='/Services'> Services</Link>

          <Link t0='/Contact'> Contact </Link>
        </div>
        <div className='header__right'>
          <Link>Become a deliver</Link>
        </div>

      </div>



      <Outlet />
    </>
  )
}

export default Layout