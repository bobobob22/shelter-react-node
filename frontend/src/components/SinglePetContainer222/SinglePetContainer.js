import {React, Component} from 'react';
import styles from './SinglePetContainer.scss';
import Image from '../../components/UI/Image/Image';
import axios from 'axios';

// import PropTypes from 'prop-types';
import PetDetails from '../PetDetails/PetDetails';
// import GoogleMap from '../GoogleMap/GoogleMap';

import GoogleMaps from '../GoogleMaps/GoogleMaps'

// const singlePetContainer = (pet) => (
//     <>
//         <div className={styles.pet}>
//                 <Image link={props.link} imgUrl={props.imgUrl}/>
//                 <PetDetails
//                     name={props.name}
//                     race={props.race}
//                     place={props.place}
//                     description={props.description}
//                     destination={props.destination}
//                     gender={props.gender}
//                 />
//                   <GoogleMaps
//                     defaultZoom={12}
//                     defaultCenter={{ lng: parseFloat(props.latitude), lat: parseFloat(props.longitude) }}
//                     position={{ lng: parseFloat(props.latitude), lat: parseFloat(props.longitude) }}
//                     isMarkerShown={false}
//                     googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDkhedmOUePAAgnvFiv8NQ2wmESxUceVkU&callback=initMap'
//                     loadingElement={<div style={{ height: `500px` }} />}
//                     containerElement={<div style={{ height: `400px` }} />}
//                     mapElement={<div style={{ height: `100%` }} />}
//                 />
//         </div>
//     </>
// );



// export default singlePetContainer;



class SinglePetContainer extends Component {

    state = {
        pets: []
    };

    componentDidMount() {
        let url = 'http://localhost:8080/pets/all';
        if(this.props.type) {
            url += `?destination=${this.props.type}`
        }
        axios.get(url)
            .then(response => {
                this.setState({pets: response.data.pets})
            })
    }


    render() {
        let singlePet = this.state.pets.map(pet => {
            return (
                <>
                    <Image link={pet.link} imgUrl={pet.imgUrl}/>
                    <PetDetails
                        name={pet.name}
                        race={pet.race}
                        place={pet.place}
                        description={pet.description}
                        destination={pet.destination}
                        gender={pet.gender}
                    />
                    <GoogleMaps
                        defaultZoom={12}
                        defaultCenter={{ lng: parseFloat(pet.latitude), lat: parseFloat(pet.longitude) }}
                        position={{ lng: parseFloat(pet.latitude), lat: parseFloat(pet.longitude) }}
                        isMarkerShown={false}
                        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDkhedmOUePAAgnvFiv8NQ2wmESxUceVkU&callback=initMap'
                        loadingElement={<div style={{ height: `500px` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </>
            )
        });

        return (
            <>

                <div className={styles.pet}>
                     {singlePet}
                </div>

            </>
        )
    }



}
export default SinglePetContainer;
