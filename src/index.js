import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import categories from './json/categories'
import products from './json/products'
import users from './json/users'


let initialState = {
    categoriesKey: categories,
    productsKey: products,
    usersKey: users
};

//refactor for master reducer and create sub reducers
let reducer = (state = initialState, action) => {
    return state;
}
    // switch (action.type) {
    //     case 'type': {
    //         return {...state, key: value}
    //     }
    //     case 'type': {
    //         return {...state, key: value}
    //     }
    //     case 'type': {
    //         return {...state, key: value}
    //     }
    //     default: return state;
    // }

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


let UI = 
    <Provider store={store}> 
        <App />
    </Provider>


ReactDOM.render(UI, document.getElementById('root'));
registerServiceWorker();
