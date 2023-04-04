// Import Files
const Product = require("../models/Product")


// Service: Add New Product 
exports.addProductService = async(productInfo) => {
    const product = await Product.create(productInfo);
    return product;
}