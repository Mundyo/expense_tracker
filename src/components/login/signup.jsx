

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ children }) {
  return <div className="card-container">{children}</div>;
}

function SignUp() {
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <div className="center-container mt-5">
      <div className="col-md-6 offset-md-3">
           <Card>
        <h2 className="text-center mb-41"> Expense Tracker</h2>    
        <h3 className="text-center mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        </form>

        <p className="mt-3 text-center">Already have an account? <a href="/">Login</a></p>
        </Card>
      </div>
    </div>
  );
}

export default SignUp;
