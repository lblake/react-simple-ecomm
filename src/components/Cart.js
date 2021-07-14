import React from 'react';

const Cart = (props) => {
  const products = props.cartProductsProp.map((product, index) => {
    return (
      <div key={index}>
        {product.name} ${product.price}
      </div>
    );
  });

  return (
    <div className='cart'>
      <h1>This Is The Shopping Cart Page</h1>
      <li>{products}</li>
    </div>
  );
};

export default Cart;
