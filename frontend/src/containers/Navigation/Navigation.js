import React, {Component} from 'react';
import classes from './Navigation.scss';
import Home from '../Home/Home'
import Lost from '../Lost/Lost';
import AddNewPet from '../AddNewPet/AddNewPet'
import {Route} from 'react-router-dom'


class Navigation extends Component {
    render() {
        return (
            <div className={classes.Navigation}>
                <Route path="/lost" component={Lost}/>
                <Route path="/add-new" component={AddNewPet}/>
                <Route path="/" exact component={Home}/>
            </div>
        );
    }
}

export default Navigation;
