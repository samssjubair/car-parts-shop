const mongoose = require('mongoose');

const sitenameSchema = new mongoose.Schema({
  appName: { type: String, required: true },
  // add more config fields if needed
});

const SiteName= mongoose.model('sitename',sitenameSchema);

module.exports=SiteName;