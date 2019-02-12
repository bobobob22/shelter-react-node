import React from 'react';
import styles from './SinglePetContainer.scss';
import Button from "../UI/Button/Button";
import Link from "react-router-dom/es/Link";
import Image from '../../components/UI/Image/Image'
import PropTypes from 'prop-types';

const singlePetContainer = (props) => (
    <>
        <div className={styles.pet}>
            <div className={styles.pet__img}>
                <Image link={props.link} imgUrl={props.imgUrl}/>
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
                    <Button btnClass={[styles.abcd, styles.ghty]}>{props.destination}</Button>
                    <Button btnClass="pet__button pet__button--destination">{props.destination}</Button>
                    <Button btnClass="pet__button pet__button--gender">{props.gender}</Button>
                </div>
            </div>
        </div>
        <hr/>
    </>
);

// singlePetContainer.propTypes = {
//     link: PropTypes.string.isRequired
// };
//
// singlePetContainer.defaultProps = {
//     link: 'dupa'
// };

//todo: zmienic nazwe i gdzies przeniesc folder gdzie to bedzie mialo sens
// osoby komponent UI dla linkow i linkow z obrazkami


export default singlePetContainer;
