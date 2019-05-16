const startServer = require("./startServer");

const port = process.env.PORT || 4000;

startServer().listen(port, () => {
  console.log("server started on port 4000");
});
