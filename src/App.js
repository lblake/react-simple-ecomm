import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import HomePage from './components/HomePage';

function App() {
  const LOCAL_STORAGE_KEY = 'shoppingWithReact.cart';

  const [cartState, setCartState] = useState([
    {
      name: 'Samsung Tv',
      price: 500,
      quantity: 0,
    },
    {
      name: 'Macbook pro',
      price: 1000,
      quantity: 0,
    },
    {
      name: 'iPhone 12',
      price: 900,
      quantity: 0,
    },
  ]);
  //Local Storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartState));
  }, [cartState]);

  useEffect(() => {
    const cartJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cartJSON != null) setCartState(JSON.parse(cartJSON));
  }, []);

  const addToCart = (productIndex) => {
    // setCartState([...cartState, product]);
    console.log('Product index position is ' + productIndex);

    //making a copy of the old cartState, with all the objects
    // so this will be like [ { name: "Samsung Tv", etc...}, { prouct2...etc}, {product3...etc}]

    const newCartState = [...cartState];

    //update the product with the position of the productIndex we clicked
    //if we click on first product samsung tv for example
    // newCartState[0] = {

    // }
    newCartState[productIndex] = {
      ...newCartState[productIndex], // bring all the properties from this product (example) { name: "Samsung TV", price: 500, quantity: 0}
      quantity: newCartState[productIndex].quantity + 1, // overwrite only the quantity in this product  { name: "Samsung TV", price: 500, quantity: 0 + 1}
    };

    //now lets update the cartState with this new array updated
    setCartState([...newCartState]);
  };

  const handleRemoveItem = (productIndex) => {
    const newCartState = [...cartState];

    newCartState[productIndex] = {
      ...newCartState[productIndex],
      quantity: newCartState[productIndex].quantity - 1,
    };

    setCartState([...newCartState]);
  };

  const handleAddItem = (productIndex) => {
    const newCartState = [...cartState];

    newCartState[productIndex] = {
      ...newCartState[productIndex],
      quantity: newCartState[productIndex].quantity + 1,
    };

    setCartState([...newCartState]);
  };

  //We need to use a reduce function to loop through our cartState
  //Check all the product objects and check theirs quantities
  //and finally add them all together, so we can the total products in cart displaying in our navbar
  const totalProductQuantities = cartState.reduce((total, product) => {
    const updatedSum = total + product.quantity;
    return updatedSum;
  }, 0);

  return (
    <Router>
      <NavBar totalProducts={totalProductQuantities} />

      <Switch>
        <Route
          exact
          path='/home'
          render={() => (
            <HomePage addToCartProp={addToCart} productsProp={cartState} />
          )}
        />

        <Route
          exact
          path='/cart'
          render={() => (
            <Cart
              cartProductsProp={cartState}
              // handleDeleteItemProp={handleDeleteItem}
              handleAddItemProp={handleAddItem}
              handleRemoveItemProp={handleRemoveItem}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
