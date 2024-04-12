const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    username: String,
    message: String,
    room: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  // The __v field hide or turnoff
  // reference: https://stackoverflow.com/questions/12495891/what-is-the-v-field-in-mongoose
  { versionKey: false }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
