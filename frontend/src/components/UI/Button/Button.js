import React from 'react';
import classes from './Button.scss';
import classNames from 'classnames';
import multipleClassSeparator from '../../../reusable/methods/multipleClassSeparator';


const button = (props) => (
    <button
        disabled={props.disabled}
        className={classNames(classes.button, multipleClassSeparator(props.btnClass, classes))}
        onClick={props.clicked}>
        {props.children}
    </button>
);

//todo: usunac walidacje stad na buttona i dodawac propsTypes w komponencie
//todo: zrobic zamiane z buttona na anchora


export default button;
