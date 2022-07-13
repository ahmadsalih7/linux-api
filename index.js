const app = require("./app");
const mongoose_connect = require("./db");
const config = require("config");
const logger = require("./logger/dev_logger");
require("dotenv").config();

const port = config.get("app.port");
const host = config.get("app.host");

mongoose_connect();
app.listen(port, () => {
  logger.info(`Server is running on http://${host}:${port} ...`);
});
