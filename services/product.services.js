// Import Files
const Product = require("../models/Product")


// Service: Add New Product 
exports.addProductService = async(productInfo) => {
    const product = await Product.create(productInfo);
    return product;
}


// Service: Get Product List
exports.getProductListService = async(productListQuery) => {


  console.log(productListQuery);
  if(productListQuery?.minPrice || productListQuery?.maxPrice){
    // console.log(productListQuery);
    const {minPrice,maxPrice,...others} = productListQuery;
    console.log(minPrice)
    console.log(maxPrice)

        const query = {
          pricePerPiece: {
            $gte: productListQuery?.minPrice || 0,
            $lte: productListQuery?.maxPrice || Number.MAX_SAFE_INTEGER,
          },
        };

        productListQuery = Object.assign(others,query);

  }
    const productList = await Product.find(productListQuery);
    // const productList = await Product.find(query);
    return productList;
} 