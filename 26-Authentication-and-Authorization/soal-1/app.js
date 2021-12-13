const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");

const app = express();
const PORT = 3002;

// set cookies to 1 minutes (60000 miliseconds)
const oneMinute = 60000;

//session middleware
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneMinute },
    resave: false,
  })
);

// parsing the incoming data
app.use(express.json());

// parse urlencoded menjadi object
app.use(express.urlencoded({ extended: true }));

//mengambil tampilan html pada folder views
app.use(express.static("views"));

// cookie parser middleware
app.use(cookieParser());

//username and password
const myusername = "user1";
const mypassword = "mypassword";

// variable to save a session
var session;

app.get("/", (req, res) => {
  session = req.session;
  if (session.userid) {
    res.send(
      "Welcome User <a href='/logout'>click to logout</a>"
    );
  } else
    res.sendFile("views/index.html", { root: "views" });
});

app.get("/user", (req, res) => {
  session = req.session;
  console.log(session);
  if (session.id) {
    res.send(
      `<h1>Hello, ${req.session.userid} welcome <a href=\'/logout'>click to logout</a><h1>
       <h2>Session Id, ${req.session.id}<h2>
      `
    );
  } else
    res.send(
      `<h1>Please login first, <a href=\'/'>click to login</a><h1>
    `
    );
});

app.post("/user", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const requestSession = req.session;

  if (username == myusername && password == mypassword) {
    requestSession.userid = req.body.username;
    res.send(
      `<h1>Hello, ${req.session.userid} welcome <a href=\'/logout'>click to logout</a><h1>
       <h2>Session Id, ${req.session.id}<h2>
      `
    );
  } else {
    res.send("Unauthenticated user");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(PORT, () =>
  console.log(`Server Running at port ${PORT}`)
);