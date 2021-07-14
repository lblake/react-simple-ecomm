import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/home'>Home Page</Link>
        </li>
        {/* <li>
          <Link to='/product'>Product</Link>
        </li> */}
        <li>
          <Link to='/cart'>Shopping Cart {props.totalProducts}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
