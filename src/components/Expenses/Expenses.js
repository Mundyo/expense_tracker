import React, { useState } from "react";
import "./Expense.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
 
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
       return expense.date.getFullYear().toString() === filteredYear;
  });



  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      <ExpensesChart expenses={filteredExpenses} />


      
      <ExpensesList items = {filteredExpenses}/>
       
       
      </Card>
    </div>
  );
}
export default Expenses;

     



// import React, { useState } from "react";
// import "./Expense.css";
// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import ExpensesFilter from "./ExpenseFilter";
// import { set } from "mongoose";

// function Expenses(props) {
 
//   const [filteredYear, setFilteredYear] = useState("2023");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter(expense => {
//        return expense.date.getFullYear().toString() === filteredYear;
//   });


  

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
      
//         {filteredExpenses.length === 0 && <p> No Expenses found.</p> }
//         {filteredExpenses.length > 0 &&
//           filteredExpenses.map((expense) => (
//           <ExpenseItem
//             key = {expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))}
       
//             </Card>
//     </div>
//   );
// }
// export default Expenses;

     


