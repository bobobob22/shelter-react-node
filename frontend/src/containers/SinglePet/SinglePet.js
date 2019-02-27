import React, {Component} from 'react';
import axios from 'axios';
import styles from './SinglePet.scss';
import Image from '../../components/UI/Image/Image'

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
            <div className={styles.SinglePet}>
                <h1>{this.state.pet.name}</h1>
                <p>{this.state.pet.race}</p>
                <p>{this.state.pet.description}</p>

                <p>Ikonka płci: {this.state.pet.gender}</p>
                <p>google mapy: {this.state.pet.place}</p>
                <p>Status: {this.state.pet.destination}</p>

                <p>Galeria (komponent galerii gdy bedzie wiecej zdjec anizeli jedno (input type multiple)): 
                    <Image imgUrl={this.state.pet.imgUrl} lightbox="true" />
                </p>

            </div>
        );
    }
}

export default SinglePet;
