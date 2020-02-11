const express = require("express");
const router = express.Router();
const Table = require("../models/Table");

/* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("index");
// });

router.get("/", (req, res, next) => {
  Table.find({})
    .then(result => {
      console.log("result >>> " + result);
      res.render("index.hbs", { tablesList: result, user: req.session.user });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
