import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavigationItem.scss'

const navigationItem = (props) => (
    <ul className={styles.navigation}>
        <li className={styles.navigation__item}>
            <NavLink to={props.link} className={styles.navigation__link}>{props.name}</NavLink>
        </li>
    </ul>
);

export default navigationItem;
