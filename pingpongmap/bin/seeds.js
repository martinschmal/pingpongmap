const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/pingpongmap", () => {
  console.log("Connected to DB");
});

const Table = require("../models/Table");

Table.collection.drop();

Table.create(tables)
  .then(result => {
    console.log(`Created ${result.length} tables`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
