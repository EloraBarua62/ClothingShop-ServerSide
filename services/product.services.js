// Import Files
const Product = require("../models/Product")


// Service: Add New Product 
exports.addProductService = async(productInfo) => {
    const product = await Product.create(productInfo);
    return product;
}


// Service: Get Product List
exports.getProductListService = async(productListQuery) => {


  
    const productList = await Product.find(productListQuery);
    // const productList = await Product.find(query);
    return productList;
} 