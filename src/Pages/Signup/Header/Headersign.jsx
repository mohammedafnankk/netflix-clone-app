import React from 'react'
import { Link } from 'react-router-dom'
import "./Headersign.css"
function Header() {
  return (
    <div className='container'>
      <div className="heading">
        <h1 >Unlimited movies, TV shows and more</h1>
        <p>Starts at ₹149. Cancel at any time.</p>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      </div>
      <div className="restart-membership">
        <input type="email" placeholder='Email address'  /><span><button><Link to='/newlogin' className='get-start'>Get Started    <i class="fa-solid fa-chevron-right"></i></Link> </button></span>
      </div>
    </div>
  )
}

export default Header
