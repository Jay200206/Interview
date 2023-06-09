import React, { useState } from "react";
import { uploadProduct } from "../services/api";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("description", description);

    try {
      await uploadProduct(formData);
      // Reset form fields
      setName("");
      setImage(null);
      setPrice("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-form">
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input type="file" onChange={handleFileChange} />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <Link to="/">
          <button type="submit">Add Product</button>
        </Link>
      </form>
    </div>
  );
};

export default AddProduct;
