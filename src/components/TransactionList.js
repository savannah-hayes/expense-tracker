import React from "react";
import Transactions from "./Transactions";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <h3>Transactions</h3>
      <ul className="transactions">
        {transactions.map((transaction) => (
          <div>
            <Transactions
              transaction={transaction}
              deleteTransaction={deleteTransaction}
              key={transaction.id}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
