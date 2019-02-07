
const Pet = require('../models/pet');

exports.getPets = (req, res, next) => {
    const name = req.body.name;
    const address = req.body.address;


    Pet.find()
        .then(pets => {
            res.status(200)
                .json({message: "ZAJEBISCIE POBRANE ZWIERZAKI", pets: pets})
        })
        .catch(err => {
            console.log(err)
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


exports.getSinglePet = (req, res, next ) => {

    //z parametru w urlu
    const petId = req.params.petId;
    Pet.findById(petId)
        .then(pet => {
            if (!pet){
                console.log("DUPA, error, DUPA")
            }

            res.status(200)
                .json({message: 'Fetchet pet', pet: pet})

        })
        .catch(err => console.log(err))


}