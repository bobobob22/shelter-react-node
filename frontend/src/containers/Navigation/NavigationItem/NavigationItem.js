import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavigationItem.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from 'classnames';

const navigationItem = (props) => (
    <ul className={styles.navigation__elementsContainer}>
        <li className={styles.navigation__item}>
            <NavLink to={props.link} className={styles.navigation__link}>
                <FontAwesomeIcon icon={props.icon} className={classNames(styles.nav__icon, [props.className])}/>
                {props.name}
            </NavLink>
        </li>
    </ul>
);

export default navigationItem;
