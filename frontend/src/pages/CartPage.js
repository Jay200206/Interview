import React, { useState } from "react";
import Cart from "../components/Cart";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i._id !== item._id));
  };

  return (
    <div>
      <h2>Cart Page</h2>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
