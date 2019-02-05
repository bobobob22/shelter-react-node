import React, { Component } from 'react';

import Home from '../Home/Home'
import Lost from '../Lost/Lost';

import {Route} from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <div>


            <Route path="/lost" component={Lost}/>
            <Route path="/" exact component={Home}/>

      </div>
    );
  }
}

export default Navigation;
