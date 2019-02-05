import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.scss';
import Navigation from './containers/Navigation/Navigation';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Navigation/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
