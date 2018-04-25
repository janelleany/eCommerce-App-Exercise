import React from 'react';
import { connect } from 'react-redux';

import '../App.css';

import Navigation from './Navigation';
import AuthenticatedNavigation from './AuthenticatedNavigation';

let mapStateToProps = (state) => {
  return {authenticated: state.isLoggedIn}
}

let Banner = ( {authenticated} ) => {
  if (authenticated) {
    return (
      <div>
        <AuthenticatedNavigation/>
      </div>
    )  
  } else {
    return (
      <div>
        <Navigation/>
      </div>
    )
  }
}


export default connect(mapStateToProps)(Banner);
