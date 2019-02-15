import React, {Component} from 'react';
import styles from './AddNewPetForm.scss';
import PetForm from '../../../Forms/PetForm'
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input'

class AddNewPetForm extends Component {

    state = {
        petForm: PetForm.petForm,
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
                city: formData.city,
                province: formData.province,
                race: formData.race,
                description: formData.description,
                destination: formData.destination,
                gender: formData.gender,
                imgUrl: formData.imgUrl
            })
        })
            .then(res => {
                console.log(res, "result", typeof (res));
                return res.json()
            })
            .then(resData => console.log(resData))
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
                        {console.log(this.state.petForm)}
                    </Button>
                </form>
            </div>
        )
    }
}


export default AddNewPetForm;


function solution(string) {
    let newString = [].push(string);
    newString.map(e => e.toUpperCase());
    console.log(newString);
}
