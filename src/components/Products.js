import React from 'react';
import JazzBass from '../images/Jazz-Bass.jpeg';
import PBass from '../images/P-Bass.jpeg';

const Products = () => {
  return (
    <div>
      This is The Products Page
      <img src={JazzBass} alt='Jazz Bass' />
      <button>Buy</button>
      <img src={PBass} alt='P Bass' />
      <button>Buy</button>
    </div>
  );
};

export default Products;
