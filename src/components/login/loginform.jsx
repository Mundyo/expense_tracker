import React, { useState } from 'react';
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Separate TextInput component
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
        console.log('Login successful!');
        window.location.href = '/account';
      } else {
        console.error('Login failed:', response.statusText);
        // Handle errors in the UI
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      // Handle errors in the UI
    }
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
            {/* Using TextInput component */}
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
            {/* Using TextInput component */}
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
        </Card>
      </div>
    </div>
  );
}

export default LoginForm;






// import React, { useState } from 'react';
// import './LoginForm.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Card({ children }) {
//   return <div className="card-container">{children}</div>;
// }

// function LoginForm() {
//   const [formData, setFormData] = useState({ username: '', password: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };




//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     try {
//       console.warn( JSON.stringify(formData));
//       const response = await fetch(' http://localhost:3001/login', {   
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (response.ok) {
//         console.log('Login successful!');
//         window.location.href = '/account';
//       } else {
//         console.error('Login failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error during login:', error.message);
//     }
//   };
  
//   const handleSignUp = () =>{
//     window.location.href ="/signup";
//   }
  

//   return (
//     <div className="center-container">
//       <div className="col-md-6">
//         <Card>
//           <h2 className="text-center mb-41"> Expense Tracker</h2>
//           <h3 className="text-center mb-4"> Login</h3>
//           <form onSubmit={handleLogin}>
//             <div className="mb-3">
//               <label htmlFor="username" className="form-label">
//                 Username:
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleInputChange}
//                 autoComplete="username"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 autoComplete="current-password"
//                 required
//               />
//             </div>

//             <button type="submit" className="btn btn-primary btn-block">
//               Login
//             </button>
//           </form>

//           <p className="mt-3 text-center">
//             Don't have an account? <a href="/signup" onClick={handleSignUp}>Sign Up</a>
//           </p>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;