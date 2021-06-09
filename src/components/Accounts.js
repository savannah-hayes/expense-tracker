import React from "react";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

const Accounts = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="income-expense-container">
      <div className="income-container">
        <h4 className="header">Income</h4>
        <p className="income-expense">{moneyFormatter(income)}</p>
      </div>
      <div className="expense-container">
        <h4 className="header">Expense</h4>
        <p className="income-expense">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};

export default Accounts;
