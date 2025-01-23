const express = require('express');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controller/product.conroller.js')

// GET Route: Fetch all products
router.get('/', getProducts);

// Get a single product by ID
router.get("/:id", getProduct);

// POST Route: Create a new product
router.post('/', createProduct);

// PUT Route: Update a product by ID
router.put('/:id', updateProduct);

// DELETE Route: Delete a product by ID
router.delete('/:id', deleteProduct);


module.exports = router;