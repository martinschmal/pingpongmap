const mongoose = require("mongoose");
const Table = require("../models/Table");
const tables = require("../bin/tables.json");
const User = require("../models/User");
const users = require("../bin/users.json");

//mongoose.connect("mongodb://localhost:27017/pingpongmap", () => {
 mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to DB");
});

Table.collection.drop();
User.collection.drop();

Table.create(tables)
  .then(result => {
    console.log(`Created ${result.length} pingpong-tables`);
  })
  .catch(err => {
    console.log(err);
  });

User.create(users)
  .then(result => {
    console.log(`Created ${result.length} users`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
