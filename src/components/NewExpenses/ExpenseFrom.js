import React, { useState, prevState } from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: '',
    // });
  
    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredTitle: event.target.value,
      // });
      // setUserInput((prevState) => {
      //   return { ...prevState, enteredTitle: event.target.value };
      // });
    };
  
    const priceChangeHandler = (event) => {
      setEnteredPrice(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredAmount: event.target.value,
      // });
    };
  
    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredDate: event.target.value,
      // });
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
      
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
      };
  
      console.log(expenseData);
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Titlul</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Pret</label>
                    <input type='number' min="0.01" step="0.01" onChange={priceChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Data</label>
                    <input type='date' min="2019-01-01" max="2023.12.31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense-actions">
                <button type="submit">
                    Adaugă
                </button>
            </div>
        </form>
    )
}
export default ExpenseForm;