const movieController = require("../controllers/movies");

// Registering all movies routes

let express = require("express");
let router = express.Router();

// Fetch all movies

router.get("/", movieController.getMovies);

module.exports = router;
