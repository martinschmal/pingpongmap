const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  // coordinates: {
  //   type: Object,
  //   lat: Number,
  //   lng: Number
  // },

  // geometry: {
  //   type: String,
  //   default: "Point"
  // },

  // coordinates: {
  //   type: [Number],
  //   required: true
  // },

  geometry: {
    type: {
      type: String,
      default: "Point"
    },

    coordinates: {
      type: [Number],
      required: true
    }
  },

  location: {
    // Street address or description of Location
    type: String,
    default: "please add location info!"
  },

  description: {
    // Something about the table
    type: String,
    default: "please add table info!"
  },

  neighbourhood: {
    // eg. district "Kreuzberg"
    type: String,
    default: "please add the district"
  },
  table_image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1571993544703-65a4406c1714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  creation_date: {
    type: Date,
    default: Date.now
  },
  comments: {
    type: [String],
    default: "I'm first!"
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
    default: "Pinpongmap Team"
  },
  occupied: {
    type: Boolean,
    default: false
  },
  games_played: {
    type: Number,
    default: 3
  },

  condition: {
    type: Number,
    default: 5
  },

  last_update: {
    type: Date,
    default: Date.now
  }
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;
