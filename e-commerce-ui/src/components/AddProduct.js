import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AddProduct({ addProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
      description,
      url,
    };
    addProduct(product);
    alert(`${name} is added to products list`);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Product</h1>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input
          type="text"
          className="form-control"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
