// Import package
const mongoose = require("mongoose");


// PRODUCT SCHEMA DESIGN
const productSchema = mongoose.Schema({
  
  // Field: Product Name
  productName: {
    type: String,
    required: [true, "Please provide product's name"],
    trim: true,
    minLength: [3, "Atleast 3 charecter"],
    maxLength: [50, "Shorten product name"],
  },

  // Field: Category ID
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    // required: [true, "Please provide product's category"],
  },

  // Field: Brand ID
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    // required: [true, "Please provide product's brand"],
  },

  // Field: Shop ID
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    // required: [true, "Please provide product's shop"],
  },

  // Field: Dress Type
  dressType: {
    type: String,
    required: [true, "Please select product type"],
  },

  // Field: Marterial
  material: {
    type: String,
    required: [true, "Please select product material"],
  },

  // Field: Size
  size: {
    type: Number,
    // required: [true, "Please select product size"],
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
    maxLength: [200, "Product description cross limit"],
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

  productChangedAt: Date
},
{
  timestamps: true
}
);


const Product = mongoose.model('Product' , productSchema);
module.exports = Product;