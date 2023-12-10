import React, { useState } from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // or
  // const [userInput, setUserInput] = useState({
  // enteredTitle:'',
  // enteredAmount:'',
  // enteredDate:'',
  // });

  const titleChangeHandler = (event) => {
    // or
    // setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //  enteredTitle: event.target.value,
    // });
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    //  setUserInput({
    //  ...userInput,
    //  enteredAmount: event.target.value,
    //  })
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    // ...userInput,
    //  enteredDate: event.target.value,
    // })
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();


  const expenseData = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
  };

  props.onSaveExpenseData(expenseData
    );
  setEnteredTitle('');
  setEnteredAmount('');
  setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>

          <input 
          type="text" 
          value={enteredTitle}
          onChange={titleChangeHandler} 
          />

        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="submit" onclick={props.onCancel}>Cancel</button>
       
      </div>
    </form>
  );
};

export default ExpenseForm;
