const express = require("express");

const ResourceRouter = require("./routes/ResourceRouter");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello world!");
});

server.use("/resource", ResourceRouter);

module.exports = server;
