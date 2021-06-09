import React from "react";
import Transactions from "./Transactions";

const TransactionList = (props) => {
  return (
    <div>
      <h3>Transactions</h3>
      <ul className="transactions">
        {props.data.map((transactions, index) => (
          <div key={index}>
            <Transactions
              amount={transactions.amount}
              text={transactions.text}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
