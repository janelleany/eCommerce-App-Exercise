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
      < Sidebar />
      < Breadcrumb />
      < Product />
    </div>
  )
}


export default HomepageScreen;