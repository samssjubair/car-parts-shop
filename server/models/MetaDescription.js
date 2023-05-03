const mongoose = require("mongoose");

const MetaDescriptionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("MetaDescription", MetaDescriptionSchema);
