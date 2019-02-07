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
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Address',
                    label: 'Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    handleNewPet = (event) => {
        event.preventDefault();

        const formData = {};

        for (let formEl in this.state.petForm) {
            formData[formEl] = this.state.petForm[formEl].value;
        }
        // console.log("DATA PO SUBMICIE", formData)

        //tutaj bedzie axios put do backendu

    }


    handleInputChange = (event, inputId) => {

        //tworzymy nowy obiekt kopiujaca biezacy stan formularzu
        const updatedPetForm = {
            ...this.state.petForm
        }
        //console.log("updatedPetForm", updatedPetForm)

        //inputId to key czyli np address, name
        //tworzymy nowy tymczasowy obiekt - przetrzymujacy informacje o pojedynczym inpucie
        const updatedPetElement = {
            ...updatedPetForm[inputId]
        }
        // console.log("updatedPetElement", updatedPetElement)


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
            console.log(key, "@@@@");
            console.log(this.state.petForm[key], "!!!!")
            formElements.push({
                id: key,
                config: this.state.petForm[key]
            })
        }

        let form = (
            formElements.map(formEl => (
                <Input
                    key={formEl.id}
                    elementType={formEl.config.elementType}
                    elementConfig={formEl.config.elementConfig}
                    value={formEl.config.value}
                    invalid={!formEl.config.valid}
                    shouldValidate={formEl.config.validation}
                    touched={formEl.config.touched}
                    // label={formEl.config.elementConfig.label}
                    changed={(event) => this.handleInputChange(event, formEl.id)}
                />
            ))
        )
        console.log("stary formularz", this.state.petForm);
        console.log(formElements, "FORMULARZ")
        console.log(form, "FORMULARZYK")


        return (
            <div className={styles.addNewPetForm}>
                <form onSubmit={this.handleNewPet}>
                    {form}
                    <Button
                        btnType="submit-btn"
                        // disabled
                    >
                        Click me
                    </Button>
                </form>
            </div>
        )
    }
}


export default AddNewPetForm;
