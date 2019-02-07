import React, {Component} from 'react';
import Animals from '../../components/UI/Animals/Animals'
import styles from './Home.scss';
import axios from 'axios';

class Home extends Component {

    state = {
        animals: []
    };

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/maj60')
            .then(response => {
                const animals = response.data;
                // const updateAnimals = animals.map(post => {
                //     return {
                //         ...post
                //     }
                // });
                this.setState({animals: animals})
            });
    }

    render() {

        let animals = this.state.animals.map(animal => {
            return (<Animals
                    name={animal.name}
                    race={animal.race}
                    description={animal.description}
                    place={animal.place}
                    destination={animal.destination}
                    gender={animal.gender}
                    img={animal.img}
                    key={animal.name}
            />)
        });

        return (
            <div className={styles.home}>
                <p className={styles.home__paragraph}>
                </p>
                {animals}
            </div>
        );
    }
}

export default Home;
