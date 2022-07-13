const mongoose = require("mongoose");
const config = require("config");

host = config.get("db.host");
port = config.get("db.port");
db_name = "linux-app";
URI = `mongodb://${host}:${port}/${db_name}`;

function mongoose_connect() {
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = mongoose_connect;
