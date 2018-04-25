import React from 'react';
import './App.css';

import { HashRouter as Router, Route } from "react-router-dom";

import HomepageScreen from './Screens/HomepageScreen';
import AllCategoriesScreen from './Screens/AllCategoriesScreen';
import CategoryScreen from './Screens/CategoryScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import LogoutScreen from './Screens/LogoutScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomepageScreen}/>
        <Route path="/categories" exact component={AllCategoriesScreen}/>
        <Route path="/categories/:id" component={CategoryScreen}/>
        <Route path="/product/:id" component={ProductScreen}/>
        <Route path="/cart" component={CartScreen}/>
        <Route path="/login" component={LoginScreen}/>
        <Route path="/logout" component={LogoutScreen}/>
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
