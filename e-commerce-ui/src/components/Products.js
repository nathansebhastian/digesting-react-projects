import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import ProductsContext from "../context/ProductsContext";

function Products({ addToCart }) {
  const history = useHistory();
  const products = useContext(ProductsContext);

  if (!products.length) {
    return (
      <h2>
        Your have no products. 
        Please <Link to="/add-product">add new product</Link> first
      </h2>
    );
  }

  return (
    <ul className="list-group">
      {products.map((product) => (
        <li key={product.id} className="list-group-item">
          <div className="product">
            <div className="product-left">
              <img
                className="product-image"
                src={product.url}
                alt={product.name}
              />
              <div className="product-title">{product.name}</div>
              <div className="product-description">{product.description}</div>
            </div>
            <div className="product-right">
              <div className="product-price">${product.price}</div>
              <button
                className="btn btn-sm btn-success"
                onClick={() => {
                  addToCart(product);
                  alert(`${product.name} added to cart`);
                  history.push("/cart");
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;
