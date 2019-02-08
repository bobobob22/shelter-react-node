import React from 'react';
import styles from './Animals.scss';
import Button from "../Button/Button";

const animals = (props) => (
    <>
        <div className={styles.pet}>
            <div className={styles.pet__img}>
                <img src={props.img} alt=""/>
            </div>
            <div className={styles.pet__wrapper}>
                <div className={styles.pet__info}>
                    <h2>
                        <span>{props.name}</span>
                        <span>{props.race}</span>
                    </h2>
                    <p>{props.place}</p>
                    <p className={styles.pet__description}>{props.description}</p>
                </div>
                <div className={styles.pet__buttons}>
                    <Button btnClass="abcd ghty">{props.destination}</Button>
                    <Button btnClass="pet__button pet__button--destination">{props.destination}</Button>
                    <Button btnClass="pet__button pet__button--gender">{props.gender}</Button>
                </div>
            </div>
        </div>
        <hr/>
    </>
);


export default animals;
