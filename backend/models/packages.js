const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  subject: { type: String, required: true },
  data: { type: String, required: true },
});
const Package = mongoose.model("Package", schema);
module.exports = {Package};
