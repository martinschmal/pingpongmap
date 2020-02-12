const express = require("express");
const router = express.Router();
const Table = require("../models/Table");

/* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("index");
// });

let locations = {};

// router.get("/", (req, res, next) => {
//   Table.find({})
//     .then(result => {
//       console.log("result >>> " + result[0]);
//       const cleanedResults = result.map(table => {
//         return {
//           type: "Feature",
//           data: {
//             Name: table.description,
//             Address: table.location,
//             table_image: table.table_image,
//             ["marker-color"]: "#112993",
//             ["marker-symbol"]: "star",
//             ["marker-size"]: "small",
//             geometry: table.geometry
//           },

//         };
//       });

//       var tableLocation = {
//         type: "FeatureCollection",
//         features: cleanedResults
//       };

//       res.render("index.hbs", {
//         tablesList: result,
//         tableLocation: JSON.stringify(tableLocation),
//         user: req.session.user
//       });
//     })
//     .catch(err => {
//       next(err);
//     });
// });

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
            table_image: table.table_image,
            table_id: table._id,
            games_played: table.games_played,
            occupied: table.occupied,
            ["marker-color"]: "#112993",
            ["marker-symbol"]: "star",
            ["marker-size"]: "small"
          },
          geometry: table.geometry
        };
      });

      var tableLocation = {
        type: "FeatureCollection",
        features: cleanedResults
      };
      //console.log(result);
      res.render("index-map-gl.hbs", {
        tablesList: result,
        tableTest: JSON.stringify(result),
        tableLocation: JSON.stringify(tableLocation),
        user: req.session.user
      });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
