import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { getProducts } from "../services/api";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
