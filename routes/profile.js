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

/// edit user
router.get("/profile/:id/edit", (req, res, next) => {
  User.findById(req.user._id)
    .then(userData => {
      res.render("profileEdit.hbs", { userList: userData });
    })
    .catch(err => {
      next(err);
    });
});

/// edit form user
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
    .then(() => {
      // console.log(" req.params.id--->" + req.params.id);
      // console.log("req.body--->" + req.body);
      // res.redirect(`/profile/${req.params.id}`);
    })
    .catch(err => {
      next(err);
    });
  res.redirect(`/profile`);
});

// delete User
router.get("/profile/:id/delete", (req, res, next) => {
  if (req.user) {
    User.deleteOne({ _id: req.params.id })
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
