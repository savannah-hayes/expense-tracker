import React from "react";

const Transactions = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const amount = sign + Math.abs(transaction.amount);

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>{amount}</span>
      <button
        className="delete-button"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
};

export default Transactions;
