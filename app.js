// IMPORT PACKAGES
const express = require("express");
const logger = require("morgan");
const projects = require("./data/projects");

// CREATE EXPRESS APP
const app = express();

const port = process.env.PORT || 5005;

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
