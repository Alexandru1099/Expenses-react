import React, { useState } from "react";
import "./components/Expenses/ExpenseItem.css";
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY = [
  {
    id: "1",
    title: "Casa",
    price: "1000",
    date: new Date(2021, 5, 21),
  },
  {
    id: "2",
    title: "Masina",
    price: "12",
    date: new Date(2022, 1, 22),
  },
  {
    id: "3",
    title: "Telefon",
    price: "101",
    date: new Date(2020, 7, 11),
  },
  {
    id: "4",
    title: "Ceas",
    price: "45",
    date: new Date(2022, 6, 3),
  },
];

function App() {
  const [expense, setExpenses] = useState(DUMMY);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExtenses) => {
      return [expense, ...prevExtenses];
    });
  };

  return (
    <div>
      <h2>Administreazăți cheltuielile</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
