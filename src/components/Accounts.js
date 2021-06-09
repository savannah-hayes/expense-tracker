import React from "react";

const Accounts = (props) => {
  const amounts = props.data.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="income-expense-container">
      <div className="income-container">
        <h4 className="header">Income</h4>
        <p className="income-expense">{income}.00</p>
      </div>
      <div className="expense-container">
        <h4 className="header">Expense</h4>
        <p className="income-expense">{expense}.00</p>
      </div>
    </div>
  );
};

export default Accounts;
