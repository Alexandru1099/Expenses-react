import React from "react";
import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem"
import "./components/Expenses/ExpenseItem.css"
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const expenses = [
    {
      id: '1',
      title: 'Casa',
      price: '1000$',
      date: new Date(2021, 5, 21)
    },
    {
      id: '2',
      title: 'Masina',
      price: '12$',
      date: new Date(2022, 1, 22)
    },
    {
      id: '3',
      title: 'Telefon',
      price: '101$',
      date: new Date(2020, 7, 11)
    },
    {
      id: '4',
      title: 'Ceas',
      price: '45$',
      date: new Date(2022, 6, 3)
    },
  ]
  return (
    <div>
      <h2>Incepem app</h2>
      <NewExpense />
      <Card className="expenses">
        {expenses.map((expenses) => {
          return (
            <div key={expenses.id}>
              <ExpenseItem
                id={expenses.id}
                title={expenses.title}
                price={expenses.price}
                date={expenses.date}
              />
            </div>
          )

        })}
      </Card>
    </div>
  );
}

export default App;
