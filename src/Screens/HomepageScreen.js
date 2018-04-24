import React from 'react';
import '../App.css';

import Banner from '../Components/Banner';
import Sidebar from '../Components/Sidebar';
import Breadcrumb from '../Components/Breadcrumb';
import Product from '../Components/Product';



let HomepageScreen = () => {
  return (
    <div>
      < Banner />
      < Sidebar/>
      < Breadcrumb/>
      < Product/>
    </div>
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

export default HomepageScreen;
