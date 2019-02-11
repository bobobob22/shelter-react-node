import React from 'react';
import classes from './Button.scss';
import classNames from 'classnames';
import multipleClassSeparator from '../../../reusable/methods/multipleClassSeparator';


const button = (props) => (
    <button
        disabled={props.disabled}
        className={classNames(classes.button, props.btnClass ? multipleClassSeparator(props.btnClass, classes) : [])}
        onClick={props.clicked}>
        {props.children}
        {console.log(classes[props.btnClass])}
    </button>
);


export default button;
