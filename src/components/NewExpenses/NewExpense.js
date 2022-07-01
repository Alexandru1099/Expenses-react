import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseFrom";

const NewExpense = (props) => {
    function saveExpenseData (enteredData) {
        const exenseData = {
            ...enteredData,
            id:Math.random().toString()
        }
        props.onAddExpense(exenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>
    )
}
export default NewExpense;