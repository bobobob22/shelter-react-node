const express = require('express');
const { body } = require('express-validator/check');

const petsController = require('../controllers/pets');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

//get
router.get(
    "/all",
    //  isAuth,
     petsController.getPets
);

//POST - adding new pet
router.post(
    "/add-new", 
    [
        body('name').trim().isLength({min: 5}),
        body('race').trim().isLength({min: 3}),
        body('place').trim().isLength({min: 3}),
        body('description').trim().isLength({min: 5})
    ], 
    petsController.addPet);

//get single pet
router.get( "/:petId", petsController.getSinglePet);


module.exports = router;