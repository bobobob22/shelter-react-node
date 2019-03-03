
import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import styles from './Login.scss'

import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'

class Login extends Component {

    state = {
        userForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email',
                    label: 'Your email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your password',
                    label: 'Your password'
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
    };



    checkLogin = (event) => {
        event.preventDefault();
        const formData = {};

        for (let formEl in this.state.userForm) {
            formData[formEl] = this.state.userForm[formEl].value;
        }

        console.log(formData);

        fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            })
            .then(res => {
                return res.json()
            })
            .then(resData => console.log( resData ))
            .catch(err => console.log(err))

    }


    handleInputChange = (event, inputId) => {

      
        const updatedUserForm = {
            ...this.state.userForm
        }

        const updatedUserElement = {
            ...updatedUserForm[inputId]
        }

        updatedUserElement.value = event.target.value;
        updatedUserElement.touched = true;
        updatedUserForm[inputId] = updatedUserElement;

        this.setState({
            userForm: updatedUserForm,
            // formIsValid: formIsValid
        });


    }




    render() {
        const formElements = [];

        for (let key in this.state.userForm) {
            formElements.push({
                id: key,
                config: this.state.userForm[key]
            })
        }

        let form = (
            formElements.map((formEl, index) => (
                <>
          
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
              
            
                </>
            ))
        )
        
    return (
      <div className={styles.Login}>
 
   
            <form onSubmit={this.checkLogin}>
                    {form}
                    <Button
                        btnClass="submit-btn center-btn"
                        // disabled
                    >
                        Login
                    </Button>
            </form>
      </div>
    );
  }
}

export default Login;
