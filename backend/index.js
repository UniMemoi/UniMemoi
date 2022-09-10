const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const { Package } = require("./models/packages");
const PORT = 3001;

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
// event handlers
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected to Mongo');
});

app.use(cors());
app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
app.get("/", (req, res) => {
  res.status(200);
  res.json(getAllPackageData());
});

const getAllPackageData = async (req, res, next) => {
  try {
    const packages = await Package.find().lean();
    return packages;
  } catch (err) {
    console.log(err);
  }
};
