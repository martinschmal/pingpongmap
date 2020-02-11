const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET route to display the profile page
router.get("/profile", (req, res, next) => {
  console.log("req.user", req.user);
  User.findById(req.user._id).then(result => {
    console.log("results:", result);

    if (req.user) {
      res.render("profile.hbs", { userList: result });
    } else {
      res.redirect("/");
    }
  });
});

// GET route to display a form to edit the profile
router.get("/profile/edit", (req, res, next) => {
  User.findById(req.user._id).then(result => {
    console.log("results:", result);

    if (req.user) {
      res.render("profileEdit.hbs", { userList: result });
    } else {
      res.redirect("/");
    }
  });
});

//   const promises = [User.find({}), User.findById(req.user._id)];

//   if (!req.user) {
//     res.redirect("/");
//     return;
//   }

//   Promise.all(promises)
//     .then(results => {
//       res.render("profileEdit.hbs");
//     })
//     .catch(err => {
//       next(err);
//     });
// });

module.exports = router;
