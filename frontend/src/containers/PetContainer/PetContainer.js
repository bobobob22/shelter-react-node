import React, {Component} from 'react';
import styles from './PetContainer.scss';
import Image from '../../components/UI/Image/Image';
import axios from 'axios';

// import PropTypes from 'prop-types';
import PetDetails from '../../components/PetDetails/PetDetails';
// import GoogleMap from '../GoogleMap/GoogleMap';

import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'


class PetContainer extends Component {

    state = {
        pets: [],

    };

    componentDidMount() {

        const token = localStorage.getItem('token');
        const expiryDate = localStorage.getItem('expiryDate');
        if (!token || !expiryDate) {
          return;
        }
        // if (new Date(expiryDate) <= new Date()) {
        //   this.logoutHandler();
        //   return;
        // }
        const userId = localStorage.getItem('userId');
    
        this.setState({ isAuth: true, token: token, userId: userId });

        // const remainingMilliseconds =
        // new Date(expiryDate).getTime() - new Date().getTime();
        // this.setAutoLogout(remainingMilliseconds);



        let url = 'http://localhost:8080/pets/all';
        if(this.props.type) {
            url += `?destination=${this.props.type}`
        }
        // fetch(url, {
        //     headers: {
        //         Authorization: 'Bearer' + this.props.token
        //     }
        // })
        axios.get(url)
        
            .then(response => {
                this.setState({pets: response.data.pets})
            })
    }


    render() {
        let singlePet = this.state.pets.map(pet => {
            return (
                <> 
                    <Image link={'pet/' + pet._id} imgUrl={pet.imgUrl}/>
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
           
                <div 
                  className={styles.PetContainer}
                >
                   {singlePet}
                </div>

          
        )
    }



}
export default PetContainer;
