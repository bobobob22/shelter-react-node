import React from 'react';
import classes from './Button.scss';
import classNames from 'classnames';



const button = (props) => (
    <button
        disabled={props.disabled}
        className={classNames(classes.button, [props.btnClass])}
     
        onClick={props.clicked}>
        {props.children}
    </button>
);

//todo: usunac walidacje stad na buttona i dodawac propsTypes w komponencie
//todo: zrobic zamiane z buttona na anchora


export default button;
