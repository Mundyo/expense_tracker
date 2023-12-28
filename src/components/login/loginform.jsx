
import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';

const TextInput = ({ label, type, id, name, value, onChange, autoComplete, required }) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      type={type}
      className="form-control"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      required={required}
    />
  </div>
);

function Card({ children }) {
  return <div className="card-container">{children}</div>;
}

function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [user_id, setUserId] = useState(null);

  useEffect(() => {
    // Fetch the user_id cookie when the component mounts
    const user_id_cookie = Cookies.get('user_id');
    if (user_id_cookie) {
      setUserId(user_id_cookie);
    }
  }, []); // Empty dependency array to run only once when the component mounts

  

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const userData = await response.json();
        const user_id = userData.user_id;
        const expenses = userData.expenses;


  
      
        console.log('User ID:', user_id);
        console.log('Expenses:', expenses);
  
        localStorage.setItem('user_id',user_id);

  
       
        setUserId(user_id);
  
        console.log('Login successful!');
        window.location.href = `/account?user_id=${user_id}`;
      } else {
        console.log('USERID IS UNDEFINED');
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };





  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    window.location.href = '/signup';
  };

  return (
    <div className="center-container">
      <div className="col-md-6">
        <Card>
          <h2 className="text-center mb-41"> Expense Tracker</h2>
          <h3 className="text-center mb-4"> Login</h3>
          <form onSubmit={handleLogin}>
            <TextInput
              label="Username:"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              autoComplete="username"
              required
            />
            <TextInput
              label="Password:"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="current-password"
              required
            />
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
          <p className="mt-3 text-center">
            Don't have an account?{' '}
            <a href="/signup" onClick={handleSignUp}>
              Sign Up
            </a>
          </p>
          {user_id && (
            <p className="mt-3 text-center">User ID from cookie: {user_id}</p>
          )}
        </Card>
      </div>
    </div>
  );
}

export default LoginForm;


