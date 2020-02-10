const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET route to display the profile page
router.get("/profile", (req, res, next) => {
  res.render("profile");
});

module.exports = router;
