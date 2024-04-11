


import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';


const ExpensesList = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
   
    fetch('http://localhost:3001/account')
   
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
         setExpenses(data.expenses);
         setError(null);
      })
      .catch(error => {
        console.error('Error', error);
        setError(error.message);
      });
        
}, []);

  if (error){
    return <h2 className ="expenses-list__fallback"> Error:{error}</h2>
  }
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-List">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;



