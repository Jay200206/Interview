const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use the product routes
app.use('/api/products', productRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
