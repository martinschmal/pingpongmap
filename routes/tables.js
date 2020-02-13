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
router.post("/new", (req, res, next) => {
  console.log(req.body);

  Table.create(
    // NOT FINAL:--------------------------------
    {
      location: req.body.location,
      neighbourhood: req.body.neighbourhood,
      coordinates: req.body.coordinates,
      description: req.body.description,
      public: !!req.body.public,
      park: !!req.body.park,
      playground: !!req.body.playground,
      indoor: !!req.body.indoor,
      bar: !!req.body.bar,
      light: !!req.body.light,
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
router.get("/edit/:id", (req, res, next) => {
  Table.findById(req.params.id).then(table => {
    res.render("tableEdit.hbs", { table: table });
  });
});

// POST route to submit table edit form
router.post("/edit/:id", (req, res, next) => {
  console.log("post >" + req.body);
  Table.updateOne(
    { _id: req.params.id },
    {
      location: req.body.location,
      neighbourhood: req.body.neighbourhood,
      description: req.body.description,
      // lat: req.body.geometry.coordinates[0],
      lng: req.body.geometry.coordinates[1],
      public: !!req.body.public,
      park: !!req.body.park,
      playground: !!req.body.playground,
      indoor: !!req.body.indoor,
      bar: !!req.body.bar,
      light: !!req.body.light,
      condition: req.body.condition
    }
  )
    .then(() => {
      res.redirect("/tables/tableDetail/" + req.params.id);
    })
    .catch(err => {
      next(err);
    });
});

// GET route to book a table
router.get("/tableCheckIn/:id", (req, res, next) => {
  Table.updateOne(
    { _id: req.params.id },
    {
      occupied: true
    }
  )
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      next(err);
    });
});

// GET route to delete a table
// router.get("/delete/:id", (req, res, next) => {
//   // Role owner needs to be defined in model--------------------
//   if (req.user.role === "owner") {
//     Table.deleteOne({ _id: req.params.id })
//       .then(() => {
//         res.redirect("/");
//       })
//       .catch(err => {
//         next(err);
//       });
//   } else {
//     Table.deleteOne({ _id: req.params.id, owner: req.user._id })
//       .then(() => {
//         res.redirect("/");
//       })
//       .catch(err => {
//         next(err);
//       });
//   }
// });

module.exports = router;
