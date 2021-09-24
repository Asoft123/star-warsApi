const CharacterController = require("../controllers/characters");

// Registering all characters routes

let express = require("express");
let router = express.Router();

// Fetch All characters of a movie

router.get("/:movieId", CharacterController.listCharacters);

module.exports = router;
