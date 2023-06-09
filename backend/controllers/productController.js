const Product = require("../models/Product");
const multer = require("multer");

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed."), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
// Get a single product
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    upload.single("image")(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        res.status(400).json({ error: "Image upload error: " + err.message });
      } else if (err) {
        res.status(400).json({ error: "Image upload error: " + err.message });
      } else {
        const { name, price, description } = req.body;
        const imagePath = req.file ? req.file.path : "";

        const product = new Product({
          name,
          image: imagePath,
          price,
          description,
        });

        await product.save();
        res.status(201).json(product);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    upload.single("image")(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        res.status(400).json({ error: "Image upload error: " + err.message });
      } else if (err) {
        res.status(400).json({ error: "Image upload error: " + err.message });
      } else {
        const { name, price, description } = req.body;
        const imagePath = req.file ? req.file.path : "";

        const product = await Product.findByIdAndUpdate(
          id,
          {
            name,
            image: imagePath,
            price,
            description,
          },
          { new: true }
        );

        res.json(product);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
