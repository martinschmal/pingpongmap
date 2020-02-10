const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },

  profilepicture: {
    type: String
  },

  email: {
    type: String
  },

  tables_added: {
    type: Number
  },

  tables_played: {
    type: Number
  },
  currently_playing: {
    type: Number
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
