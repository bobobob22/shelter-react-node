import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavigationItem.scss'

const navigationItem = (props) => (
    <NavLink to={props.link} className={styles.navigation__item}>{props.name}</NavLink>
);

export default navigationItem;


//todo: zmiennic semantyke - zeby dac to w tag nav, umiescic w tagach ul i li i zeby css ladnie wygladaly
