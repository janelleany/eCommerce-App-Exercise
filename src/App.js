import React from 'react';
import './App.css';

import { HashRouter as Router, Route } from "react-router-dom";

import HomepageScreen from './Screens/HomepageScreen';
import CategoryScreen from './Screens/CategoryScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';


const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomepageScreen}/>
        <Route path="/category" component={CategoryScreen}/>
        <Route path="/product" component={ProductScreen}/>
        <Route path="/cart" component={CartScreen}/>
        <Route path="/login" component={LoginScreen}/>
      </div>
    </Router>
  )
}




{/* class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
} */}

export default App;
