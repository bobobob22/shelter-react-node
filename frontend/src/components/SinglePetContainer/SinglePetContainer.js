import React from 'react';
import styles from './SinglePetContainer.scss';
import Image from '../../components/UI/Image/Image'
import PropTypes from 'prop-types';
import PetDetails from '../PetDetails/PetDetails'

const singlePetContainer = (props) => (
    <>
        <div className={styles.pet}>
            <div className={styles.pet__img}>
                <Image link={props.link} imgUrl={props.imgUrl}/>
            </div>
            <div className={styles.pet__wrapper}>
                <PetDetails
                    name={props.name}
                    race={props.race}
                    place={props.place}
                    description={props.description}
                    destination={props.destination}
                    gender={props.gender}
                />
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
