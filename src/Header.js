import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <h1 className='logo'>CROSS PE</h1>
      <div className='navcontainer'>
        <Link to="/" ><p className='classname'>Classes</p></Link>
        <Link to="/bookings"><p className='classname'>Bookings</p></Link>
      </div>
    </div>
  )
}
