
const Pet = require('../models/pet');

exports.getPets = (req, res, next) => {
    const name = req.body.name;
    const address = req.body.address;
    Pet.find()
        .then(pets => {
            res.status(200)
                .json( {pets: pets} )
        })
        .catch(err => {
            console.log(err)
        })
};


exports.addPet = (req, res, next) => {
    const name = req.body.name;
    const place = req.body.place;
    const description = req.body.description;
    const destination = req.body.destination;
    const gender = req.body.gender;
    const race = req.body.race;
    const imgUrl = req.body.imgUrl;

    const pet = new Pet({
        name: name,
        place: place,
        description,
        destination,
        gender,
        race,
        imgUrl,
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
    console.log(petId);

    
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