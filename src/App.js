import React from 'react';
import './App.css';

import { HashRouter as Router, Route, Link } from "react-router-dom";
import HomepageScreen from './Screens/HomepageScreen';


const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomepageScreen}/>
      <Route path="/categories" component={CategoryScreen}/>
      <Route path="/" exact component={ProductScreen}/>
      <Route path="/" exact component={HomepageScreen}/>
      <Route path="/" exact component={HomepageScreen}/>
      <Route path="/" exact component={HomepageScreen}/>
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
