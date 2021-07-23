import React from 'react';

const Product = (props) => {
  return (
    <div>
      <h2>
        {props.name} ${props.price}
      </h2>
      <button className="add-to-cart-button" onClick={props.addToCartProp}>Add To Cart</button>
    </div>
  );
};

export default Product;
