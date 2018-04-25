import React from 'react';

import { connect } from 'react-redux';

import '../App.css';

import Banner from '../Components/Banner';
import Sidebar from '../Components/Sidebar';

let mapPropsToState = (state) => {
  return {allCategories: state.categoriesKey, allProducts: state.productsKey}
}


let AllCategoriesScreen = ({allCategories, allProducts}) => {
  return (
    <div>
      < Banner />
      < Sidebar />
      <div>
        {
          allCategories.map(category => {
            return (
            <div>
              <div>{category.name}</div>
                {
                  allProducts.map(product => {
                    return ((product.categoryId === category.id) ? <div><h3>{product.name}</h3><p>{product.price}</p></div> : <div></div>)
                })
              }
            </div>
          )
          })
        }
      </div>
    </div>
  )
}

export default connect(mapPropsToState)(AllCategoriesScreen);