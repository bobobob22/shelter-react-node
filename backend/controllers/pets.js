
const Pet = require('../models/pet');

exports.getPets = (req, res, next) => {
    res.status(200)
        .json({
            pets: [{
                _id: '1',
                name: 'DUPAA',
                content: 'CONTENT',
                date: new Date()
            }]
        })
};


exports.addPet = (req, res, next) => {
    const name = req.body.name;
    const address = req.body.address;

    const pet = new Pet({
        name: name,
        address: address,
        creator: {name: 'Dawid'},
    });

    pet.save()
        .then(result => {
            console.log(result)
            res.status(201).json({
                message: 'Pet added excellent',
                pet: result
            })
        })
        .catch(err => console.log(err))
};




// fetch('http://localhost:8080/pets/all', {
//     method: 'GET',
//     body: JSON.stringify({
//         title: 'A new pet',
//         content: 'DUPAA'
//     }),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
// .then(res => {
//     if(res.status !== 200){
//         throw "Chujoza";
//     }
//     return res.json()
// })
// .then(resData => console.log(resData))
// .catch(err => console.log(err))




// fetch('http://localhost:8080/pets/add-new', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'A new pet',
//         address: 'DUPAA'
//     })

// })
// .then(res => {
//     res.json()
// })
// .then(resData => console.log(resData))
// .catch(err => console.log(err))