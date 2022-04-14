import React from 'react'
import { Link } from 'react-router-dom';
import { menuContent } from '../../data'

const MenuList = () => {
  return (
    <ul className="menu_list_2">
       {menuContent.map((menu) => (
                  <li key={menu.url} className="menu_list_item_2">
                    <Link to={menu.url}>{menu.component}</Link>
                    {/* <LazyLoad>
                        <img src={menu.img} alt="menu_content" />
                    </LazyLoad> */}
                  </li>
                ))}
    </ul>
  );
}

export default MenuList