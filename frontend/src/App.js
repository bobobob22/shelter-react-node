import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.scss';
import Navigation from './containers/Navigation/Navigation';
import Layout from './containers/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className={classes.App}>
            <Navigation/>
          </div>
        </BrowserRouter>
        <Layout />
      </div>
    );
  }
}

export default App;
