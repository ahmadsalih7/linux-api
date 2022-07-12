const app = require("./app");
const config = require("config");
require("dotenv").config();

const port = config.get("app.port");

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
