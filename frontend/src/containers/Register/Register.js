
import React, { Component } from 'react';
import styles from './Register.scss';
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

class Register extends Component {

    state = {
        userForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name',
                    label: 'Your name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
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
            },
            confirmpassword: {
                elementType: 'password',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Confirm password',
                    label: 'Confirm password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        loading: false
    };

    componentDidMount() {

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
      <div className={styles.Register}>
            <form onSubmit={this.handleNewPet}>
                    {form}
                    <Button
                        btnClass="submit-btn center-btn"
                        // disabled
                    >
                        Register
                    </Button>
            </form>
      </div>
    );
  }
}

export default Register;
