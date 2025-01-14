import React from 'react'
import Newlognavbar from './NewLoginNavbar/Newlognavbar'
import Newlogheader from './NewLoginHeader/Newlogheader'
import LogNavbar from '../Login/Navbar/LogNavbar'
function Newlogin() {
  return (
    <div>
      {/* <LogNavbar/> */}
      <Newlognavbar/>
      <Newlogheader/>
    </div>
  )
}

export default Newlogin
