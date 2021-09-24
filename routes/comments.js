const CommentController = require("../controllers/comments");

// Registering all comments routes
let express = require("express");
let router = express.Router();

// Insert comment into database
router.post("/", CommentController.save);

// Fetch comment for a movie
router.get("/:movieId", CommentController.getCommentByMovieId);

module.exports = router;
