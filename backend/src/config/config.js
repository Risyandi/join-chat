require("dotenv").config();

const config = {
  mongoDatabase: {
    URL: process.env.MONGO_URL || "localhost:27017",
    NAME: process.env.MONGO_DB_NAME || "nameDB",
  },
  app: {
    port: process.env.PORT || 3001,
    url_client: process.env.URL_CLIENT || "http://localhost:3000",
  },
};

module.exports = {
  config,
};
