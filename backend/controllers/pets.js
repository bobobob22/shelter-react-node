const { validationResult } = require('express-validator/check');
const Pet = require('../models/pet');

exports.getPets = (req, res, next) => {
    const destination = req.query.destination;
    const place = req.query.place;
    const filters = {};

    if (destination) {
        filters.destination = destination
    }
    if (place) {
        filters.place = place;
    }

    Pet.find({ ...filters })
        .limit(10)
        .sort({ updatedAt: -1 })
        .then(pets => {
            res.status(200)
                .json({ pets: pets })
        })
        .catch(err => {
            console.log(err)
        })
};

exports.addPet = (req, res, next) => {

    console.log(req, "REQ")
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, data is incorrect');
        error.statusCode = 422;
        throw error;
    }

    if (!req.file){
        const error = new Error('No image provided');
        error.statusCode = 422;
        throw error;
    }

    const name = req.body.name;
    const place = req.body.place;
    const description = req.body.description;
    const destination = req.body.destination;
    const gender = req.body.gender;
    const race = req.body.race;
    const imgUrl = req.file.path;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    const pet = new Pet({
        name: name,
        place: place,
        description,
        destination,
        gender,
        race,
        imgUrl,
        latitude,
        longitude,
        creator: { name: 'Dawid' },
        createdAt: new Date()
    });

    pet.save()
        .then(result => {
            console.log(result)
            res.status(201).json({
                message: 'Pet added excellent',
                pet: result
            })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })
};



exports.getSinglePet = (req, res, next) => {

    const petId = req.params.petId;

    Pet.findById(petId)
        .then(pet => {
            if (!pet) {
                console.log("Niestety nie udalo sie znalezc zwierza")
            }

            res.status(200)
                .json({ message: 'Fetchet pet', pet: pet })

        })
        .catch(err => console.log(err))

}
