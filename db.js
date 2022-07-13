const mongoose = require("mongoose");
const config = require("config");
const logger = require("./logger/dev_logger");

host = config.get("db.host");
port = config.get("db.port");
db_name = "linux-app";
URI = `mongodb://${host}:${port}/${db_name}`;

function mongoose_connect() {
  mongoose
    .connect(URI)
    .then(() => {
      logger.info("Connected to Mongodb ...");
    })
    .catch((err) => {
      logger.error(err.message);
    });
}

module.exports = mongoose_connect;
