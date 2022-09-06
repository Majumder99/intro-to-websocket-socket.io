const express = require("express");
const socket = require("socket.io");

//App setup
const app = express();
const server = app.listen(3000, () => {
  console.log("Listening on port 3000");
});

//Static files

app.use(express.static("public"));

//Socket.io setup
const io = socket(server);

io.on("connection", (socket) => {
  console.log(`made socket connection ${socket.message}`);
  //We have used socket.on because this will get the data from the client
  //Server is listening using this method
  socket.on("chat", (data) => {
    // console.log(data);
    io.sockets.emit("chat", data);
  });
});
