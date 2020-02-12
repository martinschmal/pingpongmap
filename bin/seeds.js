const mongoose = require("mongoose");
const Table = require("../models/Table");
const tables = require("../bin/tables.json");
const User = require("../models/User");
const users = require("../bin/users.json");

<<<<<<< HEAD
//("mongodb://localhost:27017/pingpongmap");
// mongoose.connect(process.env.MONGODB_URI, () => {
//   //mongoose.connect("mongodb://localhost:27017/pingpongmap", () => {
//   console.log("Connected to DB");
// });

mongoose.connect("mongodb://localhost:27017/pingpongmap", () => {
  //mongoose.connect(process.env.MONGODB_URI, () => {
=======
mongoose.connect("mongodb://localhost:27017/pingpongmap", () => {
//mongoose.connect(process.env.MONGODB_URI, () => {
>>>>>>> e58b9aa53ddfcc7d41feb2d6cc77ae159297c8b6
  console.log("Connected to DB");
});

Table.collection.drop();
User.collection.drop();


 Table.create(tables)
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