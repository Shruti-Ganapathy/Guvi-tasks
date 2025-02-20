import React from 'react';

function CartModal({ cart, onClose, removeFromCart }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CartModal;