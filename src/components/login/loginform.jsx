// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';


// function LoginForm() {

//   const [formData, setFormData] = useState({ username: '', password: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic for handling form submission (e.g., authentication).
//     console.log('Form submitted:', formData);
//   };
//   return (
//     <div>
//           <div className="container mt-5">
//       <div className="col-md-6 offset-md-3">
//         <h2 className="text-center mb-4">Login</h2>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">Username:</label>
//             <input type="text" className="form-control" id="username" name="username" required />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password:</label>
//             <input type="password" className="form-control" id="password" name="password" required />
//           </div>

//           <button type="submit" className="btn btn-primary btn-block">Login</button>
//         </form>

//         <p className="mt-3 text-center">Don't have an account? <a href="/signup">Sign Up</a></p>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default LoginForm;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission (e.g., authentication).
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center mb-4">Login</h2>
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

          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>

        <p className="mt-3 text-center">Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
}

export default LoginForm;
