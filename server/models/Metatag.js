const mongoose = require("mongoose");

const MetatagSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Metatag", MetatagSchema);
