import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Header.css'

export default function Header() {
  const navigate = useNavigate()
  const onClickLogout = () => {
    localStorage.removeItem("user");
    navigate("/register");
  }
  return (
    <div className='header'>
      <h1 className='logo'>CROSS PE</h1>
      <div className='navcontainer'>
        <Link to="/" ><p className='classname'>Classes</p></Link>
        <Link to="/bookings"><p className='classname'>Bookings</p></Link>
        <button className='logout' onClick={onClickLogout}>Log Out</button>
      </div>
    </div>
  )
}
