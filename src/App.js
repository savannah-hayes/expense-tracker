import React, { useState } from "react";
import Balance from "./components/Balance";
import Accounts from "./components/Accounts";
import TransactionList from "./components/TransactionList";
import AddTransactions from "./components/AddTransactions";

import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const addTransaction = (transaction) => {
    setTransactions((transactions) => [transaction, ...transactions]);
  };

  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance transactions={transactions} />
        <Accounts transactions={transactions} />

        <h3>Add a new transaction</h3>
        <AddTransactions addTransaction={addTransaction} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
};

export default App;
