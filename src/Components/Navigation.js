import React from 'react';
import '../App.css';

import { Link } from "react-router-dom";


let Navigation = () => {
  return (
    <div>
      <div><Link to="/login">Login</Link></div>
      <div><Link to="/categories">Link to All Categories</Link></div>
      <div><Link to="/cart">Link to Your Shopping Cart</Link></div>
    </div>
  )
}


export default Navigation;