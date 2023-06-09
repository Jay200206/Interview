const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Retrieve all products
router.get("/products", productController.getProducts);

// GET a single product
router.get("/products/:id", productController.getProductById);

// Add a new product
router.post("/products/add", productController.addProduct);

// Update a product
router.put("/products/:id", productController.updateProduct);

// Delete a product
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
