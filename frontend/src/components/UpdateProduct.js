import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../services/api";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(id);
        const product = response.data;
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setPreviewImage(product.image);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image && name === "" && price === "" && description === "") {
      // No changes made, return early
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    if (image !== null) {
      formData.append("image", image);
    }
    if (image === null) {
      formData.append("image", previewImage);
    }
    formData.append("price", price);
    formData.append("description", description);

    try {
      await updateProduct(id, formData);
      // Reset form fields
      setName("");
      setImage(null);
      setPreviewImage(null);
      setPrice("");
      setDescription("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-form">
      <h3>Update Product</h3>
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
          {previewImage && (
            <img
              src={`http://localhost:5000/${previewImage}`}
              alt="Product Preview"
              style={{ height: "100px" }}
            />
          )}
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
