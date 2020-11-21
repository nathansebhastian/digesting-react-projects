import React from "react";

export default function Header({
  categories,
  activeCategory,
  setShowAddCategory,
  setActiveCategory
}) {
  return (
    <ul className="navbar navbar-expand flex-row w-100 list-unstyled">
      <li
        className={`font-weight-bold p-3 nav-item ${
          !activeCategory ? "bg-warning" : ""
        }`}
        onClick={() => setActiveCategory("")}
      >
        All
      </li>
      {categories.map((category, index) => {
        return (
          <li
            className={`p-3 nav-item  ${
              activeCategory === category.name ? "bg-warning" : ""
            }`}
            key={index}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </li>
        );
      })}
      <li
        className="font-weight-bold p-3 nav-item bg-info"
        onClick={() => setShowAddCategory(true)}
      >
        +
      </li>
    </ul>
  );
}
