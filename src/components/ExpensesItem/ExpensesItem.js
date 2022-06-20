import React from "react";
import ExpensesDate from "../ExpensesDate/ExpensesDate";
import "./ExpensesItem.css";

const ExpensesItem = (props) => {
  return (
    <div className="expense-item">
      <ExpensesDate date={props.date} />
      <div className="expense-title">{props.title}</div>
      <div className="expense-amount">${props.amount}</div>
    </div>
  );
};

export default ExpensesItem;
