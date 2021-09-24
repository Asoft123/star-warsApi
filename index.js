const Main = require("./app");

function startApp() {
  const { app } = Main;
  let port = process.env.PORT || 4000;
  app.listen(port, (err, success) => {
    if (err) throw err;
    console.log(`Server start on port: ${port}`);
  });
}

startApp();
