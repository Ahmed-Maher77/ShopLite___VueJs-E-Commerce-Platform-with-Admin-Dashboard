const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();

// GET products (supports search, pagination, combined filtering, sorting)
router.get('/', ProductController.getProducts);

// GET distinct brands list (for filtering sidebar)
router.get('/brands', ProductController.getDistinctBrands);

// GET product by ID
router.get('/:id', ProductController.getProductById);

// POST create product (Admin feature prep)
router.post('/', ProductController.createProduct);

// PUT update product by ID (Admin feature prep)
router.put('/:id', ProductController.updateProduct);

// DELETE product by ID (Admin feature prep)
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
