const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// middleware parse JSON body dari HTTP request
const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = 3003;

const users = [
  {
    username: "terra",
    password: "password123admin",
    role: "admin",
  },
  {
    username: "dave",
    password: "password123member",
    role: "member",
  },
];

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username, password);

  const user = users.find((u) => {
    return (
      u.username === username && u.password === password
    );
  });

  if (user) {
    const token = jwt.sign({ username: user.username, role: user.role },
      process.env.SECRET_TOKEN
    );
    res.json({ token });
  } else {
    res.send("Username or password incorrect");
  }
});

app.listen(PORT, () =>
  console.log(`Server Running at port ${PORT}`)
);
