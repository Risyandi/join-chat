const Message = require("../models/Message");

// create message
exports.create = (req, res) => {
  // validate request
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({
      status: 400,
      error: true,
      message: "content cannot be empty!",
    });
  }

  // create customers new
  const message = new Message({
    username: req.body.username,
    message: req.body.message,
    room: req.body.room,
    date: req.body.date,
  });

  try {
    message.save();
    res.send({
      status: 201,
      error: false,
      data: message,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get message by roomId
exports.findAll = (req, res) => {
  // validate request
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({
      status: 400,
      error: true,
      message: "content cannot be empty!",
    });
  }

  try {
    const newMessage = Message.find({ room: req.body.room }).exec();
    newMessage.then((dataMessage) => {
      res.send({
        status: 200,
        error: false,
        data: dataMessage,
      });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get username in message exist or not
exports.findAllExist = (req, res) => {
  // validate request
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({
      status: 400,
      error: true,
      message: "content cannot be empty!",
    });
  }

  try {
    const countExistUsername = Message.countDocuments({
      username: req.body.username,
    }).exec();
    countExistUsername.then((dataUsername) => {
      res.send({
        status: 200,
        error: false,
        data: dataUsername,
        exist: dataUsername > 0 ? true : false,
      });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
