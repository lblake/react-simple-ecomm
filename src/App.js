import './App.css';
import React, {useState}from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
const [cart, setCart] = useState([])

  return (
    <Router>
      <Switch>
        <div className='App'>
          <NavBar />
          <Route exact path='/home' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/cart' component={Cart} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
