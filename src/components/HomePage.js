import React from 'react';
import Product from './Product';

const HomePage = (props) => {
  const products = props.productsProp.map( (product, productIndex) => {
    return (
      <Product
        name={product.name}
        price={product.price}
        addToCartProp={() =>
          props.addToCartProp(productIndex)
        }
      />
    )
  })

  return (
    <div className='home'>
      <h1>This Is The Home Page</h1>
      { products }
    </div>
  );
};

export default HomePage;
