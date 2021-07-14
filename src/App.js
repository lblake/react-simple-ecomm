import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Product from './components/Product';
import Cart from './components/Cart';
import HomePage from './components/HomePage';

function App() {
  const [cartState, setCartState] = useState([]);

  const addToCart = (product) => {
    setCartState([...cartState, product]);
  };

  return (
    <Router>
      <NavBar totalProducts={cartState.length} />

      <Switch>
        <Route
          exact
          path='/home'
          render={() => <HomePage addToCartProp={addToCart} />}
        />

        <Route
          exact
          path='/product'
          render={() => <Product addToCartProp={addToCart} />}
        />

        {/* <Route
          exact
          path='/cart'
          render={() => <Cart addToCartProp={addToCart} />}
        /> */}

        <Route
          exact
          path='/cart'
          render={() => <Cart cartProductsProp={cartState} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
