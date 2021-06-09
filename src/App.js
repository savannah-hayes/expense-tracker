import React from "react";
import Balance from "./components/Balance";
import Accounts from "./components/Accounts";
import TransactionList from "./components/TransactionList";
import AddTransactions from "./components/AddTransactions";

import "./App.css";

const Data = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];

const App = () => {
  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance data={Data} />
        <Accounts data={Data} />
        <h3>Add a new transaction</h3>
        <AddTransactions data={Data} />
        <TransactionList data={Data} />
      </div>
    </div>
  );
};

export default App;
