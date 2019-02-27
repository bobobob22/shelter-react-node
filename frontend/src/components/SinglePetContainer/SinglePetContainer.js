import React from 'react';
import styles from './SinglePetContainer.scss';
import Image from '../../components/UI/Image/Image'
// import PropTypes from 'prop-types';
import PetDetails from '../PetDetails/PetDetails'

const singlePetContainer = (props) => (
    <>
        <div className={styles.pet}>
                <Image link={props.link} imgUrl={props.imgUrl}/>
                <PetDetails
                    name={props.name}
                    race={props.race}
                    place={props.place}
                    description={props.description}
                    destination={props.destination}
                    gender={props.gender}
                />
        </div>
    </>
);



export default singlePetContainer;
