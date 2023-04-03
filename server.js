// PACKAGES
// import app
const app = require("./app");
// import dbConnect
const DBConnect = require("./utils/dbConnect");


// DATABASE CALL
DBConnect;



// Server running port
const port = process.env.PORT || 5000;



// App is listening to server running port for communication
app.listen(port , () => {
    console.log(`App is running on port ${port}`);
})




