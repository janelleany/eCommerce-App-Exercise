import React from 'react';
import '../App.css';

import Banner from '../Components/Banner';
import Sidebar from '../Components/Sidebar';

import { connect } from 'react-redux';

let mapStateToProps = (state, props) => {
  return {
    allProducts: state.productsKey,
    allCategories: state.categoriesKey,
    currentCategoryId: parseInt(props.match.params.id)
  }
}

let CategoryScreen = ( {allProducts, allCategories, currentCategoryId} ) => {
  return (
    <div>
      < Banner />
      < Sidebar />
    {
      allProducts.map(product => {
        return ((product.categoryId === currentCategoryId) ? <div><p>{currentCategoryId}</p><h3>{product.name}</h3><p>{product.price}</p></div> : <div></div>)
      })
    }
    </div>
  )
}


export default connect(mapStateToProps)(CategoryScreen);