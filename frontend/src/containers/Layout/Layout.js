import React, {Component} from 'react';
import Navigation from '../../containers/Navigation/Navigation'
import {Route, Switch} from "react-router-dom";
import Lost from "../Lost/Lost";
import AddNewPet from "../AddNewPet/AddNewPet";
import Home from "../Home/Home";
import Footer from '../Footer/Footer'
import Page404 from '../Page404/Page404'
import styles from './Layout.scss';

class Layout extends Component {
    render() {
        return (
            <>
                <header>
                    <Navigation/>
                </header>
                <main className={styles.Layout}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/lost" component={Lost}/>
                        <Route path="/add-new" component={AddNewPet}/>
                        <Route component={Page404}/>
                    </Switch>
                </main>
                <Footer/>
            </>
        );
    }
}

export default Layout;
