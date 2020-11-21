import React, { useState } from "react";

export default function AddCategory({ setCategories, setShowAddCategory }) {
  const types = ["income", "expense"];
  const [name, setName] = useState("");
  const [selectedType, setSelectedType] = useState("income");

  const handleSubmit = () => {
    if (!name) {
      alert("Enter a category");
      return;
    }
    const category = {
      name,
      type: selectedType
    };

    setCategories((currentState) => [...currentState, category]);
    setShowAddCategory(false);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1>Enter a category for transactions</h1>
          <p>
            E.g. 'Electricity' or 'Gas' or 'Salary' with type of "income" or
            "expense"
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                value={name}
                placeholder="Add category"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {types.map((type, index) => {
                  return (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  );
                })}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
