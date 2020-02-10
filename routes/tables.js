const express = require("express");
const router = express.Router();
const Table = require("../models/Table");

router.get("/tables", (req, res) => {
  console.log("hello");
  Table.find()
    .then(tables => {
      res.render("index");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
