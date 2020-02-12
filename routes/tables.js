const express = require("express");
const router = express.Router();
const Table = require("../models/Table");

// GET route to show all tables
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

// GET route to display Table Add page
router.get("/new", (req, res) => {
  res.render("tableAdd.hbs");
});

// POST route to submit the Table Add form
router.post("/", (req, res, next) => {
  Table.create(
    // NOT FINAL:--------------------------------
    {
      location: req.body.location,
      neighbourhood: req.body.neighbourhood,
      coordinates: req.body.coordinates,
      description: req.body.description,
      public: req.body.public,
      park: req.body.park,
      playground: req.body.playground,
      indoor: req.body.indoor,
      bar: req.body.bar,
      light: req.body.light,
      condition: req.body.condition,
      table_image: req.body.table_image
    }
  )
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      next(err);
    });
});

// GET route to display table details page
router.get("/:id", (req, res, next) => {
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

// GET route to delete a table
router.get("/:id/delete", (req, res, next) => {
  // Role owner needs to be defined in model--------------------
  if (req.user.role === "owner") {
    Table.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        next(err);
      });
  } else {
    Table.deleteOne({ _id: req.params.id, owner: req.user._id })
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        next(err);
      });
  }
});

module.exports = router;
