function Main() {
  require("dotenv").config();
  const express = require("express");
  const app = express();
  const bodyParser = require("body-parser");
  const helmet = require("helmet");
  const swaggerUi = require("swagger-ui-express");

  const movieRoute = require("./routes/movies");
  const swaggerDocument = require("./docs/swagger");
  const commentRoute = require("./routes/comments");
  const characterRoute = require("./routes/characters");

  // Used to get and secure header
  app.use(helmet());

  // used to parse JSON and urlencoded body
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Middleware for manually checking Cross site origin access for reaching api endpoints
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }
    next();
  });

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use("/movies", movieRoute);
  app.use("/comments", commentRoute);
  app.use("/characters", characterRoute);

  return { app: app, bodyParser: bodyParser };
}

module.exports = Main();
