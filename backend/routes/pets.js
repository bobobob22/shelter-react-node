const express = require('express');

const petsController = require('../controllers/pets');

const router = express.Router();

//get
router.get("/all", petsController.getPets);

//POST - adding new pet
router.post("/add-new", petsController.addPet);

//get single pet
router.get("/:petId", petsController.getSinglePet);


module.exports = router;