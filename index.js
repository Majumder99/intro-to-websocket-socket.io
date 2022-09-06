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
    //it will send all the client the data value. that's why io.sockets
    io.sockets.emit("chat", data);
  });

  //broadcast means that it will send data to the other client not it's own
  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});
