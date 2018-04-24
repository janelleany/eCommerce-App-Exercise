import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'type':
            
    
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
