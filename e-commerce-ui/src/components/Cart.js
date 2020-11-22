import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

export default function Cart({ addToCart, removeFromCart }) {
  const cart = useContext(CartContext);

  if (!cart.length) {
    return (
      <h2>
        Your cart is empty. 
        Add some <Link to="/">products</Link> first.
      </h2>
    );
  }

  return (
    <ul className="list-group">
      {cart.map((item) => (
        <li key={item.id} className="list-group-item">
          <div className="product">
            <div className="product-left">
              <img className="product-image" src={item.url} alt={item.name} />
              <div className="product-title">{item.name}</div>
              <div className="product-description">{item.description}</div>
            </div>
            <div className="product-right">
              <div className="product-price">${item.price}</div>
              <div className="cart-controls">
                <button
                  className="cart-btn-rm"
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
                <span className="cart-qty">{item.qty}</span>
                <button
                  className="cart-btn-add"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
