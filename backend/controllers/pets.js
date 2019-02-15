
const Pet = require('../models/pet');

exports.getPets = (req, res, next) => {
    const destination = req.query.destination;
    const place = req.query.place;
    const filters = {};

    if(destination){
        filters.destination = destination
    }

    if (place) {
        filters.place = place;
    }


    console.log(filters);

    Pet.find({...filters})
        .limit(10)
        .sort({updatedAt: -1})
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
    const city = req.body.city;
    const province = req.body.province;
    const race = req.body.race;
    const description = req.body.description;
    const destination = req.body.destination;
    const gender = req.body.gender;
    const imgUrl = req.body.imgUrl;

    const pet = new Pet({
        name,
        city,
        province,
        race,
        description,
        destination,
        gender,
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

    Pet.findById(petId)
        .then(pet => {
            if (!pet){
                console.log("Niestety nie udalo sie znalezc zwierza")
            }

            res.status(200)
                .json({message: 'Fetchet pet', pet: pet})

        })
        .catch(err => console.log(err))


}
