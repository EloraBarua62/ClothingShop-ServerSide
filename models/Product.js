// Import package
const mongoose = require("mongoose");


// PRODUCT SCHEMA DESIGN
const productSchema = mongoose.Schema({
  
    // Product Name field
  productName: {
    type: String,
    required: [true, "Please provide product's name"],
    trim: true,
    minLength: [3, "Atleast 3 charecter"],
    maxLength: [50, "Shorten product name"],
  },

  // Category ID field
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  // Brand ID field
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },

  // Shop ID field
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
  },

  // Type field
  dressType: {
    type: String,
    required: [true, "Please select product type"],
  },

  // Material field
  material: {
    type: String,
    required: [true, "Please select product material"],
  },

  // Field: Size
  size: {
    type: Number,
    required: [true, "Please select product size"],
  },

  // Field: Color With Available Quantity
  colorWithAvailableQuantity: [
    {
      color: {
        type: String,
        required: [true, "Please add product color"],
      },
      quantity: {
        type: Number,
        required: [true, "Please select product quantity"],
      },
      image: {
        type: String,
        required: [true, "Please import product image"],
      },
    },
  ],

  // Field: Total Quantity
  totalQuantity: {
    type: Number,
    required: [true, "Please select total product quantity"],
  },

  // Field: Price Per Piece
  pricePerPiece: {
    type: Number,
    required: [true, "Please select product price"],
  },

  // Field: Description
  description: {
    type: String,
    required: [true, "Please add product description"],
    trim: true,
    minLength: [50, "Please describe more"],
    maxLength: [100, "Product description cross limit"],
  },

  // Field: SKU
  sku: {
    type: String,
    required: [true, "Please select product SKU"],
  },

  // Field: Piece In Stock
  pieceInStock: {
    type: Number,
    required: [true, "Please select amount of product stock"],
  },

  // Field: Piece In Order
  pieceInOrder: {
    type: Number,
    required: [true, "Please select amount of product order"],
  },
});