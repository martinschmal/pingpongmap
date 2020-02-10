const express = require("express");
const router = express.Router();
const mapboxToken = process.env.MAPBOXTOKEN;
const Table = require("../models/Table");

/* GET home page */
// router.get("/", (req, res, next) => {
//   console.log(res);
//   res.render("index", { mapboxToken: JSON.stringify(mapboxToken) });
// });



axios
.get(`http://localhost:3000/`) // the first argument is the path of the route we registered on the server and the second is the object with the properties that need to be updated: `coordinates` is the name of the field in our Room documents and `coord` is the reference to the variable that holds the updated coordinates of the marker
.then(() => {
  console.log("Room updated!");
})
.catch(err => {
  console.log(err);
});



module.exports = router;