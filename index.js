const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const users = [
  { id: 1, name: "Hamim", email: "hamim@gmail.com" },
  { id: 2, name: "Samim", email: "samim@gmail.com" },
  { id: 3, name: "Jamim", email: "jamim@gmail.com" },
  { id: 4, name: "Lamim", email: "lamim@gmail.com" },
];

app.use(cors());

app.get("/", (req, res) => {
  res.send("User Management server in running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`server is Running on PORT: ${port}`);
});
