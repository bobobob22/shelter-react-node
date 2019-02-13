import React, {Component} from 'react';
import axios from 'axios';
// import styles from './SinglePet.scss';
import SinglePetContainer from "../../components/SinglePetContainer/SinglePetContainer";

class SinglePet extends Component {

    state = {
        pet: []
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get('http://localhost:8080/pets/' + id)
            .then(response => {
                this.setState({pet: response.data.pet})
            })
    }

    render() {
        return (
            <>
                <SinglePetContainer
                    name={this.state.pet.name}
                    race={this.state.pet.race}
                    description={this.state.pet.description}
                    place={this.state.pet.place}
                    destination={this.state.pet.destination}
                    gender={this.state.pet.gender}
                    imgUrl={this.state.pet.imgUrl}
                    key={this.state.pet.name}/>
            </>
        );
    }
}

export default SinglePet;
