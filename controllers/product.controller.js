// Import File
const {addProductService, getProductListService} = require("../services/product.services");


// Add New Product
exports.addProduct = async(req , res) => {
    try{
        const product = await addProductService(req.body);

        res.status(200).json({
            status: "success",
            message: "Product added succeddfully",
            data: product
        })
    }
    catch(error){
        res.status(400).json({
            status: "fail",
            message: "Failed to add product",
            error    
        })
    }
}


// Get Product List
exports.getProductList = async(req, res) => {
    try{
        // Product list
        const productList = await getProductListService(req.query);

        console.log(productList.length)
        if(!productList.length){
            return res.status(204).json({
            status: "fail",
            message: "No Product available",
        });
        }

         res.status(200).json({
           status: "success",
           message: "Product list loaded successfully",
           data: productList,
         });
        
    }
    catch(error){
        res.status(400).json({
          status: "fail",
          message: "Failed to load product list",
          error,
        });
    }
}