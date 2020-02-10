const express = require("express");
const router = express.Router();
const mapboxToken = process.env.MAPBOXTOKEN;

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { mapboxToken: JSON.stringify(mapboxToken) });
});

module.exports = router;
