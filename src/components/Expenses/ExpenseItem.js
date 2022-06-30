import React from "react";
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'
import Card from "../UI/Card";
function ExpenseItem(props) {
    function clicked () {
      console.log('clickcc')
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item-description">
                <h2>{props.title}</h2>
                <div className="expense-item-price">{props.price}</div>
            </div>

            <button onClick={clicked}>click me</button>
        </Card>
    )
}
export default ExpenseItem;