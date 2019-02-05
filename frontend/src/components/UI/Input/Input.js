import React from 'react';

import classes from './Input.scss';

const input = ( props ) => {

    //deklarujemy inputElement
    let inputElement = null;

    //pobieramy klasy
    const inputClasses = [classes.InputElement];

    //najwazniejsze tutaj onChange ktore wysyla propsy do rodzica

    //walidacja -> w komponencie gdzie wywolujemy formularz z inputami
    //deklarujemy wartosci -> propsy invalid - czy zwalidowany, touched - czy (dotkniety)
    //te propsy sa walidowane w komponencie z wywolanym formularzem, ogarniaja je metody

    // if (props.invalid && props.shouldValidate && props.touched) {
    //     inputClasses.push(classes.Invalid);
    // }


    //i tutaj switchujemy typ inputa
    // klasy dodane do inputa -> w zaleznosci czy jest valid touched itp
    //wartość -> pobierana z rodzica -> zmienia się po event target value
    //onChange -> wysyła do rodzica propsy -> nastepuje walidacja itp
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        //label -> tez z elementu konfiguracyjnego
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;