import React from 'react';
import '../App.css';

import { Link } from "react-router-dom";

import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {categories: state.categoriesKey}
}


let Sidebar = ({categories}) => {
  return (
    <div>
      <div><Link to="/">Etsetera...</Link></div>
      <div>
        {
          categories.map()
        }
      </div>
    </div>
  )
}


export default Sidebar;