import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems?.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link to="/">
            <button>go back</button>
          </Link>
        </>
      ) : (
        <ul>
          {cartItems?.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <img
                src={`http://localhost:5000/${item.image}`}
                alt={item.name}
                style={{ height: "100px" }}
              />
              <p>{item.price}</p>
              <p>{item.description}</p>
              <Link to="/">
                <button>go back</button>
              </Link>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
