// PACKAGE IMPORT
// import express
const express = require("express");
// import router
const router = express.Router();
// import controller
const userController = require('../controllers/user.controller');
const verifyToken = require("../middleware/verifyToken");




// routes
router.post('/signup' , userController.signup);
router.post('/login' , userController.login);
router.patch('/account_info/:email' , userController.account_info);
router.get("/account_info", verifyToken, userController.get_accountinfo);



module.exports = router;