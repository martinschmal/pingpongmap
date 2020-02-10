const mongoose = require("mongoose");
const Table = require("../models/Table");
const tables = require("../bin/tables.json");

mongoose.connect("mongodb://localhost:27017/pingpongmap", () => {
  console.log("Connected to DB");
});

Table.collection.drop();

Table.create(tables)
  .then(result => {
    console.log(`Created ${result.length} tables`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
