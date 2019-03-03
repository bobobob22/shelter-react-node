const express = require('express');

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
router.post("/add-new", petsController.addPet);

//get single pet
router.get("/:petId", petsController.getSinglePet);


module.exports = router;