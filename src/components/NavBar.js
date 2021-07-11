import React from 'react';
import { Link } from 'react-router-dom';
// import Products from './components/Products';
// import Cart from './components/Cart';

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to='/products'>Products</Link>
      </li>
      <li>
        <Link to='/cart'>Shopping Cart</Link>
      </li>
    </ul>
  );
};

export default NavBar;
