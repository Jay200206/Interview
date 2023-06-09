import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../services/api";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(id);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} style={{ height: "100px" }} />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Link to="/">
        <button>go back</button>
      </Link>
    </div>
  );
};

export default Product;
