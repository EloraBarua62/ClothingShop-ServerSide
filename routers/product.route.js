// Import files ans package
const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();


// All routes
router.route('/')
.post(productController.addProduct);


module.exports = router;