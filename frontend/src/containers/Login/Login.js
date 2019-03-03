
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
      <div >
          <div className={styles.GoogleMaps}>
                <GoogleMaps
                    defaultZoom={10}
                    defaultCenter={{ lat: 50.397, lng: 19.644 }}
                    isMarkerShown={false}
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDkhedmOUePAAgnvFiv8NQ2wmESxUceVkU&callback=initMap'
                    loadingElement={<div style={{ height: `500px` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
   
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
