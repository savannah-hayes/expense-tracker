import React from "react";

const Transactions = (props) => {
  const sign = props.amount < 0 ? "-" : "+";

  return (
    <li className={props.amount < 0 ? "minus" : "plus"}>
      {props.text}
      <span>
        {sign}${Math.abs(props.amount)}
      </span>
      <button className="delete-button">X</button>
    </li>
  );
};

export default Transactions;
