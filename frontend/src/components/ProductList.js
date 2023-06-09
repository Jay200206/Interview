import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../services/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-list">
      <div className="product-list-header">
        <h3>Product List</h3>
        <Link to="/product/add">
          <button>Add Product</button>
        </Link>
      </div>
      {products?.map((product) => (
        <div key={product._id} className="product-item">
          <img
            src={`http://localhost:5000/${product.image}`}
            alt={product.name}
            style={{ height: "100px" }}
          />
          <h4>{product.name}</h4>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <Link to={`/product/${product._id}`}>View Details</Link>
          <Link to={`/product/update/${product._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;