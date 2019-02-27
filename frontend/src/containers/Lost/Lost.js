import React, { Component } from 'react';
import PetContainer from "../PetContainer/PetContainer";
import './Lost.scss';
import PetContainer from '../PetContainer/PetContainer'

import SinglePetContainer from '../../components/SinglePetContainer/SinglePetContainer'
import Axios from 'axios';

class Lost extends Component {

    render() {
    return (
      <div className="Lost">
          <PetContainer type="lost"/>
      </div>
    );
  }
}

export default Lost;
