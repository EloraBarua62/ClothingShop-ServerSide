// PACKAGES
// import express
const express = require('express');
const cors = require('cors');
// import routes
const userRoute = require('./routers/user.route');
const productRoute = require('./routers/product.route');


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


// Product route
app.use("/api/v1/product", productRoute);


module.exports = app;