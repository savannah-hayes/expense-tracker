import React from "react";
import Balance from "./components/Balance";
import Accounts from "./components/Accounts";
import Transactions from "./components/Transactions";
import AddTransactions from "./components/AddTransactions";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <Accounts />
        <h3>Add a new transaction</h3>
        <AddTransactions />
        <Transactions />
      </div>
    </div>
  );
}

export default App;
