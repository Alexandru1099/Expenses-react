import React, { useState, useEffect } from "react";
import "./components/Expenses/ExpenseItem.css";
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import axios from "axios";

function App() {
  const [expense, setExpenses] = useState([]);
  const url = 'http://localhost:3000/expense';

  useEffect(() => {
    getAllExpense();
}, []);

  const getAllExpense = () => {
    axios.get(url)
    .then((res) => {
      console.log(res)
      console.log(res.data)
      const allExpenses = res.data;
    }).catch((err) => console.log(err))
  }

  const addExpenseHandler = (expense) => {
    setExpenses((prevExtenses) => {
      return [expense, ...prevExtenses];
    });
  };

  return (
    <div>
      <h2 className="title-expenses">Administreazăți cheltuielile 😄</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
