import React, { useState } from 'react';
import JazzBass from '../images/Jazz-Bass.jpeg';
import PBass from '../images/P-Bass.jpeg';

const addToCart = () => {
  console.log('button clicked');
};

const Products = () => {
  const [product, setProduct] = useState([]);

  return (
    <div>
      <h1>This Is The Products Page</h1>
      <img className='product' src={JazzBass} alt='Jazz Bass' />
      <button onClick={addToCart}>Buy</button>
      <img className='product' src={PBass} alt='P Bass' />
      <button onClick={addToCart}>Buy</button>
    </div>
  );
};

export default Products;
