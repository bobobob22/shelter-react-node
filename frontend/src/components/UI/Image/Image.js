import React from 'react';
import Link from "react-router-dom/es/Link";
import styles from './Image.scss'

const image = (props) => {

    return props.link ? (
        <Link to={props.link}>
            <img src={props.imgUrl} alt="" className={styles.img}/>
        </Link>
    ) : (
        <img src={props.imgUrl} alt=""/>
    );

};

export default image;
