import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import Cart from "./components/Cart";

import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";

import { useLocalStorage } from "./util";

export default function App() {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [products, setProducts] = useLocalStorage("products", []);

  const addToCart = (product) => {
    if (cart.length) {
      const newCart = [...cart];
      var foundIndex = newCart.findIndex((item) => item.id === product.id);
      if (foundIndex >= 0) {
        newCart[foundIndex]["qty"] += 1;
        setCart(newCart);
      } else {
        product.qty = 1;
        newCart.push(product);
        setCart(newCart);
      }
    } else {
      product.qty = 1;
      const newCart = [product];
      setCart(newCart);
    }
  };

  const removeFromCart = (product) => {
    const newCart = [...cart];
    var foundIndex = newCart.findIndex((item) => item.id === product.id);
    newCart[foundIndex]["qty"] -= 1;
    if (newCart[foundIndex]["qty"] === 0) {
      newCart.splice(foundIndex, 1);
    }
    setCart(newCart);
  };

  const addProduct = (product) => {
    product.id = products.length + 1;
    setProducts((currentProducts) => [...currentProducts, product]);
  };

  return (
    <Router>
      <CartProvider value={cart}>
        <ProductsProvider value={products}>
          <div className="container">
            <Header />
            <Route exact path="/">
              <Products addToCart={addToCart} />
            </Route>
            <Route path="/add-product">
              <AddProduct addProduct={addProduct} />
            </Route>
            <Route path="/cart">
              <Cart addToCart={addToCart} removeFromCart={removeFromCart} />
            </Route>
          </div>
        </ProductsProvider>
      </CartProvider>
    </Router>
  );
}
