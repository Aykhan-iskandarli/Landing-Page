import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import { menuContent } from '../../data'
 import cover from "../../video/cover2.mp4"
import Hamburger from '../Hamburger/Hamburger'
import MenuList from './MenuList';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
      <div className="navbar_section">
        <div className="container">
          <nav className="navbar">
            <Logo />
            <div className={open ? "active mobile_menu" : "mobile_menu"}>
              <video
                autoPlay
                muted
                loop
                className="myVideo"
                rate={1.0}
              >
                <source src={cover} type="video/mp4" />
              </video>
              <ul className="menu_list">
                {menuContent.map((menu) => (
                  <li key={menu.url}>
                    <Link to={menu.url}>{menu.component}</Link>
                    {/* <LazyLoad>
                        <img src={menu.img} alt="menu_content" />
                    </LazyLoad> */}
                  </li>
                ))}
              </ul>
            </div>
            <MenuList/>
            <Hamburger setOpen={setOpen} open={open} />
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar