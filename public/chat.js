//Make connection
const socket = io.connect("http://localhost:3000");
// console.log(socket);

//Query DOM
const message = document.getElementById("message");
const handle = document.getElementById("handle");
const send = document.getElementById("send");
const output = document.getElementById("output");

//Emit events

send.addEventListener("click", () => {
  //   console.log("click");
  //it will emit the message to the server
  //emit(nameofthemessage, data we are sending to the server)
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
});

//Listen for events
socket.on("chat", (data) => {
  output.innerHTML +=
    "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
});
