const mongoose = require("mongoose");
const config = require("../config/config");
const { URL, NAME } = config.config.mongoDatabase;

/**
 * configuration connection to mongo database
 */

let mongoUrlConnection = `mongodb://${URL}/${NAME}`;
mongoose.connect(mongoUrlConnection);

mongoose.connection.on("connected", () => {
  console.log("connected to mongo database succesfully");
});

mongoose.connection.on("reconnected", () => {
  console.log("Mongo has reconnected");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting to mongo database", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("disconnected from mongo database");
});
