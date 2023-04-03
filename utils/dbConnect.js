// import mongoose
const mongoose = require("mongoose");

// import dotenv
const dotenv = require("dotenv").config();



// db connection
const DbConnect = mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log("db connected");
});

module.exports = DbConnect;
