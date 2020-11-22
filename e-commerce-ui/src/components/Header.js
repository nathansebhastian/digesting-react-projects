import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-dark navbar-expand bg-primary">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" activeClassName="active">
            Cart
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/add-product"
            className="nav-link"
            activeClassName="active"
          >
            Add Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
