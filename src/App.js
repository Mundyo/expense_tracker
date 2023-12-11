
import React from 'react'
import LoginForm from "./components/login/loginform";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/login/signup';

function App() {
  return (
  
  <Router>
  <Routes>
    <Route path="/" element={<LoginForm />} />
    <Route path="/signup" element={<Signup />} />
   
   
  </Routes>
</Router>
  )
}

export default App;


