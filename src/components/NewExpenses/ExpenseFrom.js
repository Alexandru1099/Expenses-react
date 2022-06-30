import React, { useState, prevState } from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: '',
    })
    const titleChangeHandler = (event) => {
        return { ...userInput, enteredTitle: event.target.value };
    }
    const PriceChangeHandler = (event) => {
        return { ...userInput, enteredPrice: event.target.value };
    }
    const DateChangeHandler = (event) => {
        return { ...userInput, enteredDate: event.target.value };
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userInput)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Titlul</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Pret</label>
                    <input type='number' min="0.01" step="0.01" onChange={PriceChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Data</label>
                    <input type='date' min="2019-01-01" max="2023.12.31" onChange={DateChangeHandler} />
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