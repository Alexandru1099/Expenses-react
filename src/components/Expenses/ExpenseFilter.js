import React from "react";
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const dropdownChange = (event) => {
        props.onChangeFilter(event.target.value)
    }
    <div className="expenses-filter">
        <div className="expenses-filter-control">
            <label>Filreaza dupa anul dorit</label>
            <select value={props.select} onChange={dropdownChange}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    </div>
}
export default ExpenseFilter;