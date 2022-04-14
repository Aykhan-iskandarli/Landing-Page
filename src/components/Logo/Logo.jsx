import React from 'react'
import logo from "../../images/logo.png"
import {Link} from "react-router-dom"
const Logo = () => {
  return (
    <div className='logo_container'>
        <Link to="/" className="logo-img">
            <img src={logo} alt="" />
            <span>Robostam</span>
        </Link>
    </div>
  )
}

export default Logo