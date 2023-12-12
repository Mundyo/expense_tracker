// import React from "react";

// import ExpenseItem from "./ExpenseItem";
// import './ExpensesList.css';


// const ExpensesList = props => {

   
// if (props.items.length === 0){
//     return <h2 className = "expenses-list__fallback">Found no expenses.</h2>
// }

//  return <ul className = "expenses-List">
 
//  {props.items.map((expense) => (
//     <ExpenseItem
//       key = {expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ))}
//  </ul>
// };

// export default ExpensesList;

// Import the CSS file in your ExpensesList.js file
import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';  // Import your CSS file

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list"> {/* Apply the .expenses-list class */}
      {props.items.map((expense) => (
        <li key={expense.id} className="expense-list-item">
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
