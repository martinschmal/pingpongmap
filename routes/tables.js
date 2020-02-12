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
router.get("/tableDetail/:id", (req, res, next) => {
  console.log(req.params.id);
  Table.findById(req.params.id)
    // .populate("owner comments")
    // .populate({
    //   path: "owner comments",
    //   populate: {
    //     path: "author"
    //   }
    // })
    .then(table => {
      console.log("TABLE", table);
      res.render("tableDetail.hbs", {
        table: table
      });
    })
    .catch(err => {
      next(err);
    });
});

// GET route to display the table edit page
router.get("/:id/edit", (req, res, next) => {
  Table.findById(req.params.id).then(table => {
    res.render("tableEdit.hbs", { table: table });
  });
});

// POST route to submit table edit form
router.post("/:id"),
  (req, res, next) => {
    Table.updateOne(
      { _id: req.params.id },
      {
        location: req.body.location,
        neighbourhood: req.body.neighbourhood,
        description: req.body.description,
        public: req.body.public,
        park: req.body.park,
        playground: req.body.playground,
        indoor: req.body.indoor,
        bar: req.body.bar,
        light: req.body.light,
        condition: req.body.condition
      }
    )
      .then(() => {})
      .catch(err => {
        next(err);
      });
    res.redirect("/:id");
  };

module.exports = router;
