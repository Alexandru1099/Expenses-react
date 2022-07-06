import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list-fallback">
        Nu avem cheltuieli trecute în anul acesta.
      </h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          price={expenses.price + "$"}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
