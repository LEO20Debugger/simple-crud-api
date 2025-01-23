const mongoose = require('mongoose');

// Define Product schema
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt timestamps
    }
);

// Create and export the model
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
