const express = require("express");
const connectDB = require("./config");
const productRoutes = require("./routes/productRoutes");
const path = require("path");

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", productRoutes);

// Connect to MongoDB
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
