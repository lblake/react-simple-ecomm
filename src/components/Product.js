import React from 'react';
// import JazzBass from '../images/Jazz-Bass.jpeg';
// import PBass from '../images/P-Bass.jpeg';

const Product = (props) => {
  return (
    <div>
      {/* <h1>This Is The Products Page</h1>
      <img className='product' src={JazzBass} alt='Jazz Bass' />
      <button onClick={props.addToCartP}>Buy</button>
      <img className='product' src={PBass} alt='P Bass' /> */}

      <h2>
        {props.name} {props.price}
      </h2>
      <button onClick={props.addToCartProp}>Add To Cart</button>
    </div>
  );
};

export default Product;
