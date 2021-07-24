import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/home'>Home Page</Link>
        </li>
        <li className='shopping-cart'>
          <Link to='/cart'>
            Shopping Cart 🛒{' '}
            {props.totalProducts === 0 ? ' Empty ' : props.totalProducts}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
