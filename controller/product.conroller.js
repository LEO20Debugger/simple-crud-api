const Product = require('../models/product.model'); // Use consistent naming

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // Fetch all products
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single product by ID
const getProduct = async (req, res) => {
    try {
        const { id } = req.params; // Extract product ID from the request URL

        // Fetch the product by ID
        const product = await Product.findById(id);

        // Check if the product exists
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Send the product in the response
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST Route: Create a new product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: "Product has being added successfully", product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params; // Extract product ID from the request URL

        // Update the product and return the updated document
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

        // Check if the product exists
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Send the updated product in the response
        res.status(200).json({ message: "Product Upadated succesfully", updatedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; // Extract product ID from the request URL

        // Find and delete the product
        const product = await Product.findByIdAndDelete(id);

        // Check if the product exists
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Send the deleted product in the response
        res.status(200).json({ message: 'Product deleted successfully', product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
