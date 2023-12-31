// import React, { useState } from "react";
import React from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

import "./Expense.css";

function ExpenseItem(props) {


  return (
    <li>
    <Card className="expense-item">
    <div className="expense-item__description">

      
      <ExpenseDate date={props.date} />
     
        <h2>{props.title}</h2>
       
        <div className="expense-item__price">${props.amount}</div>
        </div>
     
    </Card>
    </li>
  );
}

export default ExpenseItem;
