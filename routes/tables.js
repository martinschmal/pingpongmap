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

// GET route to display table details page
router.get("/tables/:id", (req, res, next) => {
  Table.findById(req.table._id)
    // .populate("owner comments")
    // .populate({
    //   path: "owner comments",
    //   populate: {
    //     path: "author"
    //   }
    // })
    .then(table => {
      res.render("tableDetail.hbs", {
        tableList: result
      });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
