import React from 'react';

const Cart = ({ cartItems, onDeleteCartItem }) => {
    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item._id}>
                            {item.name} - ${item.price}
                            {/* Remove from Cart button */}
                            <button onClick={() => onDeleteCartItem(item._id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
