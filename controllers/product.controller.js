// Import File
const Product = require("../models/Product");
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
      // Product Query List
      const dressTypeList = [
        "Shalware Kameez",
        "Saree",
        "Lahanga",
        "Kurtis",
        "Gown",
        "Borka",
        "Dupatta",
        "Pant",
        "others",
      ];

      let productListQuery = req.query;

      let {
        // page = parseInt(productListQuery?.page) - 1 || 0,
        // limit = parseInt(productListQuery?.limit) || 0,
        search = productListQuery?.search || "",
        // sort = productListQuery?.sort || "createdAt",
        // minPrice = productListQuery?.minPrice || 0,
        // maxPrice = productListQuery?.maxPrice || Number.MAX_SAFE_INTEGER,
        // categoryId = productListQuery?.categoryId || "",
        // brandName = productListQuery?.brandName || "",
        dressType = productListQuery?.dressType || "All",
        // material = productListQuery?.material || "",
        // color = productListQuery?.color || "",
        // ...others
      } = productListQuery;

      // console.log(page, limit, others, dressType);
      // Array of DressType
      dressType == "All"
        ? (dressType = [...dressTypeList])
        : (dressType = dressType.split(","));

      // console.log(dressType)
      // console.log(productListQuery);

      // Array of BrandName
      // brandName = brandName.split(",");

      // Array of material
      // material = material.split(",");

      // Array of color
      // color = color.split(",");
      // console.log(page, limit, brandName, dressType, material, color);

      // const searchText = {$or : [{productName : {$regex: search, $options: "i"}} , {"brandId.brandName" : {$regex: search, $options: "i"}} , {"shopId.shopName" : {$regex: search, $options: "i"}}]};

      // const query = {
      //   pricePerPiece: {
      //     $gte: minPrice,
      //     $lte: maxPrice,
      //   },
      //   // categoryId
      // };

      let searchText = {};
      if (search != "") {
        searchText = { productName: { $regex: search, $options: "i" } };
      }

      // productListQuery = Object.assign(searchText, others, query);
      // console.log(productListQuery);

      // const page = parseInt(req.query.page)-1 || 0;
      // const limit = parseInt(req.query.limit) || 10;
      // const search = req.query.search || "";
      // const sort = req.query.sort || "createdAt";
      // const filterOptions = req.query.filterOptions || "All";

      // if (productListQuery?.minPrice || productListQuery?.maxPrice) {
      //   // console.log(productListQuery);
      //   // const { minPrice, maxPrice, ...others } = productListQuery;
      //   // console.log(minPrice);
      //   // console.log(maxPrice);

      //   const query = {
      //     pricePerPiece: {
      //       $gte: productListQuery?.minPrice || 0,
      //       $lte: productListQuery?.maxPrice || Number.MAX_SAFE_INTEGER,
      //     },
      //   };

      //   productListQuery = Object.assign(others, query);
      // }

      // const productList = await Product.find(productListQuery)
      //   .where("dressType")
      //   .in([...dressType])
      //   .where("material")
      //   .in([...material])
      //   .where("colorWithAvailableQuantity.color")
      //   .in([...color])
      //   .skip(page * limit);

      // const productList = await getProductListService(productListQuery);

      // console.log(productList)

      const productList = await Product.find(searchText).where("dressType").in([...dressType]);
      if (!productList.length) {
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