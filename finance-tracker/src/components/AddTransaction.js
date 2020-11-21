import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

export default function AddTransaction({
  categories,
  setTransactions,
  setShowAddAmount
}) {
  const [amount, setAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleSubmit = () => {
    if (!amount) {
      alert("Enter amount");
      return;
    }
    const finance = {
      date: selectedDate,
      category: categories[selectedCategory],
      amount: amount
    };
    setTransactions((currentState) => [...currentState, finance]);
    setShowAddAmount(false);
  };

  return (
    <div className="container">
      <div class="card">
        <div class="card-body">
          <h1>Enter a new amount</h1>
          <form onSubmit={handleSubmit}>
            <DatePicker
              className="form-control"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
            <select
              className="form-control"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => {
                return (
                  <option key={index} value={index}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <input
              className="form-control"
              value={amount}
              placeholder="Set amount"
              onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit" class="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
