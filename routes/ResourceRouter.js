const express = require("express");

const Resource = require("./resourceModel");

const router = express.Router();

router.get("/", (req, res) => {
  Resource.findResource()
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resource", err });
    });
});

module.exports = router;
