import React from 'react';
import '../App.css';

import Banner from '../Components/Banner';
import Sidebar from '../Components/Sidebar';

let ProductScreen = () => {
  return (
    <div>
      < Banner />
      < Sidebar />
      <p>A ProductScreen has rendered</p>
    </div>
  )
}


export default ProductScreen;