import React from 'react';

const Cart = (props) => {
  console.log(props);

  const productsWithQuantities = props.cartProductsProp.filter(
    (product, index) => {
      return product.quantity > 0;
    }
  );

  const productsToDisplay = productsWithQuantities.map((product, index) => {
    return (
      <div key={index}>
        {product.name} ${product.price}
        <span className='product-quantity'>{product.quantity}</span>
        <button
          type='button'
          className='cart-buttons'
          onClick={() => props.handleRemoveItemProp(index)}
        >
          Remove Item(s)
        </button>
        <button
          type='button'
          className='cart-buttons'
          onClick={() => props.handleAddItemProp(index)}
        >
          Add Item(s)
        </button>
        {/* <button
          type='button'
          className='cart-buttons'
          onClick={() => props.handleDeleteItemProp(index)}
        >
          Delete Item
        </button> */}
      </div>
    );
  });

  const total = productsWithQuantities.reduce(function (sum, product) {
    return sum + parseInt(product.price) * product.quantity;
  }, 0);

  return (
    <div className='cart'>
      <h1>This Is The Shopping Cart Page</h1>
      <li>{productsToDisplay}</li>
      Total: $ {total}
    </div>
  );
};

export default Cart;
