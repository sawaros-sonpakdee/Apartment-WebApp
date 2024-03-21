import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import loginLogo from "../assets/img/login.png";
import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/loginUser', formData)
      if (response.status === 200) {
        // console.log(JSON.stringify(response.data))
        setFormData({
          username: '',
          password: ''
        });
      }
      else {
        console.error('Failed to submit form');
      }
    }
    catch (error) {
      console.error('Error to submit form', error)
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:4000/loginUser', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });
  //     if (response.ok) {
  //       console.log('Form submitted successfully!');
  //       // Optionally reset the form after submission
  //       setFormData({
  //         username: '',
  //         password: ''
  //       });
  //     } else {
  //       console.error('Failed to submit form');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };


  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="login">
        <div className="login-logo">
          <img src={loginLogo} alt="login-logo" />
        </div>

        <div className="input-user">
          <form id="loginForm" onSubmit={handleSubmit} >
            <input type='text' placeholder='Username' name='username' onChange={handleChange} />
            <input type="password" placeholder='Password' name='password' onChange={handleChange} />
            <div className="button-login">
              <button type=''>Login</button>
            </div>
          </form>
          <div className="text-signUp">
            <p><span>Forgot Password ?</span>or<span>Sign Up</span></p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
