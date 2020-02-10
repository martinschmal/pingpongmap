const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },

  coordinate: {
    type: {
      type: String,
      default: "Point"
    },

    geolocation: {
      type: [Number],
      required: true
    }
  },

  location: {
    // Street address or description of Location
    type: String
  },

  description: {
    // Something about the table
    type: String
  },

  neigbourhood: {
    // eg. district "Kreuzberg"
    type: String
  },
  table_image: {
    type: String
  },
  creation_date: {
    type: Date,
    default: Date.now
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
    // no permission needed, the table is accessible to public
    type: Boolean,
    default: true
  },
  bar: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
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
