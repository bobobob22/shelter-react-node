import React from 'react';
import {NavLink} from 'react-router-dom'
import styles from './Page404.scss';
import page404Img from '../../assets/images/imag.jpg'

const page404 = () => (
    <div className={styles.Page404}>
        <h1>Hello Guys, lets deal with 404?</h1>
        <h2>No match found. Back to homepage<br/>
            <NavLink to="/">Homepage</NavLink>
        </h2>
        <img src={page404Img} alt=""/>
    </div>
);

export default page404;
