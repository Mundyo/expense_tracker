
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/login/loginform';
import Signup from './components/login/signup';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
      },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/account"
          element={
            <>
              <NewExpense onAddExpense={addExpenseHandler} />
              <Expenses items={expenses} />
            </>
          }
          children={(props) => {
            const userId = new URLSearchParams(props.location.search).get('user_id');
            return userId ? (
              <>
                <NewExpense onAddExpense={addExpenseHandler} />
                <Expenses items={expenses} />
              </>
            ) : null;
          }}
        />
      </Routes>
    </Router>
  );
};

export default App;























