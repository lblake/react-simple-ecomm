import React from 'react';

const Cart = (props) => {
  console.log(props);

  const products = props.cartProductsProp.map((product, index) => {
    return (
      <div key={index}>
        {product.name} ${product.price}
        <button
          type='button'
          className='cart-buttons'
          onClick={() => props.handleRemoveItemProp(index)}
        >
          - Remove Item(s)
        </button>
        <button
          type='button'
          className='cart-buttons'
          onClick={() => props.handleAddItemProp(product)}
        >
          + Add Item(s)
        </button>
        <button
          type='button'
          className='cart-buttons'
          onClick={() => props.handleDeleteItemProp(index)}
        >
          Delete Item
        </button>
      </div>
    );
  });

  const total = props.cartProductsProp.reduce(function (sum, product) {
    return sum + parseInt(product.price);
  }, 0);

  // const cart = props.handleItemCountProp.reduce(function (sum, product) {
  //   return sum + (product.name);
  // }, []);
  // const cart = props.handleItemCountProp.reduce(function (summarizer, [])

  return (
    <div className='cart'>
      <h1>This Is The Shopping Cart Page</h1>
      <li>{products}</li>
      Total: $ {total}
      {/* Cart: {cart} */}
    </div>
  );
};

export default Cart;
