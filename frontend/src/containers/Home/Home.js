import React, { Component } from 'react';
import classes from './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
          <p className="Home__info">
              Shelter Home
          </p>
      </div>
    );
  }
}

export default Home;
