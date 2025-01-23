const express = require('express');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controller/product.conroller.js')

router.get('/', getProducts); // GET Route: Fetch all products

router.get("/:id", getProduct); // Get a single product by ID

router.post('/', createProduct); // POST Route: Create a new product

router.put('/:id', updateProduct); // PUT Route: Update a product by ID

router.delete('/:id', deleteProduct); // DELETE Route: Delete a product by ID


module.exports = router;