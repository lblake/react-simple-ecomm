import React from 'react';

const handleRemoveItem = (props) => {
  const newCart = props.cartProductsProp.filter(
    (product) => product.key !== key
  );
  console.log(newCart);
};

const Cart = (props) => {
  console.log(props);

  const products = props.cartProductsProp.map((product, index) => {
    return (
      <div key={index}>
        {product.name} ${product.price}
        <button
          type='button'
          className='delete-button'
          onClick={handleRemoveItem}
        >
          Delete Item
        </button>
      </div>
    );
  });

  return (
    <div className='cart'>
      <h1>This Is The Shopping Cart Page</h1>
      <li>{products}</li>
      Total: $
      {products.reduce(function (total, products) {
        return total + products.price * products.index;
      }, 0)}
    </div>
  );
};

export default Cart;
