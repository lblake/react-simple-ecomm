import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Cart from './components/Cart';
import Home from './components/Home';

const addToCart = () => {};

function App() {
  const [product, setProduct] = useState([]);

  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Route exact path='/home' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </Router>
  );
}

export default App;
