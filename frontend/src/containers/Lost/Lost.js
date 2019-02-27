import React, { Component } from 'react';
import './Lost.scss';
import PetContainer from '../PetContainer/PetContainer'

import SinglePetContainer from '../../components/SinglePetContainer/SinglePetContainer'
import Axios from 'axios';

class Lost extends Component {

    render(){
        return (
             <>
                <PetContainer type="lost"/>
             </>
        );
    }
}

export default Lost;
