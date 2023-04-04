// Import File
const {addProductService} = require("../services/product.services");


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