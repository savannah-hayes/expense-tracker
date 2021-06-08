import React from "react";

const AddTransactions = () => {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="text" className="label">
          Description
        </label>
        <input type="text" className="text" placeholder="Enter text..." />
      </div>
      <div class="form-control">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <input type="number" className="amount" placeholder="Enter amount..." />
      </div>
      <button className="button">Add transaction</button>
    </form>
  );
};

export default AddTransactions;
