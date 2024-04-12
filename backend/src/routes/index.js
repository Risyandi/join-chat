// import library
const express = require("express");
const cors = require("cors");
const router = express.Router();

// import controller
const message = require("../controllers/Message");

module.exports = function routes(app) {
  // allow cors access
  app.use(cors());

  // default route
  app.use("/api/v1/", router);

  // homepage
  app.get("/api/v1/", (req, res) => {
    res.json({
      title: "API Join Chat",
      description: "endpoint api join chat",
      version: "1.0",
    });
  });

  // message
  router.post("/create", message.create);
  router.post("/message", message.findAll);
  router.post("/username-message", message.findAllExist);
};
