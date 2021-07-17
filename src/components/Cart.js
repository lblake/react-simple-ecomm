import React from 'react';


const Cart = (props) => {
  console.log(props);

  const products = props.cartProductsProp.map((product, index) => {
    return (
      <div key={index}>
        {product.name} ${product.price}
        <button
          type='button'
          className='delete-button'
          onClick={()=> props.handleRemoveItemProp(index)}
        >
          Delete Item
        </button>
      </div>
    );
  });

  const total = props.cartProductsProp.reduce(function (sum, product) {
    return sum + parseInt(product.price) 
  }, 0)

  return (
    <div className='cart'>
      <h1>This Is The Shopping Cart Page</h1>
      <li>{products}</li>
      Total: $ {total}
      
    </div>
  );
};

export default Cart;
