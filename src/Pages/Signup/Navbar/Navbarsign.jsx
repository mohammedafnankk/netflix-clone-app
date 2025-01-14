import React from 'react'
import "./Navbarsign.css"
import { Link } from 'react-router-dom'
export default function Signup() {
  return (
    <div className='navBarsign-body'>
      
    <div className=''>
      <div className="fade"></div>
      <div className="nav-bar">
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        <div className="sign-button">
            <button className=''><Link to='/signlogin' className='signLink'>Sign In</Link></button>
        </div>
      </div>
    </div>
    </div>
  )
}
