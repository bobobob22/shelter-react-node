const express = require('express');

const petsController = require('../controllers/pets');

const router = express.Router();

//get
router.get("/all", petsController.getPets);

//POST - adding new pet
router.post("/add-new", petsController.addPet);



module.exports = router