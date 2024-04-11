
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/login/loginform';
import Signup from './components/login/signup';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';



const App = () => {




  const [expenses, setExpenses] = useState([]);

   useEffect(()=>{

  const fetchExpenses = async() =>{
    try{
      const response = await fetch('http://localhost:3001/account')
    if(!response.ok){
      throw new Error('failed to fetch expenses');

    }
    const data = await response.json();
    setExpenses(data);
    } catch(error) {
      console.error('error fetching expenses', error.message);
    }
  };

  fetchExpenses();
}, []);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const handleLogin = (userId) => {
    console.log('User logged in with ID:', userId);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
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























