const express = require("express");
//const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
//const bcrypt = require("bcrypt");
//const bcryptSalt = 10;

// GET route to display the login page
router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

// POST route to login
//router.post("/login")

// GET route to display the signup page
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

module.exports = router;
