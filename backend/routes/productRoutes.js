const express = require('express');
const multer = require('multer');
const router = express.Router();
const productController = require('../controllers/productController');
const path = require('path'); // Add this line to import the path module

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}${path.extname(file.originalname)}`;
        cb(null, uniqueSuffix);
    },
});
const upload = multer({ storage });

// Get all products
router.get('/', productController.getProducts);

// Add a new product
router.post('/add', upload.single('image'), productController.addProduct);

// Delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
