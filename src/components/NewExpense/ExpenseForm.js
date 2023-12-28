


import React, { useState, useEffect } from 'react';
import './ExpenseForm.css';
import Cookies from 'js-cookie';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userIdCookie = localStorage.getItem('user_id');
    console.log('ExpenseForm component mounted');
    // const user_id_cookie = Cookies.get('user_id');
    if ( userIdCookie) {
      
      setUserId( userIdCookie);
    }
  }, []);
  

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

  

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      user_id:  localStorage.getItem('user_id'),
    };

    try {
      console.log('userId before fetch:',  localStorage.getItem('user_id'));

      const response = await fetch('http://localhost:3001/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
      });

      const result = await response.json();

      if (response.ok) {
        const newExpenseWithId = {
          ...expenseData,
          id: result.id,
        };

        props.onSaveExpenseData(newExpenseWithId);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
      } else {
        console.error('Error saving data:', result.message);
      }
    } catch (error) {
      console.error('Error creating data:', error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
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
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
