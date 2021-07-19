import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import HomePage from './components/HomePage';

function App() {
  const useStateWithLocalStorage = (localStorageKey) => {
    const [value, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);

    return [value, setValue];
  };

  const [cartState, setCartState] = useState([]);

  const [value, setValue] = useStateWithLocalStorage('myValueInLocalStorage');

  const onChange = (event) => setValue(event.target.value);

  // Not sure if this is going to work
  const itemCount = (indexMap) => {
    console.log(cartState);

    const existingItem = cartState.find(
      (indexMap) => indexMap.id === setCartState.id
    );

    if (!existingItem) {
      setCartState([...cartState]);
      existingItem.count = 1;
    } else {
      existingItem.count++;
    }
    return cartState;
  };

  const addToCart = (product) => {
    setCartState([...cartState, product]);
  };

  const handleDeleteItem = (indexMap) => {
    const newCart = cartState.filter(
      (product, indexFilter) => indexFilter !== indexMap
    );
    setCartState([...newCart]);
    console.log(newCart);
    console.log(indexMap);
  };

  const handleRemoveItem = (indexMap) => {
    const removedItem = cartState.filter(
      (product, indexFilter) => indexFilter !== indexMap
    );
    setCartState([...removedItem]);
  };

  const handleAddItem = (product) => {
    setCartState([...cartState, product]);
    console.log(product);
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
        {/* 
        <Route
          exact
          path='/product'
          render={() => <Product addToCartProp={addToCart} />}
        /> */}

        {/* <Route
          exact
          path='/cart'
          render={() => <Cart addToCartProp={addToCart} />}
        /> */}

        <Route
          exact
          path='/cart'
          render={() => (
            <Cart
              cartProductsProp={cartState}
              handleDeleteItemProp={handleDeleteItem}
              handleAddItemProp={handleAddItem}
              handleRemoveItemProp={handleRemoveItem}
              ItemCountProp={itemCount}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
