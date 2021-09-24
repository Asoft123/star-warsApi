const { sequelize } = require("./db/models");
const Main = require("./app");

function startApp() {
  const { app } = Main;
  let port = process.env.PORT || 4000;
  app.listen(port, async (err, success) => {
    if (err) throw err;
    console.log(`Server start on port: ${port}`);
    await sequelize.sync({ force: true });
    console.log("Database synched and Connected");
  });
}

startApp();
