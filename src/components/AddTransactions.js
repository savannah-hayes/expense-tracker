import React, { useState } from "react";

const AddTransactions = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const newTransaction = (event) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text" className="label">
          Description
        </label>
        <input
          type="text"
          className="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter text..."
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="Enter amount..."
        />
      </div>
      <button className="button" onClick={newTransaction}>
        Add transaction
      </button>
    </form>
  );
};

export default AddTransactions;
