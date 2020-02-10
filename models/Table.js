const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
      },
  gps: { // actual lat and long 
    type: String,
    coordinates: [Number, Number],
    required: true
  },

  location: { // Street address or description of Location
    type: String
  },

  description: { // Something about the table
    type: String
  },

  neigbourhood: { // eg. district "Kreuzberg"
    type: String
  },
  img_url: {
    type: [String]
  },
  creation_date: {
    type: Date
  },
  comments: {
    type: [String]
  },
  indoor: {
    type: Boolean,
    default: false
  },
  park: {
    type: Boolean,
    default: false
  },
  playground: {
    type: Boolean,
    default: false
  },

  public: {
    type: Boolean,
    default: true
  },

  maintainers: {
    type: [String],
    default: "admin"
  },
  occupied: {
    type: Boolean
  },

  condition: {
    type: Number
  },

  last_update: {
    type: Date
  }
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;
