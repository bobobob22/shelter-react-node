import React from 'react';
import {NavLink} from 'react-router-dom'
import styles from './Page404.scss';

const page404 = ({location}) => (
    <div className={styles.Page404}>
        <h1>Hello Guys, lets deal with 404?</h1>
        <h2>No match found. Back to homepage<br/>
            <NavLink to="/">Homepage</NavLink>
        </h2>
    </div>
);

export default page404;
