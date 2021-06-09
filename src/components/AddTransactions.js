import React, { useState } from "react";

const AddTransactions = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <form>
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
      <button className="button">Add transaction</button>
    </form>
  );
};

export default AddTransactions;
