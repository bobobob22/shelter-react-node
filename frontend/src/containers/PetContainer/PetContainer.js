import React, {Component} from 'react';
import SinglePetContainer from '../../components/SinglePetContainer/SinglePetContainer'
import axios from 'axios';
import styles from './PetContainer.scss'

class PetContainer extends Component {

    state = {
        pets: []
    };

    componentDidMount() {
        let url = 'http://localhost:8080/pets/all';
        if(this.props.type){
            url = `http://localhost:8080/pets/all/?destination=${this.props.type}`
        }
        axios.get(url)
            .then(response => {
                this.setState({pets: response.data.pets})
            })
    }

    render() {
        let singlePet = this.state.pets.map(pet => {
            return (
                <SinglePetContainer
                    name={pet.name}
                    race={pet.race}
                    description={pet.description}
                    place={pet.place}
                    destination={pet.destination}
                    gender={pet.gender}
                    imgUrl={pet.imgUrl}
                    key={pet.name}
                    link={pet._id}/>
            )
        });

        return (
            <>
                {singlePet}
            </>
        )
    }
}

export default PetContainer;
