import React from "react";

const AddTransactions = () => {
  return (
    <div>
      <h3>Add a new transaction</h3>
      <form>
        <div>
          <label htmlFor="text">Description</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransactions;
