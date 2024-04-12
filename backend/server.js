require("dotenv").config();
require("./src/models/mongoDatabase");
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const path = require("path");
const config = require("./src/config/config");
const app = express();
const server = http.createServer(app);

// enable and by passed CORS
app.use(cors());

// parser request of content-type: application/json
app.use(express.json());

// parser request of content-type: application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: false,
  })
);

// require routes
require("./src/routes")(app);

// set express static
app.use("/public", express.static(path.join(__dirname, "public")));

// set default request
app.get("/", (req, res) => {
  res.json({
    title: "welcome join chat",
    description: "endpoint join chat",
    version: "1.0",
  });
});

// express application will listen to port mentioned in our configuration
const myServer = server.listen(config.config.app.port, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${config.config.app.port}`);
});

const socketIo = new Server(myServer, {
  cors: {
    origin: config.config.app.url_client, // client whitelist cors
    methods: ["GET", "POST"],
  },
});

const CHAT_BOT = "joinchat-bot";
let allUsers = [];

socketIo.on("connection", (socket) => {
  // user connected
  console.log(`user connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    /**
     * - data sent from clien when join_room event
     * - join the user to a socket room
     */
    const { username, room } = data;
    socket.join(room);

    console.log("username:", username);
    console.log("room:", room);

    // current timestamp
    let createdTime = Date.now();

    // broadcast message notified user has joined
    socket.to(room).emit("receive_message", {
      message: `${username} has joined in the chat room`,
      username: CHAT_BOT,
      createdTime,
    });

    // welcome message
    socket.emit("receive_message", {
      message: `Welcome ${username}! to chat room ${room} `,
      username: CHAT_BOT,
      createdTime,
    });

    // counting of users in the room
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit("chatroom_users", chatRoomUsers);
    socket.emit("chatroom_users", chatRoomUsers);

    console.log(allUsers, "allUsers joined");
  });

  socket.on("send_message", (data) => {
    const { room } = data;
    socketIo.in(room).emit("receive_message", data);
  });
});
