import React, { Component } from 'react';

import './Lost.scss';
import PetContainer from '../PetContainer/PetContainer'


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
