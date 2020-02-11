const express = require("express");
const router = express.Router();
const Table = require("../models/Table");

/* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("index");
// });

let locations = {};

router.get("/", (req, res, next) => {
  Table.find({})
    .then(result => {
      console.log("result >>> " + result[0]);
      const cleanedResults = result.map(table => {
        return {
          type: "Feature",
          properties: {
            Name: table.description,
            Address: table.location,
            ["marker-color"]: "#112993",
            ["marker-symbol"]: "star",
            ["marker-size"]: "small"
          },
          geometry: table.geoJSON
        };
      });

      var tableLocation = {
        type: "FeatureCollection",
        features: cleanedResults
      };

      res.render("index.hbs", {
        tablesList: result,
        tableLocation: JSON.stringify(tableLocation)
      });

      //  tableLocation = {
      //     "type": "FeatureCollection",
      //     "features": [
      //         {
      //             "type": "Feature",
      //             "properties": { "description": description , "location": location },
      //             "geometry": geoJSON
      //         },
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
