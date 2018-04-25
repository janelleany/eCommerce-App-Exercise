import React from 'react';
import { connect } from 'react-redux';

import '../App.css';

import Banner from '../Components/Banner';
import Sidebar from '../Components/Sidebar';

let mapStateToProps = (state) => {
  return ({cartItems: state.cartKey})
}


let CartScreen = ({cartItems}) => {
  return (
    <div>
      < Banner />
      < Sidebar />
      <div>
        {
        cartItems.map(item => {
          return (<div><h3>{item.name}</h3><p>{item.price}</p></div>)
        })
        }
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(CartScreen);