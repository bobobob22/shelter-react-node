
import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

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
      <div >
            <form onSubmit={this.handleNewPet}>
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
