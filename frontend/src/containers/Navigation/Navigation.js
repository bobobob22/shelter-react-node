import React, {Component} from 'react';
import classes from './Navigation.scss';
import {NavLink} from 'react-router-dom'
import NavigationItem from './NavigationItem/NavigationItem'


class Navigation extends Component {
    render() {
        return (
            <div className={classes.Navigation}>
                <NavigationItem link="/" name="Wszystkie"/>
                <NavigationItem link="/lost" name="Zaginione"/>
                <NavigationItem link="/add-new" name="Add New"/>
            </div>
        );
    }
}

export default Navigation;
