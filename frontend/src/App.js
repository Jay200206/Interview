import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Product from "./components/Product.js";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/update/:id" element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
