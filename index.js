const express = require("express");

//App setup
const app = express();
const server = app.listen(3000, () => {
  console.log("Listening on port 3000");
});

//Static files

app.use(express.static("public"));
