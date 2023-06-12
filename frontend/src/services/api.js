import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const uploadProduct = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/products/add`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/products/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/products/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
