import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import styles from './App.scss';
import Navigation from './containers/Navigation/Navigation';
import Layout from './containers/Layout/Layout';
import 'react-fontawesome/';

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <div className={styles.App}>
                        <Navigation/>
                    </div>
                </BrowserRouter>
                <Layout/>
            </>
        );
    }
}

export default App;
