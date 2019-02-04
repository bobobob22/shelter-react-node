import React, { Component } from "react";

// import "./App.scss";

import classes from './App.scss';

import Layout from './src/containers/Layout/Layout'


class App extends Component {



  render() {
    return (
      <div className={classes.App}>
        <h1>React Animations</h1>
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
