import React from 'react';
import Link from "react-router-dom/es/Link";
import styles from './Image.scss'

const image = (props) => {

    if (props.link) {
        return (
            <Link to={props.link}>
                <img src={props.imgUrl} alt="" className={styles.img}/>
            </Link>
        )
    } else if(props.lightbox){
        return (
            <a href={props.imgUrl}>
                <img src={props.imgUrl} alt=""/>
            </a>
        )
    }else {
        return (
            <img src={props.imgUrl} alt=""/>
        )
    }

};

export default image;
