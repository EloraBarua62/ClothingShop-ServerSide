// PACKAGES 
// Import Mongoose
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs');



// USER SCHEMA DESIGN
const userSchema = mongoose.Schema(
  {
    // First Name field
    firstName: {
      type: String,
      required: [true, "Please provide your first name"],
      trim: true,
      minLength: [3, "Atleast 3 charecter"],
      maxLength: [50, "First name is invalid"],
    },

    // Last Name field
    lastName: {
      type: String,
      required: [true, "Please provide your last name"],
      trim: true,
      maxLength: [50, "Last name is invalid"],
    },

    // Email field
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide an email"],
    },

    // Password field
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) => {
          validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          });
        },
        message: "{value} is invalid,Please provide a strong password",
      },
    },

    // Confirm Password field
    confirmPassword: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "{value} didn't match",
      },
    },

    // Address 1 field
    address1: {
      type: String,
      trim: true,
      default: "",
    },

    // Address 2 field
    address2: {
      type: String,
      trim: true,
      default: "",
    },

    // City 1 field
    city: {
      type: String,
      trim: true,
      default: "",
    },

    // State 2 field
    state: {
      type: String,
      trim: true,
      default: "",
    },

    // ZipCode field
    zipCode: {
      type: Number,
      default: 0,
    },

    // Country field
    country: {
      type: String,
      trim: true,
      default: "",
    },

    // Phone field
    phone: {
      type: String,
      trim: true,
      default: "",
    },

    // Image field
    image: {
      type: String,
      default: "",
    },

    // Wish list field
    wishList: {
      type: Array,
      default: [],
    },

    // Field: Role
    role: {
      type: String,
      enum: ["buyer" , "store-manager" , 'admin'],
      default: "buyer"
    },

    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpire: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save" , function(next){
  const hash = bcrypt.hashSync(this.password);
  this.password = hash;
  this.confirmPassword = undefined;
  next();
});

const User = mongoose.model("User" , userSchema);
module.exports = User;