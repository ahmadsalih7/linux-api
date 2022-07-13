const app = require("./app");
const mongoose_connect = require("./db");
const config = require("config");
require("dotenv").config();

const port = config.get("app.port");

mongoose_connect();
app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
