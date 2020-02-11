const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET route to display the profile page
router.get("/profile", (req, res, next) => {
  console.log("sesssssion", req.user);
  if (req.user) {
    res.render("profile");
  } else {
    res.redirect("/");
  }
});

// GET route to display a form to edit the profile
router.get("/profile/:userId/edit", (req, res, next) => {
  const promises = [Author.find({}), user.findById(req.body._id)];

  if (!req.session.user) {
    res.redirect("/");
    return;
  }

  Promise.all(promises)
    .then(results => {
      res.render("profileEdit.hbs");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
