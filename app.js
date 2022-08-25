const express = require("express");
const path = require("path");
const app = express();

app.use("/builds", express.static(path.join(__dirname, "/builds")));
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use("/scripts", express.static(path.join(__dirname, "/scripts")));
app.use("/stylesheets", express.static(path.join(__dirname, "/stylesheets")));
app.use("/content", express.static(path.join(__dirname, "/content")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/dev", (req, res) => {
  res.sendFile(path.join(__dirname, "dev.html"));
});
app.listen(80, () => {
  console.log("running at port", 80);
});
