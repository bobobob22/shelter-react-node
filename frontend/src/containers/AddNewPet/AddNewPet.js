import React, {Component} from 'react';
import styles from './AddNewPet.scss';

import AddNewPetForm from './AddNewPetForm/AddNewPetForm';

class AddNewPet extends Component {
    render() {
        return (
            <div className={styles.addNewPet}>
                <AddNewPetForm/>
            </div>
        );
    }
}

export default AddNewPet;
