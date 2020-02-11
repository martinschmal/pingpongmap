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

module.exports = router;
