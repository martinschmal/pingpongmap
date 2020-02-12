const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET route to display the profile page
router.get("/profile", (req, res, next) => {
  console.log("req.user", req.user);
  if (req.user) {
    User.findById(req.user._id).then(result => {
      console.log("user logged in, direct to profile.hbs");
      res.render("profile.hbs", { userList: result });
    });
  } else {
    console.log("user logged out from profile, redirect to /");
    res.redirect("/");
  }
});

// GET route to display a form to edit the profile
router.get("/profile/edit", (req, res, next) => {
  if (req.user) {
    User.findById(req.user._id).then(result => {
      res.render("profileEdit.hbs", { userList: result });
    });
  } else {
    console.log("user logged out from edit page, redirect to /");
    res.redirect("/");
  }
});

/// POST route to submit user edit form
router.post("/profile/:id", (req, res, next) => {
  User.updateOne(
    { _id: req.params.id },
    {
      username: req.body.username,
      email: req.body.email,
      profilepicture: req.body.profilepicture,
      tables_played: req.body.tables_played
    }
  )
    .then(() => {})
    .catch(err => {
      next(err);
    });
  res.redirect(`/profile`);
});

// GET route to delete user
router.get("/profile/delete", (req, res, next) => {
  if (req.user) {
    User.deleteOne({ _id: req.user._id })
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        next(err);
      });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
