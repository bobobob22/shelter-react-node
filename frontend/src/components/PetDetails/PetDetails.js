import React from 'react';
import styles from './PetDetails.scss'
import Button from "../UI/Button/Button";

const petDetails = (props) => (
    <aside>
        <div className={styles.pet__info}>
            <h2>
                <span>{props.name}</span>
                <span>{props.race}</span>
            </h2>
            <p>{props.place}</p>
            <p className={styles.pet__description}>{props.description}</p>
        </div>
        <div className={styles.pet__buttons}>
            <Button btnClass="pet__button">{props.destination}</Button>
            <Button btnClass="pet__button pet__button--destination">{props.destination}</Button>
            <Button btnClass="pet__button pet__button--gender">{props.gender}</Button>
        </div>
    </aside>
);

export default petDetails;
