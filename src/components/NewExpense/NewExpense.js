import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';


const NewExpense = (props) =>{

const [isEditing, setIsEditing]=useState(false);


const saveExpenseDataHandler = (enteredExpenseData) =>{
      const updatedExpenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onAddExpense(updatedExpenseData);
      setIsEditing(false);
 };

 const startEditingHandler = () => {
     setIsEditing(true);
}
const stopEditingHandler = (props) => {
     setIsEditing(false);
}
    return (
        <div className="new-expense">
          {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
         
          {isEditing &&
           <ExpenseForm 
           onSaveExpenseData ={saveExpenseDataHandler}
           onCancel={stopEditingHandler}
           />}
           
    </div>
    );
    
};



export default NewExpense;

