import React from 'react';
import Product from './Product';

const HomePage = (props) => {
  return (
    <div>
      <h1>This Is The Home Page</h1>
      <Product
        name='Samsung TV'
        price='500'
        addToCartProp={() =>
          props.addToCartProp({ name: 'Samsung TV', price: '500' })
        }
      />
      <Product
        name='Macbook Pro'
        price='999'
        addToCartProp={() =>
          props.addToCartProp({ name: 'Macbook Pro', price: '999' })
        }
      />
    </div>
  );
};

export default HomePage;
