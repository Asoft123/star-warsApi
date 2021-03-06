const db = require("../db/models");

// Inserts Individual comments

exports.save = async function (comment) {
  try {
    await db.Comments.create(comment);
  } catch (e) {
    return Promise.reject(e);
  }
};

// Gets comments by movieId

exports.getCommentById = async function (movieId) {
  try {
    const data = await db.Comments.findAndCountAll({
      where: {
        movie_id: movieId,
      },
      order: [["createdAt", "DESC"]],
    });

    return data;
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};
