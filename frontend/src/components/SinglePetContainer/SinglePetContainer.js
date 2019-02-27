import React from 'react';
import styles from './SinglePetContainer.scss';
import Image from '../../components/UI/Image/Image'
import PropTypes from 'prop-types';
import PetDetails from '../PetDetails/PetDetails'

const singlePetContainer = (props) => (
    <>
        <section className={styles.pet}>
            <aside className={styles.pet__img}>
                <Image link={'/pet/' + props.link} imgUrl={props.imgUrl}/>
            </aside>
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
        </section>
        <hr/>
    </>
);



export default singlePetContainer;
