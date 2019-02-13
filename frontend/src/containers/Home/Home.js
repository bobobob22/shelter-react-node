import React, {Component} from 'react';
import PetContainer from '../PetContainer/PetContainer'
import styles from './Home.scss';


class Home extends Component {

    state = {
        animals: []
    };
    //
    // componentWillMount() {
    //     axios.get('http://localhost:8080/pets/all')
    //         .then(response => {
    //             const animals = response.data.pets;
    //             console.log(response);
    //             // const updateAnimals = animals.map(post => {
    //             //     return {
    //             //         ...post
    //             //     }
    //             // });
    //             this.setState({animals: animals})
    //         });
    // }

    render() {
        return (
            <PetContainer/>
        );
    }
}

export default Home;


