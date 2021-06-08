import React from "react";

const Accounts = () => {
  return (
    <div className="income-expense-container">
      <div className="income-container">
        <h4 className="header">Income</h4>
        <p className="income-expense">+100.00</p>
      </div>
      <div className="expense-container">
        <h4 className="header">Expense</h4>
        <p className="income-expense">-250.00</p>
      </div>
    </div>
  );
};

export default Accounts;
