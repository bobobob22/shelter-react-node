import React, { Component } from 'react';
import './Lost.scss';

class Lost extends Component {

    componentDidMount() {
        // fetch('http://10.1.1.147:8080/pets/all')
        fetch('http://localhost:8080/pets/all')
        .then(res => {
            console.log(res)
            if(res.status !== 200){
                throw "Chujoza w pobieraniu";
            }
            console.log(res, typeof(res), "response1");
            return res.json()
        })
        .then(resData => console.log(resData))
        .catch(err => console.log(err))
    }

    render() {
    return (
      <div className="Lost">
          <p>
              Shelter Lost
          </p>
      </div>
    );
  }
}

export default Lost;
