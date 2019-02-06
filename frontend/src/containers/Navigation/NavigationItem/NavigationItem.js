import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavigationItem.scss'

const navigationItem = (props) => (
    <NavLink to={props.link} className={styles.navigation__item}>{props.name}</NavLink>
);

export default navigationItem;
