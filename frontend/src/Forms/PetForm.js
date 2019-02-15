export default {
    petForm: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Imię',
                label: 'Imię'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        city: {
            elementType: 'input',
            elementConfig: {
                type: 'textarea',
                placeholder: 'Miasto',
                label: 'Miasto'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        province: {
            elementType: 'select',
            elementConfig: {
                label: 'Województwo',
                options: [
                    {value: 'dolnoslaskie', displayValue: 'Dolnośląskie'},
                    {value: 'kujawsko-pomorskie', displayValue: 'Kujawsko-pomorskie'},
                    {value: 'lubelskie', displayValue: 'Lubelskie'},
                    {value: 'lubuskie', displayValue: 'Lubuskie'},
                    {value: 'lodzkie', displayValue: 'Łódzkie'},
                    {value: 'malopolskie', displayValue: 'Małpolskie'},
                    {value: 'mazowieckie', displayValue: 'Mazowieckie'},
                    {value: 'opolskie', displayValue: 'Opolskie'},
                    {value: 'podkarpackie', displayValue: 'Podkarpackie'},
                    {value: 'podlaskie', displayValue: 'Podlaskie'},
                    {value: 'pomorskie', displayValue: 'Pomorskie'},
                    {value: 'slaskie', displayValue: 'Śląskie'},
                    {value: 'swietokrzyskie', displayValue: 'Świętokrzyskie'},
                    {value: 'warminsko-mazurskie', displayValue: 'Warmińsko-Mazurskie'},
                    {value: 'wielkopolskie', displayValue: 'Wielkopolskie'},
                    {value: 'zachodniopomorskie', displayValue: 'Zachodniopomorskie'}
                ]
            },
            value: 'dolnoslaskie'
        },
        race: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Rasa',
                label: 'Rasa'
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
                placeholder: 'Opis',
                label: 'Opis'
            },
            value: '',
            valid: false,
            touched: false
        },
        destination: {
            elementType: 'select',
            elementConfig: {
                label: 'Stan',
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
                label: 'Płeć',
                options: [
                    {value: 'male', displayValue: 'Samiec'},
                    {value: 'female', displayValue: 'Samica'}
                ]
            },
            value: 'male'
        },
        imgUrl: {
            elementType: 'input',
            elementConfig: {
                type: 'input',
                placeholder: 'Zdjęcie (adres)',
                label: 'Zdjęcie'
            },
            value: '',
            valid: false,
            touched: false
        }
    }
}
