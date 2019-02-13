import React, {Component} from 'react';
import PetContainer from '../../containers/PetContainer/PetContainer'


class ForAdoption extends Component {
    render() {
        return (
            <div className="searching">
                <PetContainer type="searching"/>
            </div>
        )
    }
}

export default ForAdoption;
