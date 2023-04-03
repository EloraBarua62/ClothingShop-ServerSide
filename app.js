// PACKAGES
// import express
const express = require('express');
const cors = require('cors');
// import routes
const userRoute = require('./routers/user.route');


// create app
const app = express();



// MIDDLEWARE
app.use(express.json());
app.use(cors());



// ROUTES
// Base route
app.get('/' , (req,res) => {
    res.send('clothing app is running');
});

// User account route
app.use("/api/v1/user", userRoute);


module.exports = app;