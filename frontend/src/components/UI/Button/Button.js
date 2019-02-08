import React from 'react';
import classes from './Button.scss';

console.log(classes);


const button = (props) => (
    <button
        disabled={props.disabled}
        className={[classes.button, classes[props.btnClass]].join(' ')}
        onClick={props.clicked}>
        {props.children}
        {console.log(classes[props.btnClass])}
    </button>
);


export default button;
