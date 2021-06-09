import React from "react";

const Balance = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);

  return (
    <div className="balance-container">
      <h4>Current Balance</h4>
      <h1>{total}</h1>
    </div>
  );
};

export default Balance;
