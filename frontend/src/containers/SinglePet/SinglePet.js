import React, {Component} from 'react';
import axios from "axios";
import Animals from "../../components/UI/Animals/Animals";

class SinglePet extends Component {

    state = {
        singleAnimal: {}
    };

    componentDidMount() {
        if (this.props.match.params.name) {
            axios.get('http://localhost:8080/pets/')
                .then(response => {
                        let mySingleData = response.data;
                        let myFetchedData = mySingleData.filter(e => e.name === this.props.match.params.name);
                        this.setState({singleAnimal: myFetchedData[0]})
                    })
        }
    }

    render() {

        const {
            name,
            race,
            description,

        } = this.state.singleAnimal;

        return (
            <div>
                {console.log(race)}
                <Animals
                    name={name}
                    race={race}
                    link={name}
                />
            </div>
        )
    }

}

export default SinglePet;
