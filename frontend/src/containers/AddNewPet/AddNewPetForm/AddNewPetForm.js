import React, {Component} from 'react';
import styles from './AddNewPetForm.scss';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input'

class AddNewPetForm extends Component {

    state = {
        petForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Pet name',
                    label: 'Pet name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            race: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Pet race',
                    label: 'Pet race'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            place: {
                elementType: 'input',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Place',
                    label: 'Place'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            description: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'input',
                    placeholder: 'Description',
                    label: 'Description'
                },
                value: '',
                valid: false,
                touched: false
            },
            destination: {
                elementType: 'select',
                elementConfig: {
                    label: 'state',
                    options: [
                        {value: 'searching', displayValue: 'Szuka domu'},
                        {value: 'lost', displayValue: 'Zaginiony'},
                        {value: 'founded', displayValue: 'Znaleziono'}
                    ]
                },
                value: 'searching'
            },
            gender: {
                elementType: 'select',
                elementConfig: {
                    label: 'sex',
                    options: [
                        {value: 'male', displayValue: 'male'},
                        {value: 'female', displayValue: 'female'}
                    ]
                },
                value: 'male'
            },
            imgUrl: {
                elementType: 'input',
                elementConfig: {
                    type: 'input',
                    placeholder: 'Image Url (link now)',
                    label: 'Image'
                },
                value: '',
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    };

    handleNewPet = (event) => {
        event.preventDefault();
        const formData = {};

        for (let formEl in this.state.petForm) {
            formData[formEl] = this.state.petForm[formEl].value;
        }
        console.log("DATA PO SUBMICIE", formData);

        fetch('http://localhost:8080/pets/add-new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    name: formData.name,
                    place: formData.place,
                    description: formData.description,
                    destination: formData.destination,
                    gender: formData.gender,
                    race: formData.race,
                    imgUrl: formData.imgUrl
                })
            })
            .then(res => {
                console.log(res, "result", typeof(res));
                return res.json()
            })
            .then(resData => console.log( resData ))
            .catch(err => console.log(err))

    }


    handleInputChange = (event, inputId) => {

        //tworzymy nowy obiekt kopiujaca biezacy stan formularzu
        const updatedPetForm = {
            ...this.state.petForm
        }

        //inputId to key czyli np address, name
        //tworzymy nowy tymczasowy obiekt - przetrzymujacy informacje o pojedynczym inpucie
        const updatedPetElement = {
            ...updatedPetForm[inputId]
        }

        //pobieramy wartosc
        updatedPetElement.value = event.target.value;
        //input dotkienty -> true
        updatedPetElement.touched = true;
        //nowa wartosc inputa oraz touched idzie do formularzu
        updatedPetForm[inputId] = updatedPetElement;

        //tutaj bedzie walidacja tez -> wtedy form is valid bedzie mialo znaczenie
        // let formIsValid = true;

        // for (let inputId in updatedPetForm) {
        //     formIsValid = updatedPetForm[inputId].valid && formIsValid;
        // }

        //ustawiamy nowy state -> podmieniamy wartosc dotychczasowego
        this.setState({
            petForm: updatedPetForm,
            // formIsValid: formIsValid
        });


    }


    render() {
        const formElements = [];

        //bierzemy stary formularzyk i podmieniamy ze nazwa to id, config cala reszta
        for (let key in this.state.petForm) {
            formElements.push({
                id: key,
                config: this.state.petForm[key]
            })
        }

        let form = (
            formElements.map((formEl, index) => (
                <>
                 {/* {index % 2 == 0 ? '<div className="wrapper">'  : '' } */}

                    <Input
                    key={formEl.id}
                    elementType={formEl.config.elementType}
                    elementConfig={formEl.config.elementConfig}
                    value={formEl.config.value}
                    invalid={!formEl.config.valid}
                    shouldValidate={formEl.config.validation}
                    touched={formEl.config.touched}
                    label={formEl.config.elementConfig.label}
                    changed={(event) => this.handleInputChange(event, formEl.id)}
                    />

                 {/* {index % 2 == 0 ?  '</div>'  : ''} */}

                </>
            ))
        )

        return (
            <div className={styles.addNewPetForm}>
                <form className={styles.Form} onSubmit={this.handleNewPet}>
                    {form}
                    <Button
                        btnClass="submit-btn"
                        // disabled
                    >
                        Add new pet
                    </Button>
                </form>
            </div>
        )
    }
}


export default AddNewPetForm;
