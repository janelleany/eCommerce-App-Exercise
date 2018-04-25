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
        <h4>Product Categories</h4>
        {
          categories.map(item => {
            return (<div><Link to={`/categories/${item.id}`}>{item.name}</Link></div>)
          })
        }
      </div>
    </div>
  )
}


export default connect(mapStateToProps)(Sidebar);