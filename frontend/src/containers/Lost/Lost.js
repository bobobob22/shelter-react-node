import React, { Component } from 'react';
import PetContainer from "../PetContainer/PetContainer";
import './Lost.scss';

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
