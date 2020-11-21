import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import Header from "./components/Header";
import TransactionTable from "./components/TransactionTable";
import Chart from "./components/Chart";
import AddCategory from "./components/AddCategory";
import AddTransaction from "./components/AddTransaction";

export default function App() {
  const [categories, setCategories] = useState([
    // { name: "Gas", type: "expense" },
    // { name: "Salary", type: "income" }
  ]);
  const [transactions, setTransactions] = useState([
    // {
    //   amount: 5,
    //   date: new Date(),
    //   category: { name: "Gas", type: "expense" }
    // },
  ]);
  const [showAddCategory, setShowAddCategory] = useState(true);
  const [showAddAmount, setShowAddAmount] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

  const removeTransaction = (index) => {
    const newTransactions = transactions.filter((transaction, idx) => {
      return idx !== index;
    });
    setTransactions(newTransactions);
  };

  const filterTransactions = () => {
    return transactions
      .filter((transaction) =>
        activeCategory ? transaction.category.name === activeCategory : true
      )
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
  };

  if (showAddCategory) {
    return (
      <AddCategory
        setShowAddCategory={setShowAddCategory}
        setCategories={setCategories}
      />
    );
  }
  if (showAddAmount) {
    return (
      <AddTransaction
        categories={categories}
        setTransactions={setTransactions}
        setShowAddAmount={setShowAddAmount}
      />
    );
  }
  
  return (
    <div className="container">
      <div className="row">
        <Header
          categories={categories}
          activeCategory={activeCategory}
          setShowAddCategory={setShowAddCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <div className="row">
        <div className="col">
          <TransactionTable
            setShowAddAmount={setShowAddAmount}
            removeTransaction={removeTransaction}
            transactions={filterTransactions(transactions)}
          />
        </div>
        <div className="col">
          <Chart transactions={filterTransactions(transactions)} />
        </div>
      </div>
    </div>
  );
}
